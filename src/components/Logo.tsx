interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ className = "", isScrolled = false, size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: { icon: 'w-8 h-8', text: 'text-lg' },
    medium: { icon: 'w-12 h-12', text: 'text-2xl' },
    large: { icon: 'w-16 h-16', text: 'text-4xl' }
  };
  
  const currentSize = sizeClasses[size];
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width={size === 'small' ? '32' : size === 'large' ? '64' : '48'}
          height={size === 'small' ? '32' : size === 'large' ? '64' : '48'}
          viewBox="0 0 48 48"
          className="drop-shadow-lg"
        >
          {/* Hexagonal Shield Background */}
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5E7EB" />
              <stop offset="50%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#6B7280" />
            </linearGradient>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00BFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0080FF" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Circuit Board Lines - Left */}
          <path
            d="M8 20 L4 20 M8 24 L2 24 M8 28 L4 28"
            stroke="url(#glowGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          
          {/* Circuit Board Dots - Left */}
          <circle cx="6" cy="20" r="1" fill="#00FFFF" filter="url(#glow)" />
          <circle cx="4" cy="24" r="1" fill="#00FFFF" filter="url(#glow)" />
          <circle cx="6" cy="28" r="1" fill="#00FFFF" filter="url(#glow)" />
          
          {/* Hexagonal Shield */}
          <path
            d="M24 4 L36 10 L36 22 L24 28 L12 22 L12 10 Z"
            fill="url(#shieldGradient)"
            stroke="url(#glowGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          
          {/* Letter C inside shield */}
          <path
            d="M20 16 Q20 12 24 12 Q28 12 28 16 Q28 20 24 20 Q20 20 20 16"
            fill="url(#shieldGradient)"
            stroke="url(#glowGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          
          {/* Circuit Board Lines - Right */}
          <path
            d="M40 20 L44 20 M40 24 L46 24 M40 28 L44 28"
            stroke="url(#glowGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          
          {/* Circuit Board Dots - Right */}
          <circle cx="42" cy="20" r="1" fill="#00FFFF" filter="url(#glow)" />
          <circle cx="44" cy="24" r="1" fill="#00FFFF" filter="url(#glow)" />
          <circle cx="42" cy="28" r="1" fill="#00FFFF" filter="url(#glow)" />
        </svg>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span className={`${currentSize.text} font-bold transition-colors duration-700 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`} style={{
            background: 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 50%, #6B7280 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: isScrolled ? 'none' : '0 0 10px rgba(0, 255, 255, 0.3)'
          }}>
            CMD:
          </span>
        </div>
        
        {/* Glowing line separator */}
        <div className={`h-0.5 w-full transition-all duration-700 ${
          isScrolled 
            ? 'bg-gradient-to-r from-transparent via-gray-400 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50'
        }`}></div>
        
        <span className={`${currentSize.text} font-bold transition-colors duration-700 ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`} style={{
          background: 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 50%, #6B7280 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: isScrolled ? 'none' : '0 0 10px rgba(0, 255, 255, 0.3)'
        }}>
          CYBR
        </span>
      </div>
    </div>
  );
}
