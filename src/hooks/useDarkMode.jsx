// import { useEffect, useState } from 'react';

// const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   });

//   const setValue = (value) => {
//     try {
//       const valueToStore = value instanceof Function ? value(storedValue) : value;

//       setStoredValue(valueToStore);

//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return [storedValue, setValue];
// };

// const useDarkMode = () => {
//   const [enabled, setEnabled] = useLocalStorage('dark-theme');
//   const isEnabled = typeof enabledState === 'undefined' && enabled;
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     if (localStorage.theme === "dark" || !("theme" in localStorage)) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }

//     if (localStorage.theme === "dark") {
//       localStorage.theme = "light";
//     } else {
//       localStorage.theme = "dark";
//     }
//   }

//   useEffect(() => {
//     const className = 'dark';
//     const bodyClass = window.document.body.classList;

//     isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
//   }, [enabled, isEnabled]);

//   return [enabled, setEnabled, count, handleClick];
// };

// export default useDarkMode;

import { useEffect, useState } from "react";

export default function useDarkMode(){
  const [theme, setTheme] = useState('light');
  const colorTheme =theme === 'light' ? 'dark' : 'light';
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme)
  },
  [theme], colorTheme)
  return [colorTheme, setTheme]
}