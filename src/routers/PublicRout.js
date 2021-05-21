import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRout = ({
    pass,
    component:Component,
    ...rest
}) => {
    
    return (
        <>
            {(pass.length < 1) 
            ? <Route {...rest} render={props => (
                    <Component {...props} />  
                )} />
            : <Redirect to='/auto' />}
        </>
    )
}