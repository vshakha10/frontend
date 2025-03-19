import { BUY_CAKE, BUY_CHOCO, BUY_DATA } from "./Constant";

const initialState = {cake:10 , choco:20 , data:50}

export const Cakereducer = (state = initialState.cake , action) => {
    switch(action.type){
        case 'BUY_CAKE': return state + 1
        default: return state
    }
}

export const Chocoreducer = (state = initialState.choco , action) => {
    switch(action.type){
        case 'BUY_CHOCO': return state + 1
        default: return state
    }
}

export const Datareducer = (state = initialState.data , action) => {
    switch(action.type){
        case 'BUY_DATA': return state + 1
        default: return state
    }
}