import React, { useRef, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { Buttons } from './Buttons'

export const Form = () => {

    const {formValues, handleInputChange, Checkout, NoVoid} = useForm({
        
        n_doc:'',
        phone:'',
        n_plate:''
    })

    const {n_doc,phone,n_plate} = formValues

    const doc_num = useRef()

    const num_phone = useRef()

    const num_plate = useRef()

    const refs = [,doc_num,num_phone,num_plate]

    const [accept, setAccept] = useState(false)

    const Check = (e) => {
        e.preventDefault()
       // es necesario Checkout
        if(n_doc.length < 8 || phone.length < 8 || n_plate.length < 8){
            
            refs.map( r => (r.current.value.length < 8) ? r.current.className = "Form__input Red" :r.current.className = "Form__input")
        }
        else{
            refs.map( r => (r.current.className = "Form__input") )
            
        }
    }
    return (
        <div>
            <form onSubmit={Check} className="Form">
                <div className="Form__body">
                    <h1 className="text_primary">Déjanos tus datos</h1>
                    <div className="Form__Select_content">
                        <select className="Form__input">
                            <option>DNI</option>
                            <option>CE</option>
                        </select>
                        
                        <input ref={doc_num} value={n_doc} name="n_doc" className="Form__input" type="text" placeholder="Nro. de documento" onChange={handleInputChange}/>
                    </div>
                    <input
                        ref={num_phone}
                        value={phone} 
                        name="phone" 
                        type="number" 
                        placeholder="Celular" 
                        className="Form__input" 
                        onChange={handleInputChange}
                    />

                    <input
                        ref={num_plate}
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
