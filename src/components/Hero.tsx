import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Instagram, Mail, MessageSquare } from 'lucide-react';

const services = [
  {
    title: 'Is Your WhatsApp Hacked?',
    description: 'Recover your hacked WhatsApp account in just 10 minutes.',
    icon: MessageSquare,
    color: 'cyan',
  },
  {
    title: 'Instagram Account Hacked?',
    description: 'Full recovery within 24 hours guaranteed.',
    icon: Instagram,
    color: 'purple',
  },
  {
    title: 'Instagram Disabled?',
    description: 'I recover disabled Instagram accounts safely.',
    icon: Shield,
    color: 'blue',
  },
  {
    title: 'Recover Gmail / YouTube / Snapchat',
    description: 'Fast & secure account recovery support.',
    icon: Mail,
    color: 'green',
  },
  {
    title: 'Report Any Post or Person',
    description: 'Report any post or person who are promoting illegal things or community guidelines violations. Post will be removed within 5 Mins.',
    icon: Shield,
    color: 'blue',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const typingTimer = setTimeout(() => setIsTyping(false), 2000);
    return () => clearTimeout(typingTimer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'from-cyan-500 to-blue-500 border-cyan-400',
      purple: 'from-purple-500 to-pink-500 border-purple-400',
      blue: 'from-blue-500 to-cyan-500 border-blue-400',
      green: 'from-green-500 to-emerald-500 border-green-400',
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
          {/* Name Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism1 rounded-full text-white border border-cyan-400 backdrop-blur-sm animate-fade-in">
            <span className="text-lg font-semibold text-muted-foreground">Star Cybercrime Intervention Officer</span>
          </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="block text-white ">
                Cybersecurity Expert
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mt-2">
                & Ethical Hacker
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              I Secure, Recover, Unlock & Protect Your{' '}
              <span className="text-cyan-400 font-semibold">
                Digital World
              </span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-4 glass-morphism text-white font-bold rounded-lg border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] sm:h-[450px] overflow-hidden rounded-2xl">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <div
                      className={`h-full glass-morphism rounded-2xl p-8 border-2 ${getColorClass(
                        service.color
                      )} bg-gradient-to-br relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm animate-float">
                          <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white text-cyber-glow">
                          {service.title}
                        </h3>

                        <p className="text-lg text-gray-200 max-w-md">
                          {service.description}
                        </p>

                        <div className="flex gap-2 mt-4">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full glass-morphism border border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full glass-morphism border border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transition-all z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-cyan-400 w-8 shadow-lg shadow-cyan-400/50'
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
