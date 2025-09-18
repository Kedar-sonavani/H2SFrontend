"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const IntroductionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-amber-400/8 to-yellow-300/8 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-yellow-300/6 to-amber-600/6 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-40 left-40 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-500 opacity-80"></div>
        <div className="absolute top-60 left-60 w-1.5 h-1.5 bg-amber-300 rounded-full animate-ping delay-1000 opacity-70"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        
        {/* Enhanced Headline with staggered animation */}
        <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-yellow-400/10 border border-amber-400/20 text-amber-400 text-sm font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Advanced Legal Intelligence
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent mb-2">
              Unlock Deeper
            </span>
            <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2">
              Legal Document
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Understanding
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform complex legal documents into <span className="text-amber-400 font-semibold">actionable insights</span> with 
            our AI-powered analysis platform. Get started in seconds.
          </p>
        </div>

        {/* Enhanced Cards Container */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 max-w-6xl mx-auto mb-16">
          
          {/* Card 1: Enhanced Upload Document */}
          <div className={`group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-700/50 hover:border-amber-400/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-amber-500/20 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            
            {/* Animated background effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/5 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-6 right-6 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
            <div className="absolute top-10 right-10 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-ping delay-300 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {/* Enhanced Icon with animation */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  
                  {/* Status indicator */}
                  <span className="inline-block bg-green-400/10 border border-green-400/20 text-green-300 text-xs font-medium px-2 py-1 rounded-md">
                    Enterprise Ready
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-amber-300 transition-colors duration-300">
                Securely Process Documents
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Upload contracts, agreements, and policies for AI-powered analysis with 
                <span className="text-amber-400 font-semibold"> enterprise-grade security</span> and 
                instant sanitization. Experience the future of legal document processing.
              </p>

              {/* Enhanced CTA Button */}
              <Link href="/app" className="block">
                <button className="relative w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 overflow-hidden group/btn mb-6">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    Upload & Analyze
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
              </Link>

              {/* Stats */}
              <div className="flex items-center justify-center text-amber-400 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                99.7% Processing Accuracy
              </div>
            </div>
          </div>

          {/* Card 2: Enhanced Q&A Interface */}
          <div className={`group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-700/50 hover:border-amber-400/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-amber-500/20 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            
            {/* Animated background effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-yellow-500/5 via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping delay-150 transition-opacity duration-300"></div>
            <div className="absolute top-12 left-12 w-1 h-1 bg-amber-300 rounded-full opacity-0 group-hover:opacity-90 group-hover:animate-ping delay-500 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {/* Enhanced Icon with animation */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                  
                  {/* Status indicator */}
                  <span className="inline-block bg-blue-400/10 border border-blue-400/20 text-blue-300 text-xs font-medium px-2 py-1 rounded-md">
                    AI Powered
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-amber-300 transition-colors duration-300">
                Chat & Get Instant Answers
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Interact with your documents using our 
                <span className="text-yellow-400 font-semibold"> intelligent AI chatbot</span>. 
                Ask complex questions and receive clear, verifiable insights with 
                <span className="text-amber-400 font-semibold"> cited sources</span> instantly.
              </p>

              {/* Enhanced CTA Button */}
              <Link href="/app" className="block">
                <button className="relative w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 overflow-hidden group/btn mb-6">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Chatting
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>
              </Link>

              {/* Stats */}
              <div className="flex items-center justify-center text-amber-400 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.9/5 User Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced trust indicators */}
        <div className={`flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <div className="flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/30">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/30">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>GDPR Ready</span>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default IntroductionSection;