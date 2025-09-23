'use client'

import { useState, useEffect } from "react";
import "./globals.css";
import Loader from "../components/Loader";
import BackToTop from "../components/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);

  useEffect(() => {
    // Check if user has visited before using sessionStorage
    try {
      const hasVisited = typeof window !== 'undefined' ? sessionStorage.getItem('hasVisited') : null;
      
      if (hasVisited) {
        // User has visited before, skip loader
        setIsLoading(false);
      } else {
        // First time visitor, show loader
        setIsLoading(true);
        const timer = setTimeout(() => {
          setIsLoading(false);
          // Mark that user has visited
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('hasVisited', 'true');
          }
        }, 2000); // 2 seconds minimum loading time

        return () => clearTimeout(timer);
      }
    } catch (error) {
      // Fallback if sessionStorage is not available
      setIsLoading(false);
    }
    
    setHasCheckedSession(true);
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    // Mark that user has visited
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasVisited', 'true');
      }
    } catch (error) {
      // Fallback if sessionStorage is not available
      console.warn('SessionStorage not available');
    }
  };

  // Don't render anything until we've checked the session
  if (!hasCheckedSession) {
    return (
      <html lang="en">
        <head>
          <title>CMD:CYBR - Cybersecurity Solutions & Digital Innovation</title>
          <meta name="description" content="Your trusted partner in cybersecurity solutions and digital innovation. We provide cutting-edge technology to protect and empower your digital future." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className="antialiased" suppressHydrationWarning={true}>
          <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <title>CMD:CYBR - Cybersecurity Solutions & Digital Innovation</title>
        <meta name="description" content="Your trusted partner in cybersecurity solutions and digital innovation. We provide cutting-edge technology to protect and empower your digital future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {isLoading ? (
          <Loader onComplete={handleLoaderComplete} />
        ) : (
          <div className="page-enter-active">
            {children}
            <BackToTop />
          </div>
        )}
      </body>
    </html>
  );
}
