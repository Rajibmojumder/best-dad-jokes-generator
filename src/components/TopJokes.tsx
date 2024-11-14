import React from 'react';
import { Laugh, ThumbsUp } from 'lucide-react';

export default function TopJokes() {
  const topJokes = [
{ joke: "Why don't eggs tell jokes? They'd crack up! 🥚", rating: 4.9 },
{ joke: "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾", rating: 4.7 },
{ joke: "What do you call fake spaghetti? An impasta! 🍝", rating: 4.6 },
{ joke: "How does a penguin build its house? Igloos it together! 🐧", rating: 4.8 },
{ joke: "Why can't a bicycle stand on its own? It’s two-tired! 🚲", rating: 4.5 },
{ joke: "What do you call cheese that isn't yours? Nacho cheese! 🧀", rating: 4.3 },
{ joke: "I told my wife she was drawing her eyebrows too high. She looked surprised! 😳", rating: 4.7 },
{ joke: "What did the grape do when it got stepped on? Nothing but let out a little wine! 🍇", rating: 4.8 },
{ joke: "Why do golfers wear two pairs of pants? In case they get a hole in one! ⛳️", rating: 4.4 },
{ joke: "How do you organize a space party? You planet! 🌌", rating: 4.6 },
{ joke: "Did you hear about the restaurant on the moon? Great food, no atmosphere! 🌕", rating: 4.5 },
{ joke: "Why did the math book look sad? Because it had too many problems! 📘", rating: 4.7 },
{ joke: "Want to hear a construction joke? Oh, never mind. I’m still working on it! 🛠️", rating: 4.3 },
{ joke: "What did the buffalo say to his son when he left for college? Bison! 🦬", rating: 4.9 },
{ joke: "I used to play piano by ear, but now I use my hands. 🎹", rating: 4.4 },
{ joke: "Why don't skeletons fight each other? They don’t have the guts! 💀", rating: 4.6 },
{ joke: "What’s orange and sounds like a parrot? A carrot! 🥕", rating: 4.2 },
{ joke: "Why did the coffee file a police report? It got mugged! ☕", rating: 4.5 },
{ joke: "Did you hear the joke about the roof? Never mind, it’s over your head! 🏠", rating: 4.3 },
{ joke: "I'm reading a book on anti-gravity. It’s impossible to put down! 📚", rating: 4.8 },
{ joke: "I used to be a baker, but I couldn't make enough dough! 🥖", rating: 4.5 },
{ joke: "Why did the tomato turn red? Because it saw the salad dressing! 🍅", rating: 4.4 },
{ joke: "How do you make holy water? You boil the hell out of it! 💧", rating: 4.9 },
{ joke: "Why don’t some fish play piano? Because you can’t tuna fish! 🎶🐟", rating: 4.5 },
{ joke: "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats. 🍫", rating: 4.7 },
{ joke: "How do cows stay up to date? They read the moos-paper! 🐄", rating: 4.6 },
{ joke: "What did the big flower say to the little flower? Hi, bud! 🌸", rating: 4.3 },
{ joke: "Why did the cookie go to the doctor? Because it felt crumby! 🍪", rating: 4.5 },
{ joke: "Why don't oysters share their pearls? Because they're shellfish! 🦪", rating: 4.8 },
{ joke: "What did the ocean say to the shore? Nothing, it just waved! 🌊", rating: 4.4 },
{ joke: "Why can't a nose be 12 inches long? Because then it would be a foot! 👃", rating: 4.2 },
{ joke: "How does a cucumber become a pickle? It goes through a jarring experience! 🥒", rating: 4.6 },
{ joke: "What do you call an alligator in a vest? An investigator! 🐊", rating: 4.7 },
{ joke: "Why did the frog take the bus to work? His car got toad! 🐸", rating: 4.3 },
{ joke: "Why did the banana go to the doctor? It wasn’t peeling well! 🍌", rating: 4.5 },
{ joke: "Why was the math book sad? It had too many problems! 📐", rating: 4.7 },
{ joke: "How do you catch a squirrel? Climb a tree and act like a nut! 🐿️", rating: 4.4 },
{ joke: "Did you hear about the kidnapping at the playground? They woke up! 🛝", rating: 4.6 },
{ joke: "What did one wall say to the other? I'll meet you at the corner! 🧱", rating: 4.2 },
{ joke: "Why did the barber win the race? He took a shortcut! ✂️", rating: 4.7 },
{ joke: "What’s brown and sticky? A stick! 🪵", rating: 4.1 },
{ joke: "I used to be a banker, but I lost interest. 💵", rating: 4.5 },
{ joke: "How do you organize a space party? You planet! 🌌", rating: 4.8 },
{ joke: "Why did the tomato blush? Because it saw the salad dressing! 🍅", rating: 4.6 },
{ joke: "What did the janitor say when he jumped out of the closet? Supplies! 🧹", rating: 4.9 },
{ joke: "Why don’t you ever see elephants hiding in trees? Because they’re so good at it! 🐘", rating: 4.3 },
{ joke: "I only know 25 letters of the alphabet. I don’t know y. 🔤", rating: 4.6 },
{ joke: "What do you call a can opener that doesn’t work? A can’t opener! 🥫", rating: 4.5 },
{ joke: "I would avoid the sushi if I was you. It’s a little fishy. 🍣", rating: 4.7 },
{ joke: "Did you hear about the fire at the circus? It was in tents! 🎪", rating: 4.4 },
{ joke: "Why don’t skeletons fight each other? They don’t have the guts! 💀", rating: 4.8 },
{ joke: "Why do chicken coops only have two doors? Because if they had four, they’d be chicken sedans! 🐔", rating: 4.2 },
{ joke: "What did the grape do when he got stepped on? Nothing but let out a little wine! 🍇", rating: 4.9 },
{ joke: "How does a snowman get around? By riding an 'icicle! ⛄️", rating: 4.6 },
{ joke: "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels! 🥯", rating: 4.3 },
{ joke: "What’s Forrest Gump’s password? 1forrest1! 🌲", rating: 4.7 },
{ joke: "What kind of shoes do ninjas wear? Sneakers! 🥷", rating: 4.4 },
{ joke: "Why did the coffee file a police report? It got mugged! ☕", rating: 4.8 },
{ joke: "Why don’t scientists trust atoms? Because they make up everything! ⚛️", rating: 4.9 },
{ joke: "How does a dog stop a video? By hitting the paws button! 🐾", rating: 4.5 },
{ joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳", rating: 4.6 },
{ joke: "Why can’t you give Elsa a balloon? Because she’ll let it go! 🎈", rating: 4.2 },
{ joke: "How do astronomers organize a party? They planet! 🌌", rating: 4.7 },
{ joke: "Why did the mushroom go to the party alone? Because he’s a fungi! 🍄", rating: 4.5 },
{ joke: "Why do melons have weddings? Because they cantaloupe! 🍈", rating: 4.6 },
{ joke: "What did one hat say to the other? You stay here, I’ll go on ahead! 🎩", rating: 4.3 },
{ joke: "How do you make a tissue dance? You put a little boogie in it! 🤧", rating: 4.8 },
{ joke: "Why did the man put his money in the blender? He wanted to make some liquid assets! 💸", rating: 4.4 },
{ joke: "What’s brown and sounds like a bell? Dung! 🐂", rating: 4.1 },
{ joke: "Why are elevator jokes so good? They work on so many levels! 🛗", rating: 4.7 },
{ joke: "How do you catch a unique rabbit? Unique up on it! 🐇", rating: 4.5 },
{ joke: "What did the zero say to the eight? Nice belt! 🎩", rating: 4.2 },
{ joke: "What did the fish say when he hit the wall? Dam! 🐟", rating: 4.9 },
{ joke: "Why don’t skeletons ever go trick or treating? Because they have no body to go with! 🎃", rating: 4.4 },
{ joke: "Why did the bicycle fall over? It was two-tired! 🚲", rating: 4.6 },
{ joke: "What do you call a bear with no teeth? A gummy bear! 🐻", rating: 4.3 },
{ joke: "How does a rabbi make his coffee? Hebrews it! ☕", rating: 4.8 },
{ joke: "Why don’t some couples go to the gym? Because some relationships don’t work out! 🏋️", rating: 4.5 },
{ joke: "Why did the math book look sad? It had too many problems! 📘", rating: 4.7 },
{ joke: "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾", rating: 4.6 },
{ joke: "Why do birds fly south for the winter? Because it’s too far to walk! 🦅", rating: 4.4 },
{ joke: "What did the buffalo say when his son left? Bison! 🦬", rating: 4.8 },
{ joke: "Why did the cookie cry? Because his father was a wafer so long! 🍪", rating: 4.3 },
{ joke: "How do you make holy water? You boil the hell out of it! 💧", rating: 4.9 },
{ joke: "Why don’t you play hide and seek with mountains? Because they’ll peak! 🏔️", rating: 4.2 },
{ joke: "How do you make a lemon drop? Just let it fall! 🍋", rating: 4.5 },
{ joke: "What did the janitor say when he jumped out of the closet? Supplies! 🧹", rating: 4.7 },
{ joke: "Why did the man put his money in the freezer? He wanted cold hard cash! ❄️", rating: 4.4 },
{ joke: "Why are spiders so smart? Because they can find everything on the web! 🕸️", rating: 4.6 },
{ joke: "What did the left eye say to the right eye? Between us, something smells! 👃", rating: 4.8 },
{ joke: "How does a scientist freshen her breath? With experi-mints! 🌱", rating: 4.5 },
{ joke: "What kind of music do mummies listen to? Wrap! 🧻", rating: 4.3 },
{ joke: "Why did the stadium get hot after the game? All the fans left! 🏟️", rating: 4.7 },
{ joke: "What did one plate say to the other? Lunch is on me! 🍽️", rating: 4.2 },
{ joke: "Why was the baby strawberry crying? Because her parents were in a jam! 🍓", rating: 4.5 },
{ joke: "What’s orange and sounds like a parrot? A carrot! 🥕", rating: 4.1 },
{ joke: "What do you call a fish with no eye? Fsh! 🐟", rating: 4.4 },
{ joke: "Why did the golfer bring an extra pair of pants? In case he got a hole in one! ⛳️", rating: 4.9 },
{ joke: "Why don’t scientists trust atoms? Because they make up everything! 🔬", rating: 4.8 },
{ joke: "What do you call two birds in love? Tweethearts! 🐦", rating: 4.6 },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Laugh className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            100 Actually Funny Dad Jokes That’ll Crack You Up
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've collected the most legendary dad jokes of all time, rated by our community of joke enthusiasts.
            Prepare for some serious groaning! 😄
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {topJokes.map((joke, index) => (
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