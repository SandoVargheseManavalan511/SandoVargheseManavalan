import { Shield, Award, Users, Clock } from 'lucide-react';
import CyberCard from './CyberCard';

const stats = [
  { icon: Users, value: '2000+', label: 'Clients Helped' },
  { icon: Shield, value: '99.9%', label: 'Success Rate' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Terminal Style Content */}
          <div className="order-2 lg:order-1 ">
            <CyberCard glowColor="cyan" hoverable={false} className="relative overflow-hidden glass-morphism1">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-neon-green" />
                <span className="ml-4 font-mono text-xs text-muted-foreground">iamsando511@gmail.com:~$ cat about.txt</span>
              </div>

              {/* Terminal Content */}
              <div className="font-mono text-sm space-y-4">
                <p className="text-neon-green">
                  <span className="text-neon-cyan">&gt;</span> PROFILE LOADED: SANDO
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cybersecurity Expert & Ethical Hacker with advanced expertise in digital forensics, 
                  device unlocking, social media recovery, and mobile OS repair.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Helping clients recover data, secure accounts, and resolve device problems 
                  safely and professionally.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-neon-cyan">
                    <span className="text-muted-foreground">&gt;</span> SPECIALIZATIONS:
                  </p>
                  <ul className="mt-2 space-y-1">
                    {['Digital Forensics', 'Device Unlocking', 'Social Media Recovery', 'Mobile OS Repair', 'Data Recovery', 'Security Consulting'].map((skill) => (
                      <li key={skill} className="text-muted-foreground flex items-center gap-2">
                        <span className="text-neon-magenta">▸</span> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-neon-green animate-pulse">
                  <span className="text-neon-cyan">&gt;</span> STATUS: ONLINE_
                </p>
              </div>
            </CyberCard>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About
              <span className='text-neon-magenta'> Sando</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over 5 years of experience in cybersecurity, I've helped thousands of 
              clients recover their hacked accounts, unlock their devices, and secure their 
              digital presence. My approach combines cutting-edge technology with proven 
              methodologies to deliver fast, reliable results.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl glass-morphism1 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-neon-cyan mb-2" />
                  <p className="font-cyber text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;