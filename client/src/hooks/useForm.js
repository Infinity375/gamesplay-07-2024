import { useState } from "react";

function useForm(initioalValues, submitCallback) {
    const [values, setValues] = useState();

    const changeHandler = (e) =>{
        setValues(state =>({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        submitCallback(values);
    }
 
    return{
        values,
        changeHandler,
        submitHandler
    }

}