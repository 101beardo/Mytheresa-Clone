import { GET_DATA, LOGOUT, USER_EMAIL, ADMIN} from '../AuthReducer/actionTypes';
import { FILTER_DATA } from '../AuthReducer/actionTypes'


export const getData = (payload) =>{
    return {
        type : GET_DATA,
        payload : payload
    }
}

export const filterData = (payload) =>{
    return {
        type : FILTER_DATA,
        payload : payload
    }
}

export const userEmail = (payload) =>{
    return {
        type : USER_EMAIL,
        payload : payload
    }
}

export const admin = (payload) =>{
    return {
        type : ADMIN,
        payload : payload
    }
}

export const logout = () => ({ type: LOGOUT });