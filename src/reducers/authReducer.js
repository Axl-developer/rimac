import { types } from "../types/types";

const inital = {
    name:'',
    doc:'',
    num_doc:'',
    num_phone:'',
    num_plate:''
}

export const authReducer = (state = inital, action) => {
    switch (action.type) {
        case types.login:
            return {
                name:action.payload.name,
                doc: action.payload.doc,
                num_doc: action.payload.num_phone,
                num_phone: action.payload.num_phone,
                num_plate: action.payload.num_palte
            }
    
        default:
            return state
    }
}
