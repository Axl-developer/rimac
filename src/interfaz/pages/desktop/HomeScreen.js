import React from 'react'
import { Form } from '../../ui/exports/Form'
import { Header } from '../../ui/layout/Header'

export const HomeScreen = () => {
    return (
        <>
        <Header abosulte={true} question={true}/>
        <div className="HomeScreen">
            
            <div className="HomeScreen__Right">

                <img src="/assets/svgs/Illustracion-desktop.svg" alt="greet"/>

                <div className="HomeScreen__Greeting_Greet">
                    <span className="HomeScreen__Greeting_New">
                        ¡Nuevo!
                    </span>
                    <h1 className="HomeScreen__Greeting_title">Seguro <span>Vehicular Tracking</span></h1>
                    <p>Cuentanos donde le haras seguimiento a tu seguro</p>
                </div>
                
                <span className="HomeScreen__copyright">© 2020 RIMAC Seguros y Reaseguros.</span>
            </div>
            <div className="HomeScreen__Left">
                <Form />
            </div>
        </div>
        </>
    )
}
