import React, { useState } from 'react'
import { isBrowser } from 'react-device-detect'
import { Link } from 'react-router-dom'
import { Buttons } from '../../../ui/exports/Buttons'
import { Counter } from '../../../ui/exports/Counter'
import { Progress } from '../../../ui/exports/Progress'
import { Select } from '../../../ui/exports/Select'
import { Header } from '../../../ui/layout/Header'
import { Sidebar } from '../../../ui/layout/Sidebar'

export const AutoSceen = () => {

    const date = [2014,2015,2016,2017,2018,2019,2020,2021]

    const [ValueDate, setValueDate] = useState(2020)

    const Brand = ["BMW","Mercedes-Benz","Audi","Lexus","Renault","Ford","Opel","Seat"]

    const [ValueBrand, setValueBrand] = useState("Audi")
    return (
        <div>
            <Header question={true} white={true} />

                {
                    (!isBrowser) && <Progress  step={1}/>
                }

            <div className="AutoScreen_Content">
                {
                    (isBrowser) && <Sidebar Step={1}/>
                }

                    <div className="AutoScreen_stepOne">

                        {
                            (isBrowser) && 
                                        <Link to="/">
                                            <div className="AutoSceeen_Back">
                                                <img src="/assets/svgs/back_arrow_2.svg" alt="arrow"/>
                                                <span>VOLVER</span>
                                            </div>
                                        </Link>
                        }

                        <h1 className="AutoScreen_stepOne_title">¡Hola, {" "}<span>Juan!</span></h1>
                        <p className="AutoScreen_stepOne_p">Completa los datos de tu auto</p>

                        <div className="AutoScreen_Options">
                            <div className="AutoScreen_SelectsContent">
                                <Select options={date} Selection={ValueDate} setSelection={setValueDate}/>
                                <Select options={Brand} Selection={ValueBrand} setSelection={setValueBrand}/>
                            </div>

                            <div className="AutoScreen_modelo">
                                
                                <div className="AutoScreen_modelo_help">
                                    Ayuda
                                </div>

                                <div className="AutoScreen_modelo_Mobile">
                                    <div>
                                        <img src="/assets/svgs/card.svg" alt="auto"/>
                                    </div>

                                    <div className="AutoScreen_left">
                                        <span>¿No encuentrasel modelo?</span>
                                        <a href="#">clic aquí</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="AutoScreen_Question">
                            <span>¿Tu auto es a gas?</span>
                            <div className="AutoScreen_Question_answers">
                                <input type="radio"/> <span>Sí</span>
                                <input type="radio"/> <span>No</span>
                            </div>
                        </div>

                        <div className="AutoScreen_Price">
                            <div>
                                <h3>Indica la suma asegurada</h3>
                                <div className="AutoScreen_Limits">
                                    <span>MIN $12.500</span>
                                    <div className="Vertical_separator"></div>
                                    <span>MAX $16,500</span>
                                </div>
                            </div>

                            <div>
                                <Counter />
                            </div>

                        </div>

                        <Buttons text="Continuar" arrow={true}/>

                    </div>

            </div>
            

                <div className="AutoScreen_Footer">
                    <span>© 2020 RIMAC Seguros y Reaseguros.</span>
                </div>
        </div>
    )
}
