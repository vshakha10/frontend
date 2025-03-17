const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const ReduxLogger = require('redux-logger')
const logger = ReduxLogger.createLogger()
const applyMiddleware  = redux.applyMiddleware

// value
let initialValue = {cake:10 , choco:20 , data:50}

// let initialValueCake  = {cake:10}
// let initialValueChoco  = {choco:20}
// let initialValueData  = {data:50}

// let initialValueArray = [{cake:10 , choco:20 , data:50}]


// action 

function buy_cake(){
    return {
        type:'BUY_CAKE'
    }
}

function buy_choco(){
    return {
        type:'BUY_CHOCO'
    }
}

function buy_data(){
    return {
        type:'BUY_DATA'
    }
}


// reducer

const Cakereducer = (state = initialValue.cake , action) => {
    switch(action.type){
        case 'BUY_CAKE': return state - 1
        default: return state
    }
}

const Chocoreducer = (state = initialValue.choco , action) => {
    switch(action.type){
        case 'BUY_CHOCO': return state - 1
        default: return state
    }
}

const Datareducer = (state = initialValue.data , action) => {
    switch(action.type){
        case 'BUY_DATA': return state - 1
        default: return state
    }
}

//store
// pridictable container / maintainable
const rootReducer = combineReducer({cake:Cakereducer , choco:Chocoreducer , data:Datareducer})

const store = createStore(rootReducer , applyMiddleware(logger))

console.log('initial State' , store.getState());

store.subscribe(() => console.log('New State' , store.getState()))

store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_choco())
store.dispatch(buy_choco())
store.dispatch(buy_data())
store.dispatch(buy_data())