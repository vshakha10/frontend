import { createStore, combineReducers } from "redux";
import { Cakereducer, Chocoreducer, Datareducer } from './Reducer';

// Combine reducers
const rootReducer = combineReducers({
    cake: Cakereducer,
    choco: Chocoreducer,
    data: Datareducer
});


const store = createStore(rootReducer);

export default store;