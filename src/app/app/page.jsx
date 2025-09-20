"use client";
import React from 'react';
import ChatPage from '@/components/ChatPage';
import Navbar from '@/components/Navbar';

export default function AppPage({ searchParams }) {
  // Determine the initial mode from URL search parameters. 
  // Defaults to "chat" if the 'mode' param is not "upload".
  const initialMode = searchParams.mode === "upload" ? "upload" : "chat";

  return (
    <div>
      <Navbar />
      {/* Pass the determined mode to the ChatPage component */}
      <ChatPage initialMode={initialMode} />
    </div>
  );
}