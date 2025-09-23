'use client'

import { useEffect, useState } from 'react'

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hide loader after completion
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15; // Random increment for realistic feel
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="cyber-grid"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="cyber-particle" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="cyber-particle" style={{top: '30%', right: '15%', animationDelay: '1s'}}></div>
        <div className="cyber-particle" style={{top: '60%', left: '20%', animationDelay: '2s'}}></div>
        <div className="cyber-particle" style={{top: '70%', right: '25%', animationDelay: '3s'}}></div>
        <div className="cyber-particle" style={{top: '40%', left: '50%', animationDelay: '4s'}}></div>
        <div className="cyber-particle" style={{top: '80%', left: '70%', animationDelay: '5s'}}></div>
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="animate-pulse">
          <svg
            width="80"
            height="80"
            viewBox="0 0 48 48"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="loaderShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5E7EB" />
                <stop offset="50%" stopColor="#9CA3AF" />
                <stop offset="100%" stopColor="#6B7280" />
              </linearGradient>
              <linearGradient id="loaderGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00BFFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0080FF" stopOpacity="0.4" />
              </linearGradient>
              <filter id="loaderGlow">
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
              stroke="url(#loaderGlowGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#loaderGlow)"
            />
            
            {/* Circuit Board Dots - Left */}
            <circle cx="6" cy="20" r="1" fill="#00FFFF" filter="url(#loaderGlow)" />
            <circle cx="4" cy="24" r="1" fill="#00FFFF" filter="url(#loaderGlow)" />
            <circle cx="6" cy="28" r="1" fill="#00FFFF" filter="url(#loaderGlow)" />
            
            {/* Hexagonal Shield */}
            <path
              d="M24 4 L36 10 L36 22 L24 28 L12 22 L12 10 Z"
              fill="url(#loaderShieldGradient)"
              stroke="url(#loaderGlowGradient)"
              strokeWidth="2"
              filter="url(#loaderGlow)"
            />
            
            {/* Letter C inside shield */}
            <path
              d="M20 16 Q20 12 24 12 Q28 12 28 16 Q28 20 24 20 Q20 20 20 16"
              fill="url(#loaderShieldGradient)"
              stroke="url(#loaderGlowGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#loaderGlow)"
            />
            
            {/* Circuit Board Lines - Right */}
            <path
              d="M40 20 L44 20 M40 24 L46 24 M40 28 L44 28"
              stroke="url(#loaderGlowGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#loaderGlow)"
            />
            
            {/* Circuit Board Dots - Right */}
            <circle cx="42" cy="20" r="1" fill="#00FFFF" filter="url(#loaderGlow)" />
            <circle cx="44" cy="24" r="1" fill="#00FFFF" filter="url(#loaderGlow)" />
            <circle cx="42" cy="28" r="1" fill="#00FFFF" filter="url(#loaderGlow)" />
          </svg>
        </div>

        {/* Company Name */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2" style={{
            background: 'linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 50%, #6B7280 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          }}>
            CMD:CYBR
          </h1>
          <p className="text-cyan-400 text-lg font-medium">Cybersecurity Solutions</p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-80 max-w-sm">
          <div className="flex justify-between text-sm text-cyan-300 mb-2">
            <span>Initializing Security Systems</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>

        {/* Status Text */}
        <div className="text-center text-gray-400 text-sm">
          <p className="animate-pulse">
            {progress < 30 && "Establishing secure connection..."}
            {progress >= 30 && progress < 60 && "Loading threat intelligence..."}
            {progress >= 60 && progress < 90 && "Initializing defense systems..."}
            {progress >= 90 && "Finalizing security protocols..."}
          </p>
        </div>
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="cyber-scan" style={{animationDelay: '0s'}}></div>
        <div className="cyber-scan" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
}
