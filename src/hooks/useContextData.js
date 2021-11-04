import React, {createContext, useContext, useEffect, useState} from 'react';
import { coinGeckoPrice } from 'api/data';

const Context = createContext();

// import for when you want to CONSUME the value provided inside ContextDataProvider
export const useContextData = () => useContext(Context)

// import for WRAPPING components that want access to the value provided.
const ContextDataProvider = ({children}) => {

    const [price, setPrice] = useState("");
    
    useEffect(() => {
        if(price) return;
        (async () => {
            const res = await coinGeckoPrice();
    
            setPrice(res);
        })();
    }, []);

    const value = {
        price
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ContextDataProvider;
