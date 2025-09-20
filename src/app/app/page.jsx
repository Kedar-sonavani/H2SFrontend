"use client";
import React from 'react';
// Ensure component imports use PascalCase to match their filenames and exports.
import ChatPage from '@/components/ChatPage';
import Navbar from '@/components/Navbar';


export default function AppPage() {
  return (
    <div>
      <Navbar/>
      <ChatPage />
    </div>
  );
}

