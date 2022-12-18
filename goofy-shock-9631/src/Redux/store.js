import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer }  from "./AppReducer/reducer";
import { reducer as AuthReducer }  from "./AuthReducer/reducer";



const rootReducer=combineReducers({AuthReducer,AppReducer})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}