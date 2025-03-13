import React from "react";
import { themeContext } from "./ThemeContext";
import { useContext } from "react";
import { IoMoon } from "react-icons/io5";


export const Theme = () => {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <>
      <div className={`w-screen h-screen flex justify-center items-center ${theme ? "bg-gray-800":"bg-white"}`}>
        <button onClick={()=>setTheme(prev => !prev)} className={`px-2 py-1 border${theme ?" border-white text-white"  :" text-gray-400"}`}><IoMoon/></button>
      </div>
    </>
  );
};
