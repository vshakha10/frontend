const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const ReduxLogger = require("redux-logger");
const logger = ReduxLogger.createLogger();

let initialValueCake = { cake: 10 };
let initialValueChoco = { choco: 20 };
let initialValueData = { data: 50 };

const BUY_CAKE = "BUY_CAKE";
const BUY_CHOCO = "BUY_CHOCO";
const DECREASE_DATA = "DECREASE_DATA";

function buy_cake() {
  return {
    type: BUY_CAKE,
  }
}

function buy_choco() {
  return {
    type: BUY_CHOCO,
  }
}

function decrease_data() {
  return {
    type: DECREASE_DATA,
  }
}

// Cake
const Cakereducer = (state = initialValueCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, cake: state.cake - 1 };
    default:
      return state;
  }
};

// Choco
const ChocoReducer = (state = initialValueChoco, action) => {
  switch (action.type) {
    case BUY_CHOCO:
      return { ...state, choco: state.choco - 1 };
    default:
      return state;
  }
};

// Data
const DataReducer = (state = initialValueData, action) => {
  switch (action.type) {
    case DECREASE_DATA:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({cake: Cakereducer,choco: ChocoReducer,data: DataReducer});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State:", store.getState());

store.dispatch(buy_cake());
store.dispatch(buy_cake());

store.dispatch(buy_choco());
store.dispatch(buy_choco());

store.dispatch(decrease_data());
store.dispatch(decrease_data());

console.log("Final State:", store.getState());
