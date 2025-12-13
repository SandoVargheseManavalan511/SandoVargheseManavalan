import { Shield, Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import Favicon from '@/assets/Favicon.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={Favicon} alt="Sando logo" className="w-10 h-10" />
              </div>
              <span className="text-white font-bold text-xl">Sando Varghese Manavalan</span>
            </div>
            <p className="text-gray-400 mb-4">
              Cybersecurity Expert & Ethical Hacker
            </p>
            <p className="text-cyan-400 font-mono text-sm">
              Securing the Digital World
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/_gully_boy_511?igsh=bnBocWZhZ213dDl6&utm_source=qr_code"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-pink-400 hover:bg-pink-400/10 text-gray-400 hover:text-pink-400 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sando-varghese-manavalan-430280216/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-blue-400 hover:bg-blue-400/10 text-gray-400 hover:text-blue-400 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:iamsando511@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 text-gray-400 hover:text-cyan-400 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <a href="https://kodryx.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Kodryx AI Product. All rights reserved.
            </a>
            {/*<div className="flex items-center space-x-2">
              
              <Mail className="w-4 h-4 text-gray-400 text-sm font-mono"/> 
              <a href='mailto:contact@kodryx.ai' className="text-gray-400 text-sm font-mono">contact@kodryx.ai</a>
              
              <span className="text-gray-400 text-sm font-mono"> | </span>

              <Phone className="w-4 h-4 text-gray-400 text-sm font-mono"/> 
              <a href='tel:+917207960011' className="text-gray-400 text-sm font-mono">+91 72079 60011</a>

              <span className="text-gray-400 text-sm font-mono"> | </span>

              <MapPin className="w-4 h-4 text-gray-400 text-sm font-mono"/> 
              <span className="text-gray-400 text-sm font-mono">Hyderabad, 500032, India</span>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
}
