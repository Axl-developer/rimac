import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { isBrowser } from 'react-device-detect';

import { MobileHomeScreen } from '../interfaz/pages/mobile/MobileHomeScreen';
import { HomeScreen } from '../interfaz/pages/desktop/HomeScreen';
import { AutoSceen } from '../interfaz/pages/desktop/auto/AutoSceen';
import { PlanScreen } from '../interfaz/pages/desktop/plan/PlanScreen';
import { FilterRouter } from './FilterRouter';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRout } from './PublicRout';

export const AppRouter = () => {

    const {num_doc} = useSelector(state => state.auth)
    
    const [loged, setLoged] = useState(num_doc)

    const dispatch = useDispatch()

    useEffect(() => {
        setLoged(num_doc)
        console.log('effect')
    }, [num_doc])

    return (
        <Router>
            <Switch>

                <PublicRout exact path="/" pass={loged} component={(isBrowser)? HomeScreen  : MobileHomeScreen } />
                <FilterRouter exact path="/auto" pass={loged} component={AutoSceen}/>

                <Route exact path="/plan">
                    <PlanScreen />
                </Route>

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
