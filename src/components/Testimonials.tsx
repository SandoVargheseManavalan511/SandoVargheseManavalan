import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Bipin Bakshi',
    role: 'Senior Millitary Officer',
    text: 'Happy to inform Mr Sando, Cyber Crime Intervention Officier(CCIO) helped me to resolve the Fake Profile issue where an impostr had copied my photos, and was contacting my known security persons who were with me in Indian Army or NSG. With his help I was able to correctly report the problem and get the fake account blocked. Thanks to Sando whom I could contact through ISAC Foundation and CopConnect, he did the role of Cyber Crime First Responder. As a senior millitary officer, my profile was beign used for fake messages about some financial dealings, that has been prevented!',
    rating: 5,
    avatar: 'BB',
  },
  {
    name: 'Kowork.co.im',
    role: 'Business',
    text: 'I\'m thrilled to share my experience with Mr Sando Varghese, a WhatsApp recovery specialist who helped me regain acess to my hacked account. After falling victim to a hacking incident, I was introduced to Mr Sando Varghese through a trusted source. His professionalism, expertise, and dedication were evident from our first interaction. He guided me through the recovery process with patience and clarity, ensuring I understood each step. Thanks to his efforts, I successfully regained access to my WhatsApp account without any data loss. I highly recommend Mr Sando Varghese by a friend, and I\'m grateful for the recommendation that led me to his exceptional services. His expertise has saved me from potential harassment and identify theft. If you\'re looking for a reliable and skilled professional to assist with WhatsApp recovery, Mr Sando Varghese is the person to contact.',
    rating: 5,
    avatar: 'KC',
  },
  {
    name: 'Raj Patel',
    role: 'Senior Citizen',
    text: 'Yesterday evening, I received a message from a friend asking me to forward a six-digit SMS code via WhatsApp. I complied-and that was all it took for my account to be hacked. I was locked out and unable to generate new codes, while calls and texts continued going out from my number. By this morning, nearly a dozen friends had called me in confusion, and I had to tell them not to answer or forward anything from my account. Then with a reference I approached ISAC CCIO Mr Sando Varghese. He Solved my issue at the earliest. I am a Senior Citizen and not well versed with WhatsApp issues. But Mr Sando Varghese made it so simple for me and recovered my WhatsApp account without any data loss. I am very grateful to him and ISAC Foundation for their support.',
    rating: 5,
    avatar: 'RP',
  },
  {
    name: 'David Martinez',
    role: 'Freelancer',
    text: 'Recovered my disabled Instagram account when I thought it was gone forever. Nikhil is a lifesaver!',
    rating: 5,
    avatar: 'DM',
  },
  {
    name: 'Emma Wilson',
    role: 'Marketing Manager',
    text: 'Excellent data recovery service. Retrieved all my important files from a broken Android device. 100% satisfied!',
    rating: 5,
    avatar: 'EW',
  },
  {
    name: 'Raj Patel',
    role: 'Software Engineer',
    text: 'Bypass FRP lock on my Samsung device. Quick, professional, and secure service. Will definitely use again!',
    rating: 5,
    avatar: 'RP',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-mono text-sm tracking-wider">{'>'} CLIENT_FEEDBACK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span >Client Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from satisfied clients worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-morphism rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400 group-hover:animate-pulse-glow">
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm font-mono">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-400 font-semibold">✓ Verified Client</span>
                  <span className="text-gray-500 font-mono">2024</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-morphism rounded-2xl p-8 border border-cyan-400/30 max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">2,000+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">5.0★</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
