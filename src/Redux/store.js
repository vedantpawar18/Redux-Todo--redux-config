import {legacy_createStore, combineReducers, applyMiddleware} from "redux"
import { reducer as AppReducer } from "../Redux/AppReducer/reducer";
import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer";


const rootReducer= combineReducers({AppReducer, AuthReducer})


const store= legacy_createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store};