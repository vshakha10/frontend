const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const ReduxLogger = require('redux-logger')
const logger = ReduxLogger.createLogger()
const applyMiddleware  = redux.applyMiddleware

let initialValueArray = [{ cake: 10, choco: 20, data: 50 }];

const initialCakeState = { cake: initialValueArray[0].cake };
const initialChocoState = { choco: initialValueArray[0].choco };
const initialDataState = { data: initialValueArray[0].data };

function buy_cake() {
    return { 
    type: 'BUY_CAKE' 
  }
}

function buy_choco() {
    return { 
    type: 'BUY_CHOCO' 
  }
}

function buy_data() {
    return { 
    type: 'BUY_DATA' 
  }
}

//cake
const Cakereducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return { ...state, cake: state.cake - 1 }
        default:
            return state
    }
};

//choco
const Chocoreducer = (state = initialChocoState, action) => {
    switch (action.type) {
        case 'BUY_CHOCO':
            return { ...state, choco: state.choco - 1 }
        default:
            return state
    }
};

//data
const Datareducer = (state = initialDataState, action) => {
    switch (action.type) {
        case 'BUY_DATA':
            return { ...state, data: state.data - 1 }
        default:
            return state
    }
};

const rootReducer = redux.combineReducers({cake: Cakereducer,choco: Chocoreducer,data: Datareducer})

const store = createStore(rootReducer, applyMiddleware(logger))

store.subscribe(() => console.log('Updated State:', store.getState()))

store.dispatch(buy_cake());
store.dispatch(buy_choco());
store.dispatch(buy_data());