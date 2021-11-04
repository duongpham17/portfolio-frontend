import styles from './DeleteWarning.module.scss';

const Delete = ({deleteWarning, setDeleteWarning, context}) => {

    const {portfolio_remove} = context;

    const deleteConfirmBtn = (e, confirm = false) => {
        e.stopPropagation();
        if(confirm) portfolio_remove(deleteWarning.index);
        setDeleteWarning({warning: false, index: ""});
    }

    return ( deleteWarning.warning && 
        <div className={`${styles.container} cover`} onClick={(e) => deleteConfirmBtn(e)}>
            <button onClick={(e) => deleteConfirmBtn(e)}>Cancel</button>
            <button onClick={(e) => deleteConfirmBtn(e, true)}>Delete</button>
        </div>
    )
}

export default Delete
