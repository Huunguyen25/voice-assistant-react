import React, { useEffect, useRef } from 'react';
import './index.css'
import SideBar from './components/SideBar';
import Chatbox from './components/Chatbox';

// Import images (remove the ones moved to SideBar)


function App() {
  return (
    
    <div className="flex">
      {/* Main Container */}
      {/* Voice Overlay */}
      {/* App Menu */}
      <SideBar />
      {/* Chat Interface */}
      {/* Messages Area */}
      {/* Input Area */}
      <Chatbox/>
    </div>
  )
}

export default App;
