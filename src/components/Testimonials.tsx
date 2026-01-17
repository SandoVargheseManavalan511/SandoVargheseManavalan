import { Star } from 'lucide-react';
import { useState } from 'react';
import TruncatedText from './TruncatedText';
import AllTestimonialsModal from './AllTestimonialsModal';
import ImageSlider from './ImageSlider';
import { testimonials } from './testimonials-data';



export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show only first 3 testimonials initially
  const initialTestimonials = testimonials.slice(0, 5);

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
            <span>Client Testimonials</span>
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <p className="text-xl text-gray-400 max-w-3xl">
              Real results from satisfied clients worldwide
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50 border border-cyan-400/30"
            >
              Show All
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between glass-morphism rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-cyan-400 group-hover:animate-pulse-glow">
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  {/* <p className="text-cyan-400 text-sm font-mono">{testimonial.role}</p> */}
                </div>
              </div>

              {/* <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div> */}

              {/* Content: Text, Image, or Video */}

              {testimonial.text && (
                <TruncatedText text={testimonial.text} maxWords={50} bold={index < 3} />
              )}
              {(testimonial.imageUrl || testimonial.imageUrls) && (
                testimonial.imageUrls && testimonial.imageUrls.length > 0 ? (
                  <ImageSlider 
                    images={testimonial.imageUrls} 
                    altText={`Testimonial from ${testimonial.name}`}
                  />
                ) : testimonial.imageUrl ? (
                  <div className="rounded-lg overflow-hidden border border-cyan-400/30 mx-auto max-w-xs">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={`Testimonial from ${testimonial.name}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : null
              )}

              {testimonial.videoUrl && (
                <div className="rounded-lg overflow-hidden border border-cyan-400/30 mx-auto max-w-xs">
                  <video 
                    controls
                    className="w-full h-auto"
                    style={{ aspectRatio: '9/16' }}
                    // poster={testimonial.videoUrl.replace(/\.(mp4|webm|ogg)$/, '-poster.jpg')}
                    preload="metadata"
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              </div>

              <div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-400 font-semibold">✓ Verified Client</span>
                  <span className="text-gray-500 font-mono">{testimonial.year}</span>
                </div>
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

      {/* All Testimonials Modal */}
      <AllTestimonialsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonials={testimonials}
      />
    </section>
  );
}
