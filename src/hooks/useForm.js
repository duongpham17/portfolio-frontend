import {useState} from 'react';

export const useForm = (initalState, callback) => {

    const [values, setValues] = useState(initalState);

    const onChange = event => setValues({...values, [event.target.name] : event.target.value});
    
    const onSubmit = async (event) => {
        event.preventDefault();
        callback();
    }

    return {
        values,
        setValues,
        onChange, 
        onSubmit
    }
}

export default useForm;