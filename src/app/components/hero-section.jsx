"use client";
import React, { useState, useEffect } from "react";

const HeroPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-amber-400/10 to-yellow-300/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-500/8 to-amber-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-1000 opacity-80"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Hero Section */}
      <main className="relative container mx-auto px-6 py-16 md:py-24 text-white z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Enhanced Text Content */}
          <div className={`text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Badge/Announcement */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-yellow-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-6 text-sm font-medium text-amber-300 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              AI-Powered Legal Analysis
            </div>

            {/* Main Headline with enhanced animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] mb-8 tracking-tight">
              <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent mb-2">
                Contracts
              </span>
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                Simplified,
              </span>
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Conversations
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Clarified.
              </span>
            </h1>

            {/* Enhanced description with better typography */}
            <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="text-amber-400 font-bold">Unlock</span> the power of your legal documents. 
              Transform complex contracts into clear, actionable insights with our 
              <span className="text-gradient bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent font-semibold"> AI-powered platform</span>.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group relative bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Start Free Analysis
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              
              <button className="group bg-transparent border-2 border-amber-400/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-amber-400/5">
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Trust indicators */}
            
          </div>

          {/* Right Column: Enhanced Video/Visual */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
  <div className="relative">
    {/* Outer glow ring */}
    <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-300/20 blur-xl animate-glow"></div>
    
    {/* Middle ring */}
    <div className="absolute inset-4 rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-400/30 animate-pulse-slow"></div>
    
    {/* Video container with enhanced effects */}
    <div className="relative">
      <video
        className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full object-cover border-4 border-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-2xl shadow-amber-500/20 relative z-10"
        src="/asset-63e44766.mp4" 
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Floating UI elements */}
      <div className="absolute top-8 -left-4 bg-black/80 backdrop-blur-sm border border-amber-400/30 rounded-lg p-3 animate-float z-20">
        <div className="flex items-center gap-2 text-sm text-amber-400">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span>AI Analyzing...</span>
        </div>
      </div>
      
      {/* Corrected "Contract Risks" element with higher z-index and moved further right */}
      <div className="absolute bottom-12 -right-12 bg-black/80 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-3 animate-float-delayed z-20">
        <div className="text-xs text-yellow-400">
          <div className="font-semibold">Contract Risks</div>
          <div className="text-gray-400">3 found, 2 resolved</div>
        </div>
      </div>
      
      {/* Corrected "Confidence" element with higher z-index and moved further right */}
      <div className="absolute top-1/2 -right-16 bg-black/80 backdrop-blur-sm border border-amber-300/30 rounded-lg p-3 animate-bounce-slow z-20">
        <div className="text-xs text-amber-300">
          <div className="font-semibold">Confidence</div>
          <div className="text-gray-400">98.5%</div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-xs mb-2">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
          75% { transform: translateY(-5px) rotate(1deg); }
        }
        
        @keyframes glow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.3), 0 0 60px rgba(251, 191, 36, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.5), 0 0 80px rgba(251, 191, 36, 0.2);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-glow { animation: glow 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default HeroPage;