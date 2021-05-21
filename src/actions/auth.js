import {types} from '../types/types'

export const login = (name,doc,num_doc,num_phone,num_plate) => {
    return {
        type: types.login,
        payload: {
            name,
            doc,
            num_doc,
            num_phone,
            num_plate
        }
    }
}

const url = "https://randomuser.me/api/?inc=name"

export const getUser = (doc,num_doc,num_phone,num_plate) => {
    
    return async(dispatch) => {
        const resp = await fetch(url);
        const result = await resp.json()
        const name = result.results[0].name.first
        dispatch(login(
            name,
            doc,
            num_doc,
            num_phone,
            num_plate,
        ))
        console.log(name,doc,num_doc,num_phone,num_plate)
    }
    
}

