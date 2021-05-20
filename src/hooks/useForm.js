import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [formValues, setValues] = useState(initialState);
    const [NoVoid, setNoVoid] = useState(true)

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...formValues,
            [ target.name ]: target.value
        });

    }

    const Checkout = () => {
        
        setNoVoid(false)
        Object.entries(formValues).map( i => {
            (i[1].length > 0) ? console.log('ok'):setNoVoid(true) 
        })
    }

    return { formValues, handleInputChange, Checkout, NoVoid ,reset };

}
