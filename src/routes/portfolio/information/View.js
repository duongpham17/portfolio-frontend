import styles from './View.module.scss';
import React, {useState} from 'react';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

export const View = ({children, data}) => {

    const [open, setOpen] = useState(data.coins.length ? true : false);

    return (
        <div className={styles.container}>
            {open && children}
    
             <button className={styles.openBtn} onClick={() => setOpen(!open)}>{!open ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}</button>
            
        </div>
    )
}

export default View
