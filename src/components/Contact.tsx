import { useState } from 'react';
import { Mail, Send, MapPin, Clock, Linkedin, Instagram } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState<string | null>(null);

  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY; // client-side key

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResultMsg(null);

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('service', formData.service);
      payload.append('message', formData.message);
      payload.append('access_key', WEB3FORMS_KEY);
      // optionally: add redirect or subject
      // payload.append('subject', `New contact request: ${formData.service}`);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const json = await res.json();

      if (json.success) {
        setResultMsg('Message sent successfully! I will get back to you soon.');
        setSubmitted(true);
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        // web3forms responds with errors in json.errors
        console.error('Web3Forms error', json);
        setResultMsg('Error sending message. Please try again later.');
      }
    } catch (err) {
      console.error('Network error', err);
      setResultMsg('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
      // auto-hide confirmation after 3s like before
      setTimeout(() => {
        setSubmitted(false);
        setResultMsg(null);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-mono text-sm tracking-wider">{'>'} CONTACT_MODULE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span>Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to secure your digital world? Reach out for immediate assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="glass-morphism rounded-2xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-400/10 border-2 border-cyan-400 group-hover:animate-pulse-glow flex-shrink-0">
                    <Instagram className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/_gully_boy_511?igsh=bnBocWZhZ213dDl6&utm_source=qr"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                    >
                      gully_boy_511
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400/10 border-2 border-blue-400 group-hover:animate-pulse-glow flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:iamsando511@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors font-mono"
                    >
                      iamsando511@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-400/10 border-2 border-purple-400 group-hover:animate-pulse-glow flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/sando-varghese-manavalan-430280216/"
                      className="text-purple-400 hover:text-purple-300 transition-colors font-mono"
                    >
                      sando-varghese-manavalan
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400/10 border-2 border-green-400 group-hover:animate-pulse-glow flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Availability</h4>
                    <p className="text-green-400 font-mono">24/7 Emergency Support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400/10 border-2 border-yellow-400 group-hover:animate-pulse-glow flex-shrink-0">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Service Area</h4>
                    <p className="text-yellow-400">Worldwide Remote Services</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/_gully_boy_511?igsh=bnBocWZhZ213dDl6&utm_source=qr"
              className="block w-full px-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl text-center hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 neon-border-green text-xl"
            >
              <Instagram className="w-6 h-6 inline-block mr-3" />
              Chat on Instagram Now
            </a>
          </div>

          <div className="glass-morphism rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {resultMsg && (
              <div className={`mb-6 p-4 ${submitted ? 'bg-green-500/20 border-green-400' : 'bg-red-600/10 border-red-400'} border rounded-lg`}>
                <p className={`${submitted ? 'text-green-400' : 'text-red-300'} font-semibold`}>
                  {resultMsg}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name, Email, Service, Message inputs unchanged */}
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="account-recovery">Account Recovery</option>
                  <option value="device-unlock">Device Unlock</option>
                  <option value="data-recovery">Data Recovery</option>
                  <option value="whatsapp-services">WhatsApp Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your issue..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 neon-border flex items-center justify-center space-x-2 disabled:opacity-60"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="glass-morphism rounded-2xl p-6 border border-cyan-400/30 max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg">
              <span className="text-cyan-400 font-semibold">Emergency Services Available:</span> For urgent account recovery or device unlocking, contact me directly via Instagram for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
