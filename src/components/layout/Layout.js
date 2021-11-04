import styles from './Layout.module.scss';

import dynamic from 'next/dynamic';
const Theme = dynamic(() => import("./Theme"), { ssr: false });

import ContextDataProvider from 'hooks/useContextData';

import Navbar from 'constant/navbar';
import Footer from 'constant/footer';

export const Main = ({ children }) => {

    return (
        <Theme>
            <Navbar/>
            
            <ContextDataProvider>
                <div className={styles.container}> 
                    {children} 
                </div>
            </ContextDataProvider>

            <Footer/>
        </Theme>
    )
}

export default Main;