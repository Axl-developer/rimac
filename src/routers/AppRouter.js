import React from 'react'
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

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {
                        (isBrowser)?<HomeScreen /> :<MobileHomeScreen />
                    }
                </Route>
                <Route exact path="/users">
                    
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
