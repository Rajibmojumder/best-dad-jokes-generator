import React from 'react';
import { Lightbulb, Heart, Globe2, MessageCircle, HelpCircle, Sparkles, Shield, Clock } from 'lucide-react';

export default function Content() {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 py-16">
      {/* Features Section */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Why Choose Our Dad Jokes Generator?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Lightbulb className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Instant Laughter</h3>
            <p className="text-gray-600">
              Generate hilarious dad jokes instantly in multiple languages to brighten anyone's day.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Globe2 className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Multilingual Fun</h3>
            <p className="text-gray-600">
              Enjoy dad jokes in 9 different languages, making humor accessible across cultures.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Shield className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Family-Friendly</h3>
            <p className="text-gray-600">
              All jokes are carefully curated to ensure they're clean, safe, and appropriate for all ages.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Best Dad Jokes Generator
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to bestdadjokesgenerator.com, your ultimate destination for the finest collection of dad jokes! 
            Our platform is designed to spread joy and laughter through the timeless art of dad humor. Whether you're 
            a parent looking to embarrass your kids (in a good way!), a joke enthusiast, or someone who just needs a 
            good laugh, we've got you covered.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Our Mission</h3>
              <p className="text-gray-600">
                To spread joy and create memorable moments through clean, family-friendly humor that bridges 
                generations and cultures. We believe laughter is the best medicine, and dad jokes are the 
                perfect prescription!
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">What Makes Us Special</h3>
              <p className="text-gray-600">
                Our AI-powered joke generator creates unique, contextually relevant dad jokes while maintaining 
                the classic dad joke style. We ensure cultural sensitivity and appropriate content for all audiences.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center text-sm text-gray-500 mt-8">
            <Heart className="w-4 h-4 text-red-500 mr-2" />
            <span>Made with love for dads and joke enthusiasts worldwide</span>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          More Awesome Features
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Clock className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Always Fresh</h3>
            <p className="text-gray-600 text-sm">
              New jokes generated in real-time, so you never run out of material.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Sparkles className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Smart Filtering</h3>
            <p className="text-gray-600 text-sm">
              Our AI ensures jokes are appropriate and maintain the perfect dad joke style.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <MessageCircle className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Different Styles</h3>
            <p className="text-gray-600 text-sm">
              Choose from various categories including funny, clean, and kid-friendly jokes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Globe2 className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Cultural Adaptation</h3>
            <p className="text-gray-600 text-sm">
              Jokes are culturally adapted, not just translated, for each language.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">What makes a joke a "dad joke"?</h3>
              <p className="text-gray-600">
                Dad jokes are typically clean, family-friendly puns or wordplay that are so corny they make 
                you groan and laugh at the same time. They're characterized by their simplicity and often 
                obvious punchlines.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Are the jokes family-friendly?</h3>
              <p className="text-gray-600">
                Absolutely! All our jokes are carefully curated to be clean, family-friendly, and 
                appropriate for all ages. You can safely share them with anyone, anywhere.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">How often are new jokes added?</h3>
              <p className="text-gray-600">
                Our AI-powered system generates unique jokes on demand, ensuring you always get fresh 
                content. The jokes are generated in real-time based on your selected language and style 
                preferences.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Can I suggest new features or languages?</h3>
              <p className="text-gray-600">
                We love hearing from our users! Feel free to contact us through our social media channels 
                with your suggestions for new features, languages, or improvements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Why are some jokes not translated perfectly?</h3>
              <p className="text-gray-600">
                Humor can be challenging to translate while maintaining the original wordplay. Our system 
                tries to create culturally appropriate jokes in each language rather than direct 
                translations to ensure the humor translates well.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">How do you ensure joke quality?</h3>
              <p className="text-gray-600">
                Our AI system is trained on thousands of classic dad jokes and uses advanced filtering to 
                ensure each joke meets our standards for humor, appropriateness, and that classic dad-joke style.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}