import React, { useRef, useEffect } from 'react';

import sendIcon from "../../assets/send_icon.png";
import micIcon from "../../assets/mic_icon.png";

function Chatbox(){
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        const handleInput = () => {
            textarea.style.height = '48px';
            const scHeight = textarea.scrollHeight;
            textarea.style.height = `${Math.min(scHeight, 288)}px`;
        };

        textarea?.addEventListener('input', handleInput);
        return () => textarea?.removeEventListener('input', handleInput);
    }, []);

    return (
        <div className="fixed w-screen h-1/12 flex justify-center items-center bottom-0">
            <div className="flex justify-center items-center w-5/12 h-full relative">
              <div className="flex absolute right-0 z-1 pr-2">
                <button>
                  <img className="w-9 bg-black border-8 border-black rounded-4xl hidden" src={sendIcon} alt="send" />
                </button>
                <button>
                  <img className="w-9 bg-black border-8 border-black rounded-4xl" src={micIcon} alt="microphone" />
                </button>
              </div>
              <textarea 
                ref={textareaRef}
                id="chatbox"
                className="fixed w-5/12 h-12 min-h-[48px] max-h-72 outline-0 bg-white rounded-3xl pl-5 pr-12 pt-[11px] pb-2.5 border-white text-black shadow-md dark:bg-gray-900 dark:text-white" 
                style={{ resize: 'none', bottom: '12px' }} 
                placeholder="Ask me anything"
              />
            </div>
        </div>
    );
}
export default Chatbox