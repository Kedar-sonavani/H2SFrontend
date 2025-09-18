"use client";
import React, { useState } from 'react';

// This component assumes Tailwind CSS is set up in your React project.
// You can add the Inter font in your main CSS file or index.html.

const App = () => {
    // State to manage the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu state
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        
        <div className="bg-black" style={{ fontFamily: "'Inter', sans-serif" }}>
            <nav className="bg-black text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    
                    {/* Logo / Brand Name */}
                    <div className="text-2xl font-bold">
                        <a href="#">Legal Clarity</a>
                    </div>

                    {/* Centered Navigation Links for Desktop */}
                    <div className="hidden md:flex border border-gray-700 bg-black rounded-full px-4 py-2">
                        <ul className="flex items-center space-x-8">
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm">About</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm">Testimonial</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-300 text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Launch App Button */}
                    <div className="hidden md:block">
                        <button className="bg-amber-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                            Launch App
                        </button>
                    </div>

                    {/* Mobile Menu Button (Hamburger Icon) */}
                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                </div>
                
                {/* Mobile Menu (conditionally rendered based on state) */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4">
                        <ul className="flex flex-col items-center space-y-4">
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-300">About</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-300">Testimonial</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors duration-300">Contact</a></li>
                             <li>
                                <button className="bg-amber-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 mt-4">
                                    Launch App
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default App;
