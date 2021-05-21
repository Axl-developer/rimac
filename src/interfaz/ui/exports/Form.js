import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { getUser, login } from '../../../actions/auth'
import { useForm } from '../../../hooks/useForm'
import { Buttons } from './Buttons'
import { Select } from './Select'

export const Form = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const docs = ["DNI","CE"]
    const [Selects, setSelects] = useState("DNI")

    const {formValues, handleInputChange} = useForm({
        
        n_doc:'',
        phone:'',
        n_plate:''
    })

    const {n_doc,phone,n_plate} = formValues

    const isCheck = useRef()

    const doc_num = useRef()

    const num_phone = useRef()

    const num_plate = useRef()

    const refs = [,doc_num,num_phone,num_plate]

    const [accept, setAccept] = useState(false)

    const Check = async(e) => {
        e.preventDefault()
        if(n_doc.length >= 8 && phone.length > 8 && n_plate.length > 6 && isCheck.current.checked === true){
            refs.map( r => (r.current.className = "Form__input") )
            
            dispatch(getUser(Selects,n_doc,phone,n_plate))
            history.push('/auto')
        }
        else{
            refs.map( r => (r.current.value.length < 8) ? r.current.className = "Form__input Red" :r.current.className = "Form__input")
        }
    }
    return (
        <div>
            <form onSubmit={Check} className="Form">
                <div className="Form__body">
                    <h1 className="text_primary">Déjanos tus datos</h1>
                    <div className="Form__Select_content">

                        <Select options={docs} Selection={Selects} setSelection={setSelects} home={true}/>
                        
                        <input ref={doc_num} value={n_doc} name="n_doc" className="Form__input" type="number" placeholder="Nro. de documento" onChange={handleInputChange}/>
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
                        <input ref={isCheck} value={accept} onClick={() => setAccept(!accept)}  type="checkbox"/> 
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
