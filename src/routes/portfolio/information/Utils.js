import styles from './Utils.module.scss';
import React from 'react';

import {MdDragHandle} from 'react-icons/md';
import {RiDeleteBin4Line} from 'react-icons/ri';

const Utils = ({provided, setDeleteWarning}) => {
    return (
        <div className={styles.container}>
            <p {...provided.dragHandleProps}><MdDragHandle className={styles.dragarea}/></p>
            <button onClick={() => setDeleteWarning()}><RiDeleteBin4Line className="icon-1"/></button>
        </div>
    )
}

export default Utils
