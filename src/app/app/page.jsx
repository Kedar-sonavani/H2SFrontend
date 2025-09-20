import ChatPageContent from "@/components/ChatPage";
"use client";
import React from 'react';
// Ensure component imports use PascalCase to match their filenames and exports.
import ChatPage from '@/components/ChatPage';
import Navbar from '@/components/Navbar';


export default function AppPage({ searchParams }) {
  const initialMode = searchParams.mode === "upload" ? "upload" : "chat";
  return <ChatPageContent initialMode={initialMode} />;
export default function AppPage() {
  return (
    <div>
      <Navbar/>
      <ChatPage />
    </div>
  );
}
