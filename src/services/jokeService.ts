import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": "https://bestdadjokesgenerator.com",
    "X-Title": "Best Dad Jokes Generator",
    "Content-Type": "application/json"
  }
});

// Cache to store previously generated jokes per language
const jokeCacheMap = new Map<string, Set<string>>();

export const supportedLanguages = [
  { code: 'en', name: 'English', direction: 'ltr' },
  { code: 'hi', name: 'Hindi', direction: 'ltr' },
  { code: 'de', name: 'German', direction: 'ltr' },
  { code: 'fil', name: 'Filipino', direction: 'ltr' },
  { code: 'ga', name: 'Irish', direction: 'ltr' },
  { code: 'nl', name: 'Dutch', direction: 'ltr' },
  { code: 'ms', name: 'Malay', direction: 'ltr' },
  { code: 'sv', name: 'Swedish', direction: 'ltr' },
  { code: 'ar', name: 'Arabic', direction: 'rtl' }
];

export async function fetchDadJokes(
  limit: number = 5, 
  type: string = 'funny',
  language: string = 'en'
): Promise<string[]> {
  try {
    const promptByType = {
      funny: "lighthearted and amusing",
      family: "family-friendly and wholesome",
      hilarious: "laugh-out-loud funny",
      bad: "classic groan-worthy",
      clean: "clean and appropriate"
    };

    if (!jokeCacheMap.has(language)) {
      jokeCacheMap.set(language, new Set<string>());
    }
    const jokeCache = jokeCacheMap.get(language)!;

    if (jokeCache.size > 200) {
      const cacheArray = Array.from(jokeCache);
      jokeCache.clear();
      cacheArray.slice(-100).forEach(joke => jokeCache.add(joke));
    }

    const langConfig = supportedLanguages.find(l => l.code === language) || supportedLanguages[0];

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o-2024-08-06",
      messages: [{
        role: "user",
        content: `You are a professional comedian specializing in dad jokes. Generate ${limit} short dad jokes in ${langConfig.name} language that are ${promptByType[type as keyof typeof promptByType]}. 

Rules:
- Keep each joke concise
- Include one relevant emoji and one 😄 at the end
- Use simple, clear language
- Focus on classic dad joke formats (puns, wordplay)
- Each joke must be unique and not previously used
- No complex or long setups
- Ensure jokes are culturally appropriate for ${langConfig.name} speakers

Example format for ${langConfig.name}:
[Provide joke in ${langConfig.name}] [emoji] 😄`
      }],
      temperature: 0.9,
      max_tokens: 500,
      presence_penalty: 1.0,
      frequency_penalty: 1.0,
      stream: false
    });

    if (!completion.choices?.[0]?.message?.content) {
      throw new Error('No response from API');
    }

    const content = completion.choices[0].message.content;
    const jokes = content
      .split('\n')
      .filter(line => line.trim() && !line.startsWith('Rules:') && !line.startsWith('Example:'))
      .map(line => line.trim())
      .filter(joke => {
        const isUnique = !jokeCache.has(joke);
        const hasEmojis = /\p{Emoji}/u.test(joke);
        return joke.length > 0 && isUnique && hasEmojis;
      });

    if (jokes.length === 0) {
      throw new Error('Failed to generate unique jokes');
    }

    const selectedJokes = jokes.slice(0, limit);
    selectedJokes.forEach(joke => jokeCache.add(joke));

    return selectedJokes;
  } catch (error: any) {
    console.error('API Error:', error);
    throw new Error('Failed to generate jokes. Please try again.');
  }
}