import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    loading: loadingReducer,

})

const store = createStore(reducers)

export type ReducersType = ReturnType<typeof reducers>

export default store


// // @ts-ignore
// window.store = store // for dev
