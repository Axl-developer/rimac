import React, { useState } from 'react'
import { isBrowser } from 'react-device-detect'
import { Link } from 'react-router-dom'
import { Buttons } from '../../../ui/exports/Buttons'
import { Card } from '../../../ui/exports/Card'
import { Counter } from '../../../ui/exports/Counter'
import { Progress } from '../../../ui/exports/Progress'
import { Select } from '../../../ui/exports/Select'
import { Header } from '../../../ui/layout/Header'
import { Sidebar } from '../../../ui/layout/Sidebar'
import { Tabs } from '../../../ui/layout/Tabs'

export const PlanScreen = () => {

    return (
        <div>
            <Header question={true} white={true} />

                {
                    (!isBrowser) && <Progress  step={2}/>
                }

            <div className="AutoScreen_Content_plan">
                {
                    (isBrowser) && <Sidebar Step={2}/>
                }

                <div className="Autoscreen__Head_content">

                    {
                        (isBrowser) && 
                                    <Link to="/">
                                        <div className="AutoSceeen_Back">
                                            <img src="/assets/svgs/back_arrow_2.svg" alt="arrow"/>
                                            <span>VOLVER</span>
                                        </div>
                                    </Link>
                    }

                    
                    <div className="Autoscreen__Head">
                        <h1 className="AutoScreen_stepOne_title">Mira las coberturas</h1>
                        <p className="AutoScreen_stepOne_p">Conoce las coberturas para tu plan</p>
                    
                        <Card />
                    </div>
                </div>

                <div className="AutoScreen_body">
                    <div className="AutoScreen_coberturas">
                        <h2>Agrega o quita coberturas</h2>
                    </div>
                    <Tabs />
                </div>

            </div>
            

            <div className="AutoScreen_Footer">
                <span>© 2020 RIMAC Seguros y Reaseguros.</span>
            </div>
        </div>
    )
}
