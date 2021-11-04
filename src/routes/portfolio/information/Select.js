import styles from './Select.module.scss';
import React, {useState} from 'react';
import Image from 'next/image';
import cryptocoins from 'utils/cryptocoins';
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md';

export const Select = ({context, data, index}) => {

    const {portfolio_add_coin} = context;

    const [select, setSelect] = useState(false);

    const alreadyAdded = (name) => data.coins.some(el => el.name === name);

    const addCoin = (data) => {
        data.quantity = 0;
        portfolio_add_coin(index, data);
    }

    return (
        <div className={styles.container}>
            <div className={styles.select}>
                <button onClick={() => setSelect(!select)}>
                    <span>Select Crypto</span> 
                    <span>{select ? <MdKeyboardArrowDown/> :<MdKeyboardArrowRight/>}</span>
                </button>
            </div>

            { select &&
                <div className={styles.coins}>
                    {cryptocoins.map(el => 
                        <button key={el.name} className={`${alreadyAdded(el.name) && styles.alreadyAdded}`} onClick={() => addCoin(el)}> 
                            <Image src={el.image} alt="coin" width={20} height={20}/> 
                            <span>{el.name}</span>
                        </button>
                    )}
                </div>
            }
        </div>
    )
}

export default Select