"use client";
import React, { useState, useEffect } from "react";

const HeroPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex items-center overflow-hidden">
      {/* Consistent animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/8 to-yellow-300/8 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-yellow-300/6 to-amber-600/6 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-10 right-10 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-500 opacity-80"></div>
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

            {/* Main Headline with consistent sizing */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-8 tracking-tight">
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
            {/* <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 Rating</span>
              </div>
            </div> */}
          </div>

          {/* Right Column: Consistent Video/Visual */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Consistent glow effects */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-300/20 blur-xl animate-pulse-slow"></div>
              
              {/* Video container with consistent styling */}
              <div className="relative">
                <video
                  className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full object-cover border-4 border-amber-400/50 shadow-2xl shadow-amber-500/20 relative z-10"
                  src="/asset-63e44766.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Simplified floating UI elements */}
                <div className="absolute top-8 -left-4 bg-gray-800/80 backdrop-blur-sm border border-amber-400/30 rounded-lg p-3 animate-pulse-slow z-20">
                  <div className="flex items-center gap-2 text-sm text-amber-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>AI Analyzing...</span>
                  </div>
                </div>
                
                <div className="absolute bottom-12 -right-8 bg-gray-800/80 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-3 animate-pulse-slow delay-1000 z-20">
                  <div className="text-xs text-yellow-400">
                    <div className="font-semibold">Risks Analysis</div>
                    <div className="text-gray-400">3 found, 2 resolved</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-12 bg-gray-800/80 backdrop-blur-sm border border-amber-300/30 rounded-lg p-3 animate-pulse-slow delay-500 z-20">
                  <div className="text-xs text-amber-300">
                    <div className="font-semibold">Data Security</div>
                    <div className="text-gray-400">100% Protected</div>
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default HeroPage;