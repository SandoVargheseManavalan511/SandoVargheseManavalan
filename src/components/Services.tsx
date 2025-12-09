import { useState } from 'react';
import {
  Lock, Smartphone, Shield, Settings, Download, Trash2, MessageSquare,
  RefreshCw, HardDrive, Database, FileText, Wifi, Key, Instagram,
  Mail, Youtube, Camera, AlertTriangle, MessageCircle, Ghost, CheckCircle, Clock
} from 'lucide-react';
import CyberCard from './CyberCard';
import whatsappHacked from '@/assets/whatsapp-hacked.jpg';
import instagramHacked from '@/assets/instagram-hacked.jpg';
import instagramDisabled from '@/assets/instagram-disabled.jpg';
import socialRecovery from '@/assets/social-recovery.jpg';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  details: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 'screen-lock',
    title: 'Screen Lock Removal',
    description: 'Remove all phone lock screens',
    icon: Lock,
    category: 'Device Unlock',
    details: [
      'Remove all types of screen locks',
      'Compatible with Apple ID, Face ID, Touch ID',
      'Safe & secure process',
      'No data loss',
    ],
    color: 'cyan',
  },
  {
    id: 'apple-id',
    title: 'Unlock Apple ID',
    description: 'Remove activation lock safely',
    icon: Smartphone,
    category: 'Device Unlock',
    details: [
      'Remove activation lock completely',
      'Regain full access to device',
      'Works on all iOS versions',
      'Professional service',
    ],
    color: 'blue',
  },
  {
    id: 'mdm',
    title: 'Remove / Bypass MDM',
    description: 'Bypass MDM & access device easily',
    icon: Shield,
    category: 'Device Unlock',
    details: [
      'For forgotten username/password',
      'Bypass MDM restrictions',
      'Full device access restored',
      'Enterprise-grade solution',
    ],
    color: 'purple',
  },
  {
    id: 'frp',
    title: 'Bypass Samsung FRP',
    description: 'Remove FRP lock without PIN',
    icon: Smartphone,
    category: 'Device Unlock',
    details: [
      'Remove FRP lock completely',
      'No Google account needed',
      'No PIN required',
      'Fast process',
    ],
    color: 'green',
  },
  {
    id: 'system-repair',
    title: 'System Repair (iOS / Android)',
    description: 'Fix system errors & boot issues',
    icon: Settings,
    category: 'Device Repair',
    details: [
      'Fix iTunes errors',
      'Repair boot loops',
      'Fix black screen issues',
      'Recovery mode fixes',
      'No data loss',
    ],
    color: 'cyan',
  },
  {
    id: 'ios-download',
    title: 'Download iOS Without iTunes',
    description: 'Direct iOS firmware download',
    icon: Download,
    category: 'Device Repair',
    details: [
      'No iTunes required',
      'No jailbreak needed',
      'No data loss',
      'Latest iOS versions',
    ],
    color: 'blue',
  },
  {
    id: 'anti-recovery',
    title: 'Anti-Recovery Repair',
    description: 'Completely destroy recoverable data',
    icon: Trash2,
    category: 'Data Eraser',
    details: [
      'Best before selling device',
      'Military-grade data wipe',
      'Completely destroys recoverable data',
      'Irreversible process',
      '100% privacy protection',
    ],
    color: 'red',
  },
  {
    id: 'whatsapp-transfer',
    title: 'WhatsApp Transfer',
    description: 'Transfer chats across devices',
    icon: MessageSquare,
    category: 'WhatsApp & Social',
    details: [
      'Transfer, backup & restore chats',
      'iOS to Android & vice versa',
      'Export chats to PDF or HTML',
      'Support for LINE, Kik, Viber, WeChat',
    ],
    color: 'green',
  },
  {
    id: 'whatsapp-merge',
    title: 'WhatsApp Merge & Transfer',
    description: 'Merge old & new chat history',
    icon: RefreshCw,
    category: 'WhatsApp & Social',
    details: [
      'Merge old and new chat history',
      'Full cross-platform transfer',
      'No data loss',
      'Seamless integration',
    ],
    color: 'cyan',
  },
  {
    id: 'whatsapp-backup',
    title: 'WhatsApp Backup',
    description: 'Backup chats to PC',
    icon: HardDrive,
    category: 'WhatsApp & Social',
    details: [
      'Backup chats & attachments to PC',
      'Restore to any device',
      'Secure local backup',
      'No cloud dependency',
    ],
    color: 'blue',
  },
  {
    id: 'android-recovery',
    title: 'Recover Android Data',
    description: 'Recover all types of Android data',
    icon: Database,
    category: 'Data Recovery',
    details: [
      'Contacts, messages, photos, notes',
      'Works on 6000+ Android devices',
      'Supports broken screen devices',
      'High success rate',
    ],
    color: 'purple',
  },
  {
    id: 'ios-recovery',
    title: 'Recover iOS Data',
    description: 'Complete iOS data recovery',
    icon: Smartphone,
    category: 'Data Recovery',
    details: [
      'Supports 30+ data types',
      'Contacts, SMS, WhatsApp, photos',
      'Recover from iCloud & iTunes',
      'Advanced scanning algorithms',
    ],
    color: 'cyan',
  },
  {
    id: 'whatsapp-recovery',
    title: 'Recover WhatsApp Data',
    description: 'Recover deleted WhatsApp messages',
    icon: MessageSquare,
    category: 'Data Recovery',
    details: [
      'Recover deleted messages',
      'Recover "View Once" messages',
      'Works without root',
      'WhatsApp Business support',
    ],
    color: 'green',
  },
  {
    id: 'one-click-erase',
    title: 'One-Click Erase',
    description: 'Fully wipe all data',
    icon: Trash2,
    category: 'Data Eraser',
    details: [
      'Complete data wipe',
      'iOS & Android support',
      'Irreversible process',
      'Fast & secure',
    ],
    color: 'red',
  },
  {
    id: 'privacy-erase',
    title: 'Privacy Erase',
    description: 'Selectively erase private data',
    icon: Shield,
    category: 'Data Eraser',
    details: [
      'Selectively erase private data',
      'Keep important files',
      'Target specific data types',
      'Complete privacy control',
    ],
    color: 'purple',
  },
  {
    id: 'military-wipe',
    title: 'Military-Grade 100% Wipe',
    description: 'Maximum security data destruction',
    icon: AlertTriangle,
    category: 'Data Eraser',
    details: [
      'Military-grade security',
      '100% data destruction',
      'Meets DOD standards',
      'Unrecoverable by any means',
    ],
    color: 'red',
  },
  {
    id: 'phone-transfer',
    title: 'Phone Transfer',
    description: 'One-click full phone transfer',
    icon: RefreshCw,
    category: 'Phone Transfer',
    details: [
      'One-click phone-to-phone transfer',
      'Support 12+ file types',
      'iOS to Android & vice versa',
      'Fast & secure transfer',
    ],
    color: 'cyan',
  },
  {
    id: 'password-manager',
    title: 'Password Manager',
    description: 'Recover all saved passwords',
    icon: Key,
    category: 'Password Recovery',
    details: [
      'Recover saved iOS passwords',
      'Find WiFi passwords (no jailbreak)',
      'Restore website & app login passwords',
      'Recover email passwords (Gmail, Outlook, AOL)',
    ],
    color: 'blue',
  },
  {
    id: 'doc-pass-remover',
    title: 'DocPassRemover',
    description: 'Remove document passwords',
    icon: FileText,
    category: 'Password Recovery',
    details: [
      'Remove passwords from PDF/Excel/Word',
      'Crack open protected documents',
      'Unlock restricted permissions',
      'One-click password removal',
    ],
    color: 'purple',
  },
];

