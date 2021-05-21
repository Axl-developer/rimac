import { types } from "../types/types"


export const setDataAuto = (date,brand,amount,gas) => {
    return {
        type: types.setAuto,
        payload:{
            date,
            brand,
            amount,
            gas
        }
    }
}