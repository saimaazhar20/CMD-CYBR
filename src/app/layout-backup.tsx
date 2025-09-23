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
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Simple loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
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
          <Loader onComplete={() => setIsLoading(false)} />
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
