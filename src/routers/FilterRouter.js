import React from 'react'
import { Redirect, Route } from 'react-router'


export const FilterRouter = ({
    pass,
    component:Component,
    ...rest
}) => {
    
    return (
        <>
            {(pass) 
            ? <Route {...rest} render={props => (
                    <Component {...props} />  
                )} />
            : <Redirect to='/' />}
        </>
    )
}
