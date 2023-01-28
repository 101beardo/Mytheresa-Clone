import axios from "axios"
import * as types from "./actionTypes"


const login=(payload)=>dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUEST})
    // return here is used because of thunk usage we need return to get back to same line of code execution and continue .then otherwise it won't return back to line of code execution and .then will be reading undefined value
    return axios.post("https://reqres.in/api/login",payload)
    .then(r=>{
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data.token})
        }
        )
    .catch(e=>{
        // alert("Wrong Credentials")
        dispatch({type:types.USER_LOGIN_ERROR})}
        )
}

export {login};