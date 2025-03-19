import { BUY_CAKE, BUY_CHOCO, BUY_DATA } from "./Constant";

const initialStateCake = { cake: 10 }
const initialStateChoco = { choco: 20 }
const initialStateData = { data: 50 }

export const Cakereducer = (state = initialStateCake.cake , action) => {
    switch(action.type){
        case 'BUY_CAKE': return state - 1 
        default: return state
    }
}

export const Chocoreducer = (state = initialStateChoco.choco , action) => {
    switch(action.type){
        case 'BUY_CHOCO': return state - 1 
        default: return state
    }
}

export const Datareducer = (state = initialStateData.data , action) => {
    switch(action.type){
        case 'BUY_DATA': return state - 1 
        default: return state
    }
}