import React from 'react'
import { Buttons } from './Buttons'

export const Form = () => {
    return (
        <div>
            <form className="Form">
                <div className="Form__body">
                    <h1 className="text_primary">Déjanos tus datos</h1>
                    <div className="Form__Select_content">
                        <select className="Form__input">
                            <option>DNI</option>
                            <option>CE</option>
                        </select>
                        
                        <input className="Form__input" type="text" placeholder="Nro. de documento"/>
                    </div>
                    <input type="number" placeholder="Celular" className="Form__input"/>
                    <input type="text" placeholder="Placa" className="Form__input"/>
                </div>

                <div className="Form__Foot">
                    <div className="Form__Foot__check">
                        <input type="checkbox"/> 
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
