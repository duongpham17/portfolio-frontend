import styles from './Header.module.scss';
import React from 'react';

export const Header = ({data, context}) => {

    const {price} = context;

    const total = data.coins.length && data.coins.map(el => el.quantity * price[el.acronym]).reduce((prev, curr) =>  prev + curr);

    return (
        <div className={styles.container}>
            <b>{data.label}</b> 
            { !price ? <div className="loading-10" /> : <b>£{total.toLocaleString()}</b>}
        </div>
    )
}

export default Header
