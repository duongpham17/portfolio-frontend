import React from 'react';

import { useContextTheme } from 'hooks/useContextTheme';

export const Theme = ({children}) => {

    const {theme} = useContextTheme();

    return (
        <div data-theme={theme}>
            {children}
        </div>
    )
}

export default Theme
