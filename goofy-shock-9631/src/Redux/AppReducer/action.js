import * as types from './actionTypes';
import axios from 'axios';
const getDataRequest=()=>{
    return {
        type:types.GET_DATA_REQUEST
    }
}
const getDataSuccess=(payload)=>{
    return {
        type:types.GET_DATA_SUCCESS,payload

    }
}
const getDataError=()=>{
    return {
        type:types.GET_DATA_ERROR
    }
}

export const getdata=(dispatch)=>{
    dispatch(getDataRequest());
    return axios.get('http://localhost:8080/mens')
    .then((res)=>dispatch(getDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getDataError(error))
    })
    
}