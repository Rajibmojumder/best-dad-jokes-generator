import React from 'react';
import { Laugh, ThumbsUp } from 'lucide-react';

export default function BadJokes() {
  const badJokes = [
    { joke: "What do you call a fake noodle? An impasta! 🍝", rating: 4.9 },
    { joke: "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾", rating: 4.8 },
    { joke: "Why don't eggs tell jokes? They'd crack up! 🥚", rating: 4.7 },
    { joke: "What do you call a can opener that doesn't work? A can't opener! 🥫", rating: 4.6 },
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.9 },
    { joke: "Why did the cookie go to the doctor? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a pig doing karate? Pork chop! 🥋", rating: 4.8 },
    { joke: "Why don't skeletons fight each other? They don't have the guts! 💀", rating: 4.6 },
    { joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine! 🍇", rating: 4.9 },
    { joke: "Why don't scientists trust atoms? Because they make up everything! ⚛️", rating: 4.7 },
    { joke: "What do you call a sleeping bull? A bulldozer! 🐂", rating: 4.8 },
    { joke: "Why did the math book look sad? Because it had too many problems! 📚", rating: 4.6 },
    { joke: "What do you call a fish wearing a bowtie? So-fish-ticated! 🐠", rating: 4.9 },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.7 },
    { joke: "What do you call a bear with no ears? B! 🐻", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.6 },
    { joke: "What do you call a pig that does karate? A pork chop! 🥋", rating: 4.9 },
    { joke: "Why did the scarecrow become a successful motivational speaker? He was outstanding in his field! 🌾", rating: 4.7 },
    { joke: "What do you call a can opener that doesn't work? A can't opener! 🥫", rating: 4.8 },
    { joke: "Why don't eggs tell jokes? They'd crack up! 🥚", rating: 4.6 },
    { joke: "What do you call a fake noodle? An impasta! 🍝", rating: 4.9 },
    { joke: "Why did the cookie go to the doctor? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.8 },
    { joke: "Why don't skeletons fight each other? They don't have the guts! 💀", rating: 4.6 },
    { joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine! 🍇", rating: 4.9 },
    { joke: "Why don't scientists trust atoms? Because they make up everything! ⚛️", rating: 4.7 },
    { joke: "What do you call a sleeping bull? A bulldozer! 🐂", rating: 4.8 },
    { joke: "Why did the math book look sad? Because it had too many problems! 📚", rating: 4.6 },
    { joke: "What do you call a fish wearing a bowtie? So-fish-ticated! 🐠", rating: 4.9 },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.7 },
    { joke: "What do you call a bear with no ears? B! 🐻", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.6 },
    { joke: "What do you call a pig that does karate? A pork chop! 🥋", rating: 4.9 },
    { joke: "Why did the scarecrow become a successful motivational speaker? He was outstanding in his field! 🌾", rating: 4.7 },
    { joke: "What do you call a can opener that doesn't work? A can't opener! 🥫", rating: 4.8 },
    { joke: "Why don't eggs tell jokes? They'd crack up! 🥚", rating: 4.6 },
    { joke: "What do you call a fake noodle? An impasta! 🍝", rating: 4.9 },
    { joke: "Why did the cookie go to the doctor? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.8 },
    { joke: "Why don't skeletons fight each other? They don't have the guts! 💀", rating: 4.6 },
    { joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine! 🍇", rating: 4.9 },
    { joke: "Why don't scientists trust atoms? Because they make up everything! ⚛️", rating: 4.7 },
    { joke: "What do you call a sleeping bull? A bulldozer! 🐂", rating: 4.8 },
    { joke: "Why did the math book look sad? Because it had too many problems! 📚", rating: 4.6 },
    { joke: "What do you call a fish wearing a bowtie? So-fish-ticated! 🐠", rating: 4.9 },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.7 },
    { joke: "What do you call a bear with no ears? B! 🐻", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.6 },
    { joke: "What do you call a pig that does karate? A pork chop! 🥋", rating: 4.9 },
    { joke: "Why did the scarecrow become a successful motivational speaker? He was outstanding in his field! 🌾", rating: 4.7 },
    { joke: "What do you call a can opener that doesn't work? A can't opener! 🥫", rating: 4.8 },
    { joke: "Why don't eggs tell jokes? They'd crack up! 🥚", rating: 4.6 },
    { joke: "What do you call a fake noodle? An impasta! 🍝", rating: 4.9 },
    { joke: "Why did the cookie go to the doctor? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.8 },
    { joke: "Why don't skeletons fight each other? They don't have the guts! 💀", rating: 4.6 },
    { joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine! 🍇", rating: 4.9 },
    { joke: "Why don't scientists trust atoms? Because they make up everything! ⚛️", rating: 4.7 },
    { joke: "What do you call a sleeping bull? A bulldozer! 🐂", rating: 4.8 },
    { joke: "Why did the math book look sad? Because it had too many problems! 📚", rating: 4.6 },
    { joke: "What do you call a fish wearing a bowtie? So-fish-ticated! 🐠", rating: 4.9 },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.7 },
    { joke: "What do you call a bear with no ears? B! 🐻", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.6 },
    { joke: "What do you call a pig that does karate? A pork chop! 🥋", rating: 4.9 },
    { joke: "Why did the scarecrow become a successful motivational speaker? He was outstanding in his field! 🌾", rating: 4.7 },
    { joke: "What do you call a can opener that doesn't work? A can't opener! 🥫", rating: 4.8 },
    { joke: "Why don't eggs tell jokes? They'd crack up! 🥚", rating: 4.6 },
    { joke: "What do you call a fake noodle? An impasta! 🍝", rating: 4.9 },
    { joke: "Why did the cookie go to the doctor? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.8 },
    { joke: "Why don't skeletons fight each other? They don't have the guts! 💀", rating: 4.6 },
    { joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine! 🍇", rating: 4.9 },
    { joke: "Why don't scientists trust atoms? Because they make up everything! ⚛️", rating: 4.7 },
    { joke: "What do you call a sleeping bull? A bulldozer! 🐂", rating: 4.8 },
    { joke: "Why did the math book look sad? Because it had too many problems! 📚", rating: 4.6 },
    { joke: "What do you call a fish wearing a bowtie? So-fish-ticated! 🐠", rating: 4.9 },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.7 },
    { joke: "What do you call a bear with no ears? B! 🐻", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.6 },
    { joke: "What do you call a pig that does karate? A pork chop! 🥋", rating: 4.9 },
    { joke: "Why did the scarecrow become a successful motivational speaker? He was outstanding in his field! 🌾", rating: 4.7 },
    { joke: "What do you call a can opener that doesn't work? A can't opener! 🥫", rating: 4.8 },
    { joke: "Why don't eggs tell jokes? They'd crack up! 🥚", rating: 4.6 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Laugh className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            100 So-Bad-They're-Good Dad Jokes That Will Make You Groan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get ready to groan! Here's our collection of the most eye-rolling, 
            face-palming dad jokes that are so bad, they're actually hilarious! 🤦‍♂️
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {badJokes.map((joke, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                    #{index + 1}
                  </span>
                  <p className="text-lg text-gray-800 leading-relaxed">{joke.joke}</p>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <ThumbsUp className="w-5 h-5 fill-current" />
                  <span className="font-medium">{joke.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}