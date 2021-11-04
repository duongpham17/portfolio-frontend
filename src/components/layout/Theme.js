import React from 'react';
import ContextThemeProvider, {useContextTheme} from 'hooks/useContextTheme';

export const Theme = ({children}) =>
(
    <ContextThemeProvider>
        <ThemePlaceholder children={children}/>
    </ContextThemeProvider>
)
export default Theme

const ThemePlaceholder = ({children}) => {

    const {theme} = useContextTheme();
    
    return (
        <div data-theme={theme}>
            {children}
        </div>
    )
}
