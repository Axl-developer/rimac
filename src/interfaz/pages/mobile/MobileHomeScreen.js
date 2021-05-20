import React from 'react'
import { Form } from '../../ui/exports/Form'
import { Header } from '../../ui/layout/Header'

export const MobileHomeScreen = () => {
    return (
        <div>
            <div className="Mobile__Content">
                <Header header={true} />
                <div className="Mobile__Greeting">

                    <div className="Mobile__Greeting_Greet">
                        <span className="Mobile__Greeting_New">
                            ¡Nuevo!
                        </span>
                        <h1 className="Mobile__Greeting_title">Seguro Vehicular <span>Tracking</span></h1>
                        <p>Cuentanos donde le haras seguimiento a tu seguro</p>
                    </div>
                    
                    <div className="Mobile__Greeting_ContentImg">
                        <img src="/assets/svgs/Ilustracion-mobile.svg" alt="greet"/>

                    </div>

                </div>
            </div>
            <Form />
            
        </div>
    )
}
