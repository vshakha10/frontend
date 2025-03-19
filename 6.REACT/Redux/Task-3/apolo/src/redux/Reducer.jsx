import { BUY_CAKE, BUY_CHOCO, BUY_DATA } from "./Constant";

const initialStateArray = [{ cake: 10, choco: 20, data: 50 }];

const initialStateCake = { cake: initialStateArray[0].cake };
const initialStateChoco = { choco: initialStateArray[0].choco };
const initialStateData = { data: initialStateArray[0].data };


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