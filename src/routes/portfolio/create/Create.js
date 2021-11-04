import styles from './Create.module.scss';
import React, {useState} from 'react';
import {MdClose, MdOutlineArrowRightAlt, MdAdd} from 'react-icons/md';
import {useForm} from 'hooks/useForm';
import generateID from 'utils/generateID';

const Create = ({context}) => {

    const {portfolio_create} = context;

    const [open, setOpen] = useState(false)

    const initialState = {
        id: generateID(4),
        label: "",
        coins: []
    }

    const {values, setValues, onChange, onSubmit} = useForm(initialState, submit);

    function submit(){
        portfolio_create(values)
        setValues(initialState);
    }

    return (
        <form className={styles.container} onSubmit={onSubmit}>
            
            <label onClick={() => setOpen(!open)}>
                <span>Label</span>
                {!open && <MdOutlineArrowRightAlt/>}
                {open && <MdClose/>}
            </label>

            {open &&
                <>
                    <input type="text" name="label" value={values.label} onChange={onChange} />
                    <button className="flex"><MdAdd/></button>
                </>
            }

        </form>
    )
}

export default Create