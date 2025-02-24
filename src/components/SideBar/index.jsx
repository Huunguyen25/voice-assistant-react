import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';  // Make sure this matches the file name exactly

// Fix asset import paths
import appIcon from "../../assets/icon/appicon.png";
import newChatIcon from "../../assets/chat_add_icon.png";
import faceIcon from "../../assets/face_icon.png";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

function SideBar() {
return (
    <div className="fixed w-16 h-screen top-0 left-0 p-2 flex flex-col bg-white shadow-xl">
        {/*top*/}
        <div className='flex flex-col'>
            <SideBarIcon icon={<img src={appIcon} alt="app icon"/>} />
            <SideBarIcon icon={<img src={newChatIcon} alt="new chat" className='w-8 invert'/>}
             text="New Chat"
             showToolTips={true}/>
        </div>
        <div className='mt-auto'>
          <ThemeIcon/>
          <SideBarIcon icon={<img src={faceIcon} alt="settings" className='w-8 invert'/>} />
        </div>
    </div>
    );
}

const ThemeIcon = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <span onClick={() => setTheme(colorTheme)}>
      {colorTheme === "light" ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const SideBarIcon = ({ icon, text, showToolTips = false}) => (
    <div className='sidebar-icon group'>
        {icon}
        {showToolTips && (
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
        )}
    </div>
);

export default SideBar;
