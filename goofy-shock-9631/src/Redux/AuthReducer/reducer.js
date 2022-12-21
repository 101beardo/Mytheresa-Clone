
import * as types from "./actionTypes"

const initialState={
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return{...oldState,isAuthLoading:true}
        case types.USER_LOGIN_SUCCESS:
            return{...oldState,isAuthLoading:false,token:payload,isAuth:true}
        case types.USER_LOGIN_ERROR:
            return {...oldState,isAuthLoading:false,isAuthError:true}
        default:
            return oldState
    }
}
export {reducer}