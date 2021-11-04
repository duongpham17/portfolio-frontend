import React, {createContext, useContext, useState} from 'react';

const Context = createContext();

// import for when you want to CONSUME the value provided inside ContextDataProvider
export const useContextSlideIn = () => useContext(Context)

// import for WRAPPING components that want access to the value provided.
const ContextSlideInProvider = ({children}) => {

    const [id, setId] = useState("");

    const value = {
        setId,
        id
    }
    
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ContextSlideInProvider;
