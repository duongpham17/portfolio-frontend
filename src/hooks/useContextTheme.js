import React, {createContext, useContext, useState} from 'react';

const Context = createContext();

export const useContextTheme = () => useContext(Context)

const ContextThemeProvider = ({children}) => {
    const isBrowser = typeof window !== "undefined";

    const currentTheme = isBrowser && localStorage.getItem("theme") || "light";

    const [theme, setTheme] = useState(currentTheme);

    const changeTheme = () => {

        if(!isBrowser) return;

        const createTheme = (t) => {
            localStorage.setItem("theme", t);
            setTheme(t);
        }

        if(theme === "dark") return createTheme("light");

        if(theme === "light") return createTheme("dark");
        
    }

    const value = {
        theme,
        changeTheme
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ContextThemeProvider;
