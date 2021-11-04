import React from 'react';
import Header from 'components/header';
import Home from 'routes/home';

import { getErgoNews, getCardanoNews } from 'api/data';

export const Index = (props) => 
(
  <>
    <Header title="Home" description="Portfolio - to keep up to date with crypto currencies" />
    <Home {...props}/>
  </>
)

export const getStaticProps = async () => {

  const ergo_news = await getErgoNews();

  const cardano_news = await getCardanoNews();

  return{
      props:{
        ergo_news: ergo_news || "",
        cardano_news: cardano_news || "",
      },
      revalidate: 60 * 60 * 24 * 1  // in days
  }
}

export default Index