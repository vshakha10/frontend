import React from 'react'
import { createContext } from "react";
import { useState } from "react";


export const themeContext = createContext();

function ThemeContext({children}) {
    const [theme,setTheme] = useState(false);
    
  return (
    <themeContext.Provider value={{theme,setTheme}}>
        {children}
    </themeContext.Provider>
    
  )
}

export default ThemeContext
