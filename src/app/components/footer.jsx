"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* --- Change is here: Added max-w-6xl --- */}
      <div className="container mx-auto max-w-6xl px-6 py-12">
        
        {/* Top Section: Links & Branding */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white">DocuMind</h2>
            <p className="text-sm">Clarity in Every Clause.</p>
          </div>
          <div className="flex flex-wrap gap-10">
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul>
                <li className="mb-2"><a href="#features" className="hover:text-amber-400 transition-colors">Riskometer</a></li>
                <li className="mb-2"><a href="#features" className="hover:text-amber-400 transition-colors">Q&A with Proof</a></li>
                <li className="mb-2"><a href="#features" className="hover:text-amber-400 transition-colors">Checklists</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li className="mb-2"><a href="#" className="hover:text-amber-400 transition-colors">Our Mission</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10">
          {/* Middle Section: Newsletter */}
    
          {/* Bottom Section: Copyright */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">&copy; 2025 DocuMind. All rights reserved.</p>
            <p>A project for the Hack2Skill Hackathon.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;