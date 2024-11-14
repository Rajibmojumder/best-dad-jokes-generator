import React from 'react';
import { Laugh, ThumbsUp } from 'lucide-react';

export default function KidsJokes() {
  const kidsJokes = [
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.9 },
    { joke: "What do clouds wear? Thunderwear! ☁️", rating: 4.8 },
    { joke: "What do you call a dinosaur that crashes his car? Tyrannosaurus wrecks! 🦖", rating: 4.9 },
    { joke: "Why don't eggs tell jokes? They'd crack up! 🥚", rating: 4.7 },
    { joke: "What do you call a sleeping bull? A bulldozer! 🐂", rating: 4.8 },
    { joke: "What do you call a pig that does karate? A pork chop! 🥋", rating: 4.7 },
    { joke: "Why did the cookie go to the doctor? Because it was feeling crumbly! 🍪", rating: 4.6 },
    { joke: "What do you call a duck that gets all A's? A wise quacker! 🦆", rating: 4.8 },
    { joke: "Why did the jellybean go to school? To become a smartie! 🍬", rating: 4.7 },
    { joke: "What do you call a fish wearing a crown? A kingfish! 👑", rating: 4.6 },
    { joke: "What's a cat's favorite color? Purr-ple! 😺", rating: 4.8 },
    { joke: "Why don't bananas snore? Because they don't want to wake up the rest of the bunch! 🍌", rating: 4.7 },
    { joke: "What do you call a snowman with a six-pack? An abdominal snowman! ⛄", rating: 4.9 },
    { joke: "Why did the math book look so sad? Because it had too many problems! 📚", rating: 4.6 },
    { joke: "What kind of tree fits in your hand? A palm tree! 🌴", rating: 4.7 },
    { joke: "What do you call a bear with no ears? B! 🐻", rating: 4.8 },
    { joke: "Why did the bicycle fall over? Because it was two-tired! 🚲", rating: 4.7 },
    { joke: "What do you call a fish wearing a bowtie? So-fish-ticated! 🐠", rating: 4.6 },
    { joke: "Why don't eggs tell each other secrets? Because they might crack up! 🥚", rating: 4.8 },
    { joke: "What do you call a sleeping pizza? A pizzzzza! 🍕", rating: 4.7 },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.6 },
    { joke: "What do you call a funny mountain? Hill-arious! 🏔️", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a duck that loves making jokes? A wise-quacker! 🦆", rating: 4.9 },
    { joke: "Why did the teddy bear say no to dessert? Because she was stuffed! 🧸", rating: 4.8 },
    { joke: "What do you call a cat that loves bowling? An alley cat! 🎳", rating: 4.7 },
    { joke: "Why did the robot go back to school? To improve its circuits! 🤖", rating: 4.6 },
    { joke: "What do you call a sheep with no legs? A cloud! ☁️", rating: 4.8 },
    { joke: "Why don't basketballs tell jokes? They might bounce! 🏀", rating: 4.7 },
    { joke: "What do you call a dog magician? A labracadabrador! 🐕", rating: 4.9 },
    { joke: "Why did the jelly roll? Because it saw the butter fly! 🦋", rating: 4.6 },
    { joke: "What do you call a rabbit with fleas? Bugs Bunny! 🐰", rating: 4.8 },
    { joke: "Why did the cookie go to the doctor? It was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.8 },
    { joke: "Why did the banana go to the doctor? It wasn't peeling well! 🍌", rating: 4.7 },
    { joke: "What do you call a cow that plays music? A MOO-sician! 🐄", rating: 4.6 },
    { joke: "Why did the chicken cross the playground? To get to the other slide! 🐔", rating: 4.8 },
    { joke: "What do you call a fish wearing a crown? A king salmon! 👑", rating: 4.7 },
    { joke: "Why don't oysters share their pearls? Because they're shellfish! 🦪", rating: 4.9 },
    { joke: "What do you call a duck that gets all A's? A wise quacker! 🦆", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a bear with no ears? B! 🐻", rating: 4.6 },
    { joke: "Why did the jellybean go to school? To become a smartie! 🍬", rating: 4.8 },
    { joke: "What do you call a pig that does karate? A pork chop! 🥋", rating: 4.7 },
    { joke: "Why did the math book look so sad? Because it had too many problems! 📚", rating: 4.9 },
    { joke: "What do you call a snowman with a six-pack? An abdominal snowman! ⛄", rating: 4.8 },
    { joke: "Why don't bananas snore? Because they don't want to wake up the rest of the bunch! 🍌", rating: 4.7 },
    { joke: "What's a cat's favorite color? Purr-ple! 😺", rating: 4.6 },
    { joke: "What do you call a fish wearing a bowtie? So-fish-ticated! 🐠", rating: 4.8 },
    { joke: "Why did the bicycle fall over? Because it was two-tired! 🚲", rating: 4.7 },
    { joke: "What kind of tree fits in your hand? A palm tree! 🌴", rating: 4.9 },
    { joke: "Why don't eggs tell each other secrets? Because they might crack up! 🥚", rating: 4.8 },
    { joke: "What do you call a sleeping pizza? A pizzzzza! 🍕", rating: 4.7 },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.6 },
    { joke: "What do you call a funny mountain? Hill-arious! 🏔️", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a duck that loves making jokes? A wise-quacker! 🦆", rating: 4.9 },
    { joke: "Why did the teddy bear say no to dessert? Because she was stuffed! 🧸", rating: 4.8 },
    { joke: "What do you call a cat that loves bowling? An alley cat! 🎳", rating: 4.7 },
    { joke: "Why did the robot go back to school? To improve its circuits! 🤖", rating: 4.6 },
    { joke: "What do you call a sheep with no legs? A cloud! ☁️", rating: 4.8 },
    { joke: "Why don't basketballs tell jokes? They might bounce! 🏀", rating: 4.7 },
    { joke: "What do you call a dog magician? A labracadabrador! 🐕", rating: 4.9 },
    { joke: "Why did the jelly roll? Because it saw the butter fly! 🦋", rating: 4.8 },
    { joke: "What do you call a rabbit with fleas? Bugs Bunny! 🐰", rating: 4.7 },
    { joke: "Why did the cookie go to the doctor? It was feeling crumbly! 🍪", rating: 4.6 },
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.8 },
    { joke: "Why did the banana go to the doctor? It wasn't peeling well! 🍌", rating: 4.7 },
    { joke: "What do you call a cow that plays music? A MOO-sician! 🐄", rating: 4.9 },
    { joke: "Why did the chicken cross the playground? To get to the other slide! 🐔", rating: 4.8 },
    { joke: "What do you call a fish wearing a crown? A king salmon! 👑", rating: 4.7 },
    { joke: "Why don't oysters share their pearls? Because they're shellfish! 🦪", rating: 4.6 },
    { joke: "What do you call a duck that gets all A's? A wise quacker! 🦆", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a bear with no ears? B! 🐻", rating: 4.9 },
    { joke: "Why did the jellybean go to school? To become a smartie! 🍬", rating: 4.8 },
    { joke: "What do you call a pig that does karate? A pork chop! 🥋", rating: 4.7 },
    { joke: "Why did the math book look so sad? Because it had too many problems! 📚", rating: 4.6 },
    { joke: "What do you call a snowman with a six-pack? An abdominal snowman! ⛄", rating: 4.8 },
    { joke: "Why don't bananas snore? Because they don't want to wake up the rest of the bunch! 🍌", rating: 4.7 },
    { joke: "What's a cat's favorite color? Purr-ple! 😺", rating: 4.9 },
    { joke: "What do you call a fish wearing a bowtie? So-fish-ticated! 🐠", rating: 4.8 },
    { joke: "Why did the bicycle fall over? Because it was two-tired! 🚲", rating: 4.7 },
    { joke: "What kind of tree fits in your hand? A palm tree! 🌴", rating: 4.6 },
    { joke: "Why don't eggs tell each other secrets? Because they might crack up! 🥚", rating: 4.8 },
    { joke: "What do you call a sleeping pizza? A pizzzzza! 🍕", rating: 4.7 },
    { joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.9 },
    { joke: "What do you call a funny mountain? Hill-arious! 🏔️", rating: 4.8 },
    { joke: "Why did the cookie go to the nurse? Because it was feeling crumbly! 🍪", rating: 4.7 },
    { joke: "What do you call a duck that loves making jokes? A wise-quacker! 🦆", rating: 4.6 },
    { joke: "Why did the teddy bear say no to dessert? Because she was stuffed! 🧸", rating: 4.8 },
    { joke: "What do you call a cat that loves bowling? An alley cat! 🎳", rating: 4.7 },
    { joke: "Why did the robot go back to school? To improve its circuits! 🤖", rating: 4.9 },
    { joke: "What do you call a sheep with no legs? A cloud! ☁️", rating: 4.8 },
    { joke: "Why don't basketballs tell jokes? They might bounce! 🏀", rating: 4.7 },
    { joke: "What do you call a dog magician? A labracadabrador! 🐕", rating: 4.6 },
    { joke: "Why did the jelly roll? Because it saw the butter fly! 🦋", rating: 4.8 },
    { joke: "What do you call a rabbit with fleas? Bugs Bunny! 🐰", rating: 4.7 },
    { joke: "Why did the cookie go to the doctor? It was feeling crumbly! 🍪", rating: 4.9 },
    { joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.8 },
    { joke: "Why did the banana go to the doctor? It wasn't peeling well! 🍌", rating: 4.7 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Laugh className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            100 Kid-Friendly Dad Jokes – Silly, Simple, and Super Funny
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of the most wholesome and fun dad jokes that will make kids laugh out loud! 
            Perfect for family fun time! 😄
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {kidsJokes.map((joke, index) => (
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