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

const getdata=(dispatch)=>{
    dispatch(getDataRequest());
    return axios.get('http://localhost:8080/mens')
    .then((res)=>dispatch(getDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getDataError(error))
    }) 
}

const getData=()=>(dispatch)=>{
    dispatch(getDataRequest());
    return axios.get('http://localhost:8080/admin')
    .then((res)=>dispatch(getDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getDataError(error))
    }) 
}





const getWishDataRequest=()=>{
    return {
        type:types.GET_WISH_DATA_REQUEST
    }
}
const getWishDataSuccess=(payload)=>{
    return {
        type:types.GET_WISH_DATA_SUCCESS,payload

    }
}
const getWishDataError=()=>{
    return {
        type:types.GET_WISH_DATA_ERROR
    }
}


const getWishData=()=>(dispatch)=>{
    dispatch(getWishDataRequest());
    return axios.get('http://localhost:8080/wish')
    .then((res)=>dispatch(getWishDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getWishDataError(error))
    }) 
}

const addWishData=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_WISH_DATA_REQUEST})
    return axios
    .post('http://localhost:8080/wish',payload)
    .then((r)=>{
        dispatch({type:types.ADD_WISH_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.ADD_WISH_DATA_ERROR})
    })
}




const getCartDataRequest=()=>{
    return {
        type:types.GET_CART_DATA_REQUEST
    }
}
const getCartDataSuccess=(payload)=>{
    return {
        type:types.GET_CART_DATA_SUCCESS,payload

    }
}
const getCartDataError=()=>{
    return {
        type:types.GET_CART_DATA_ERROR
    }
}


const getCartData=()=>(dispatch)=>{
    dispatch(getCartDataRequest());
    return axios.get('http://localhost:8080/wish')
    .then((res)=>dispatch(getCartDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getCartDataError(error))
    }) 
}

const addCartData=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_CART_DATA_REQUEST})
    return axios
    .post('http://localhost:8080/bag',payload)
    .then((r)=>{
        dispatch({type:types.ADD_CART_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.ADD_CART_DATA_ERROR})
    })
}


const addData=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_DATA_REQUEST})
    return axios
    .post('http://localhost:8080/mens',payload)
    .then((r)=>{
        dispatch({type:types.ADD_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.ADD_DATA_ERROR})
    })
}


const updateData=(id,payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_DATA_REQUEST})
    return axios
    .patch(`http://localhost:8080/admin/${id}`,payload)
    .then((r)=>{
        dispatch({type:types.UPDATE_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.UPDATE_DATA_ERROR})
    })
}

const deleteData=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_DATA_REQUEST})
    return axios
    .delete(`http://localhost:8080/admin/${id}`)
    .then((r)=>{
        dispatch({type:types.DELETE_DATA_SUCCESS,payload:id})
    })
    .catch((e)=>{
        dispatch({type:types.DELETE_DATA_ERROR})
    })
}




export {addData,getWishData,addWishData,getData,getdata,getCartData,addCartData,updateData,deleteData}