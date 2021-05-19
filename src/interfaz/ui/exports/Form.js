import React, { useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { Buttons } from './Buttons'

export const Form = () => {

    const [formValues, handleInputChange] = useForm({
        doc:'',
        n_doc:'',
        phone:'',
        n_plate:''
    })

    const {n_doc,phone,n_plate} = formValues

    const [accept, setAccept] = useState(false)

    const Checkout = (e) => {
            e.preventDefault()
            console.log(formValues)
    }
    return (
        <div>
            <form onSubmit={Checkout} className="Form">
                <div className="Form__body">
                    <h1 className="text_primary">Déjanos tus datos</h1>
                    <div className="Form__Select_content">
                        <select className="Form__input">
                            <option>DNI</option>
                            <option>CE</option>
                        </select>
                        
                        <input value={n_doc} name="n_doc" className="Form__input" type="text" placeholder="Nro. de documento" onChange={handleInputChange}/>
                    </div>
                    <input
                        id={(false)?'Red':''}
                        value={phone} 
                        name="phone" 
                        type="number" 
                        placeholder="Celular" 
                        className="Form__input" 
                        onChange={handleInputChange}
                    />
                    <input
                        id={(false)?'Red':''}
                        value={n_plate} 
                        name="n_plate" 
                        type="text" 
                        placeholder="Placa" 
                        className="Form__input" 
                        onChange={handleInputChange}
                    />
                </div>

                <div className="Form__Foot">
                    <div className="Form__Foot__check">
                        <input value={accept} onClick={() => setAccept(!accept)}  type="checkbox"/> 
                        <span>Acepto la <a className="External_link" href="#">Política de Protecciòn de Datos Personales</a> y los <a className="External_link" href="#">Términos y Condiciones.</a></span>
                    </div>
                    <div className="Form__Foot__Button">
                        <Buttons text="Cotízalo"/>
                    </div>
                </div>

            </form>
        </div>
    )
}
