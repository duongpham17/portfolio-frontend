import styles from './Portfolio.module.scss';
import React, {useState} from 'react';
import {useContextData} from 'hooks/useContextData';

import Create from './create';
import Information from './information';

export const Portfolio = () => {

    const {price} = useContextData();

    const localStoragePortfolio = typeof window !== "undefined" && JSON.parse(localStorage.getItem("portfolio")) || [];

    const [portfolioData, setPortfolioData] = useState(localStoragePortfolio);

    const constant = (newData) => {
        setPortfolioData(newData);
        localStorage.setItem("portfolio", JSON.stringify(newData));
    }

    const portfolio_create = async (values) => {
        const randomNames = (await import('utils/randomNames')).default

        const newData = [...portfolioData];
        let checkData = values;
        if(!values.label) {
            const random = (length) => Math.floor(Math.random() * length );
            const label = randomNames[random(Number(randomNames.length + 1))];
            checkData.label = label;
        }
        newData.push(checkData)
        constant(newData)
    }

    const portfolio_remove = (index) => {
        const newData = [...portfolioData];
        newData.splice(index, 1);
        constant(newData)
    }

    const portfolio_reorder = (index_one, index_two) => {
        const newData = [...portfolioData];

        const selected = newData[index_one];
        const switching = newData[index_two];

        newData[index_one] = switching;
        newData[index_two] = selected;

        constant(newData);
    }

    const portfolio_add_coin = (index, data) => {
        const newData = [...portfolioData];
        newData[index].coins.push(data);
        constant(newData)
    }

    const portfolio_remove_coin = (index, coinIndex) => {
        const newData = [...portfolioData];
        newData[index].coins.splice(coinIndex, 1);
        constant(newData)
    }

    const portfolio_update_coin = (index, coinIndex, data) => {
        const newData = [...portfolioData];
        newData[index].coins[coinIndex] = data;
        constant(newData)
    }

    const portfolio_reorder_coin = (parentIndex, index_one, index_two) => {
        const newData = [...portfolioData];

        const parent = newData[parentIndex].coins;

        const selected = parent[index_one];
        const switching = parent[index_two];

        newData[parentIndex].coins[index_one] = switching;
        newData[parentIndex].coins[index_two] = selected;

        constant(newData);
    }

    const context = {
        price,
        portfolioData,
        setPortfolioData,
        portfolio_create,
        portfolio_remove,
        portfolio_add_coin,
        portfolio_update_coin,
        portfolio_remove_coin,
        portfolio_reorder,
        portfolio_reorder_coin
    }

    return (
        <div className={styles.container}>
            <Create context={context}/>
            <Information context={context} />
        </div>
    )
}

export default Portfolio
