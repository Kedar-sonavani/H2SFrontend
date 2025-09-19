"use client";
import React, { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // 1. Import useSearchParams
import ChatInterface from './ChatInterface'; 
import DocumentViewer from './DocumentViewer';
import ProcessingComponent from './ProcessingComponent';
import UploadComponent from './UploadComponent';

// 2. Updated application states to be more descriptive
const APP_STATE = {
  AWAITING_UPLOAD: 'AWAITING_UPLOAD', // User clicked "Upload and Chat"
  GENERAL_CHAT: 'GENERAL_CHAT',       // User clicked "Just Chat"
  PROCESSING: 'PROCESSING',
  ANALYSIS: 'ANALYSIS'
};

const ChatPage = () => {
    // 3. Read the 'mode' parameter from the URL to determine the initial state
    const searchParams = useSearchParams();
    const initialMode = searchParams.get('mode');

    const [appState, setAppState] = useState(null); // Start with null state
    const [fileName, setFileName] = useState('');
    const [sanitizedDocText, setSanitizedDocText] = useState('');
    const [messages, setMessages] = useState([/* ... initial message ... */]);

    // Set the initial state once the component mounts and can read the URL
    useEffect(() => {
        if (initialMode === 'upload') {
            setAppState(APP_STATE.AWAITING_UPLOAD);
        } else {
            setAppState(APP_STATE.GENERAL_CHAT);
        }
    }, [initialMode]);

    const handleFileUpload = useCallback(async (file) => {
        if (!file) return;
        setAppState(APP_STATE.PROCESSING);
        setFileName(file.name);

        // --- MOCK BACKEND CALL ---
        setTimeout(() => {
            const simulatedText = `This is the extracted text from "${file.name}".`;
            setSanitizedDocText(simulatedText);
            setMessages(prev => [...prev, {
                sender: 'ai',
                text: `Great! Your document "${file.name}" has been processed.`,
                timestamp: new Date().toISOString()
            }]);
            setAppState(APP_STATE.ANALYSIS);
        }, 3000); 
    }, []);

    // 4. The render function is updated with the new states
    const renderCurrentView = () => {
        switch (appState) {
            case APP_STATE.AWAITING_UPLOAD:
                // If user must upload first, show only the uploader
                return (
                    <div className="w-full max-w-4xl h-[90vh] flex flex-col items-center justify-center">
                        <UploadComponent onFileUpload={handleFileUpload} />
                    </div>
                );

            case APP_STATE.GENERAL_CHAT:
                // If user wants to chat, show the full chat interface (which includes an upload option)
                return (
                    <div className="w-full max-w-4xl h-[90vh] flex flex-col">
                         <ChatInterface 
                            messages={messages} 
                            setMessages={setMessages}
                            documentLoaded={false}
                            onFileUpload={handleFileUpload}
                         />
                    </div>
                );

            case APP_STATE.PROCESSING:
                return <ProcessingComponent fileName={fileName} />;

            case APP_STATE.ANALYSIS:
                return (
                    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl h-[90vh]">
                        <div className="lg:w-2/5 w-full h-full">
                            <DocumentViewer fileName={fileName} sanitizedDocText={sanitizedDocText} />
                        </div>
                        <div className="lg:w-3/5 w-full h-full">
                            <ChatInterface 
                                messages={messages} 
                                setMessages={setMessages}
                                documentLoaded={true}
                                onFileUpload={handleFileUpload} // Allow uploading another doc
                            />
                        </div>
                    </div>
                );
            
            default:
                // Show a loading or blank state while determining the mode
                return <div className="text-white">Loading...</div>;
        }
    };
    
    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-slate-900 p-4">
           {renderCurrentView()}
        </div>
    );
};

export default ChatPage;