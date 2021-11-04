import Head from 'next/head';

const defaultDescription = "Portfolio Tracker";

export const Layout = ({title, description = defaultDescription }) => 
(        
    <Head>
        <title>Portfolio | {title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content="Portfolio - crypto currencies tracker" key="og:title" />
        <meta property="og:url" content="https://www.portfolioscrapper.com" key="og:url"/>
        <meta property="og:type" content="website" key="og:type"/>
    </Head>
)

export default Layout;