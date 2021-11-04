import styles from './Coins.module.scss';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {MdRemoveCircle} from 'react-icons/md';
import generateID from 'utils/generateID';

export const Coins = ({data, context, index}) => {

    const {portfolio_reorder_coin} = context;

    const [reorder, setReorder] = useState("");

    const onReorder = (coinIndex) => {
        if(reorder === coinIndex) return setReorder("");
        if(reorder === "") return setReorder(coinIndex);
        portfolio_reorder_coin(index, coinIndex, reorder);
        setReorder("");
    }

    return (
        <div className={styles.container}>
            {data.coins.map((el, i) => (
                <Card key={generateID()} 
                    data={el} 
                    coinIndex={i} 
                    parentIndex={index}
                    onReorder={onReorder} 
                    reorder={reorder} 
                    context={context}
                />
            ))}
        </div>
    )
}

const Card = ({data, context, onReorder, reorder, coinIndex, parentIndex}) => {

    const {price, portfolio_update_coin, portfolio_remove_coin} = context;

    const stopTimer = 3;

    const [counter, setCounter] = useState(0);

    const [undo, setUndo] = useState("");

    const [edit, setEdit] = useState(false);

    const [changeQty, setChangeQty] = useState(data);

    useEffect(() => {

        let timer;

        if(undo === "deleting"){
            timer = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 1000)
        } 
        if(!undo){
            clearInterval(timer);
            setCounter(0);
        }

        if(counter === stopTimer) {
            portfolio_remove_coin(parentIndex, coinIndex);
        }

        return () => clearInterval(timer);
    }, [counter, undo])

    const total = (acronym) => (changeQty.quantity * price[acronym]).toLocaleString();

    const onChange = (e) => {
        if(e.target.value >= 99999999) return;
        setChangeQty({...changeQty, "quantity": Math.abs(Math.round(e.target.value * 100) / 100) });
        if(!edit) setEdit(true);
    }

    const onSubmit = () => portfolio_update_coin(parentIndex, coinIndex, changeQty);

    const stopPropagation = (e) => e.stopPropagation();

    return (
        <form className={`${styles.coins} ${reorder === coinIndex && styles.selected}`} onSubmit={onSubmit} onClick={() => onReorder(coinIndex)}>

            <div className={styles.price}>
                <span>£{Number(price[data.acronym]).toFixed(2).toLocaleString()}</span>
                <Image src={changeQty.image} alt="coin" width={30} height={30} layout='fixed'/>
            </div>

            <div className={styles.amount} onClick={stopPropagation}>
                <input type="number" step="0.01" placeholder="Amount" value={changeQty.quantity || ""} onChange={onChange} />
                {edit && <button>SAVE</button> }
            </div>

            <div className={styles.total} onClick={stopPropagation}>
                <p>£{total(changeQty.acronym)}</p>
                { !undo 
                    ? <button type="button" onClick={() => setUndo("deleting")}><MdRemoveCircle/></button> 
                    : <button type="button" onClick={() => setUndo("")}>{counter}/{stopTimer}</button>
                }
            </div>

        </form>
    )
}


export default Coins