const recoveryServices = [
  {
    id: 'whatsapp',
    icon: MessageCircle,
    title: 'Recover Hacked WhatsApp',
    time: '10 mins',
    description: 'Quick recovery of compromised WhatsApp accounts',
    image: whatsappHacked,
    color: 'green' as const,
  },
  {
    id: 'instagram-hacked',
    icon: Instagram,
    title: 'Recover Hacked Instagram',
    time: '24 hours',
    description: 'Full recovery with security restoration',
    image: instagramHacked,
    color: 'magenta' as const,
  },
  {
    id: 'instagram-disabled',
    icon: Instagram,
    title: 'Recover Disabled Instagram',
    time: '48-72 hours',
    description: 'Safe recovery of disabled accounts',
    image: instagramDisabled,
    color: 'cyan' as const,
  },
  {
    id: 'gmail',
    icon: Mail,
    title: 'Recover Hacked Gmail',
    time: '2-6 hours',
    description: 'Restore access to compromised Gmail accounts',
    image: socialRecovery,
    color: 'blue' as const,
  },
  {
    id: 'youtube',
    icon: Youtube,
    title: 'Recover Hacked YouTube',
    time: '24-48 hours',
    description: 'Channel recovery and security hardening',
    image: socialRecovery,
    color: 'magenta' as const,
  },
  {
    id: 'snapchat',
    icon: Ghost,
    title: 'Recover Hacked Snapchat',
    time: '1-4 hours',
    description: 'Quick Snapchat account recovery',
    image: socialRecovery,
    color: 'cyan' as const,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];
  const filteredServices = filter === 'All' ? services : services.filter(s => s.category === filter);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      cyan: { bg: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-400', text: 'text-cyan-400' },
      blue: { bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-400', text: 'text-blue-400' },
      purple: { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-400', text: 'text-purple-400' },
      green: { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-400', text: 'text-green-400' },
      red: { bg: 'from-red-500/20 to-orange-500/20', border: 'border-red-400', text: 'text-red-400' },
      pink: { bg: 'from-pink-500/20 to-purple-500/20', border: 'border-pink-400', text: 'text-pink-400' },
      yellow: { bg: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-400', text: 'text-yellow-400' },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-mono text-sm tracking-wider">{'>'} SERVICES_MODULE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span>Service Matrix</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions for all your digital needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${filter === category
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white neon-border'
                : 'glass-morphism text-gray-300 border border-gray-600 hover:border-cyan-400'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const colorClasses = getColorClasses(service.color);
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`glass-morphism rounded-xl p-6 border-2 ${colorClasses.border} bg-gradient-to-br ${colorClasses.bg} hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${colorClasses.bg} border-2 ${colorClasses.border} group-hover:animate-pulse-glow`}>
                    <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                  </div>
                  <h3 className={`text-lg font-bold text-white`}>{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                  <span className={`text-xs ${colorClasses.text} font-mono`}>{service.category}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="text-red-400">Emergency</span> Account Recovery
            </h3>
            <p className="text-gray-400 text-lg">Fast & guaranteed recovery services</p>
          </div>

          {/* Recovery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recoveryServices.map((service, index) => {
              const Icon = service.icon;

              // explicit classes so Tailwind picks them up
              const bgClass =
                service.color === 'green' ? 'bg-neon-green/10' :
                  service.color === 'magenta' ? 'bg-neon-magenta/10' :
                    service.color === 'cyan' ? 'bg-neon-cyan/10' :
                      'bg-neon-blue/10';

              const textClass =
                service.color === 'green' ? 'text-neon-green' :
                  service.color === 'magenta' ? 'text-neon-magenta' :
                    service.color === 'cyan' ? 'text-neon-cyan' :
                      'text-neon-blue';

              return (
                <div
                  key={service.id}
                  className="opacity-0 fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}
                >
                  {/* make CyberCard relative and remove internal padding via p-0 */}
                  <CyberCard glowColor={service.color} className="h-64 overflow-hidden relative p-0">
                    {/* Full-bleed image container */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Bottom fade: only covers the bottom half so top stays visible */}
                      <div className="absolute left-0 right-0 bottom-0 h-1/2 z-10 pointer-events-none
                  bg-gradient-to-t from-black/85 via-black/60 to-transparent" />
                    </div>

                    {/* Top-right time badge with clock */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-3 py-1 rounded-full glass-morphism1 border border-neon-green/50 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 font-semibold text-neon-green" />
                        <span className="font-cyber text-xs font-semibold text-white">{service.time}</span>
                      </div>
                    </div>

                    {/* Bottom-left overlay (icon + text) */}
                    <div className="absolute bottom-4 left-4 z-20 flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${bgClass}`}>
                        <Icon className={`w-6 h-6 ${textClass}`} />
                      </div>

                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="w-4 h-4 text-neon-green" />
                          <h3 className="font-cyber text-sm font-semibold">{service.title}</h3>
                        </div>
                        <p className="text-xs text-gray-200/90">{service.description}</p>
                      </div>
                    </div>


                    {/* Keep the decorative corners from CyberCard — they are absolutely positioned */}
                  </CyberCard>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className={`glass-morphism rounded-2xl p-8 max-w-2xl w-full border-2 ${getColorClasses(selectedService.color).border
              } animate-border-glow`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${getColorClasses(selectedService.color).bg
                    } border-2 ${getColorClasses(selectedService.color).border}`}
                >
                  <selectedService.icon
                    className={`w-8 h-8 ${getColorClasses(selectedService.color).text}`}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                  <p className={`text-sm ${getColorClasses(selectedService.color).text} font-mono`}>
                    {selectedService.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-300 mb-6">{selectedService.description}</p>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
              {selectedService.details.map((detail, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${getColorClasses(selectedService.color).border} bg-current`}></div>
                  <p className="text-gray-300">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className={`px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300`}
              >
                Get This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
