import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'magenta' | 'green' | 'blue';
  onClick?: () => void;
  hoverable?: boolean;
}

const CyberCard = ({ 
  children, 
  className, 
  glowColor = 'cyan',
  onClick,
  hoverable = true 
}: CyberCardProps) => {
  const glowColors = {
    cyan: 'hover:border-neon-cyan/50 hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.2)]',
    magenta: 'hover:border-neon-magenta/50 hover:shadow-[0_0_30px_hsl(var(--neon-magenta)/0.2)]',
    green: 'hover:border-neon-green/50 hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.2)]',
    blue: 'hover:border-neon-blue/50 hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.2)]',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative p-6 rounded-xl transition-all duration-300',
        'bg-cyber-card/80 backdrop-blur-xl',
        'border border-neon-cyan/20',
        hoverable && glowColors[glowColor],
        hoverable && 'cursor-pointer transform hover:-translate-y-1',
        onClick && 'cursor-pointer',
        className
      )}
    >
      
      
      {children}
    </div>
  );
};

export default CyberCard;
