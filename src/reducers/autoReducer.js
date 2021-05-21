import { types } from "../types/types";


export const autoReducer = (state = {}, action) => {
    switch (action.type) {
        case types.setAuto:
            return {
                date: action.payload.date,
                brand: action.payload.brand,
                amount: action.payload.amount,
                gas: action.payload.gas
            }

        default:
            return state;
    }
}
