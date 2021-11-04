import React from 'react';
import { useContextTheme } from 'hooks/useContextTheme';
import {MdDarkMode, MdOutlineWbSunny} from 'react-icons/md';

export const ThemeToggle = () => {
    const {theme, changeTheme} = useContextTheme();

    return (
        <div>
            <button className="flex" onClick={() => changeTheme()}>{theme === "dark" ? <MdDarkMode className="icon-1"/> : <MdOutlineWbSunny className="icon-1"/>}</button>
        </div>
    )
}

export default ThemeToggle
