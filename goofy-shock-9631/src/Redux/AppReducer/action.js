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

const getdata=(params)=>(dispatch)=>{
    dispatch(getDataRequest());
    return axios.get('https://json-server-employee-crud-seven.vercel.app/mens',params)
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
    return axios.get('https://json-server-employee-crud-seven.vercel.app/wish')
    .then((res)=>dispatch(getWishDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getWishDataError(error))
    }) 
}

const addWishData=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_WISH_DATA_REQUEST})
    return axios
    .post('https://json-server-employee-crud-seven.vercel.app/wish',payload)
    .then((r)=>{
        dispatch({type:types.ADD_WISH_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        console.log(e.response.data)
        // dispatch({type:types.ADD_WISH_DATA_ERROR})
        dispatch({type:types.ADD_WISH_DATA_SUCCESS,payload})
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
    return axios.get('https://json-server-employee-crud-seven.vercel.app/bag')
    .then((res)=>dispatch(getCartDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getCartDataError(error))
    }) 
}

const addCartData=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_CART_DATA_REQUEST})
    return axios
    .post('https://json-server-employee-crud-seven.vercel.app/bag',payload)
    .then((r)=>{
        dispatch({type:types.ADD_CART_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        // dispatch({type:types.ADD_CART_DATA_ERROR})
        dispatch({type:types.ADD_CART_DATA_SUCCESS,payload})
    })
}


const addData=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_DATA_REQUEST})
    return axios
    .post('https://json-server-employee-crud-seven.vercel.app/mens',payload)
    .then((r)=>{
        dispatch({type:types.ADD_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        // dispatch({type:types.ADD_DATA_ERROR})
        dispatch({type:types.ADD_DATA_SUCCESS,payload})
    })
}


const updateData=(id,payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_DATA_REQUEST})
    return axios
    .patch(`https://json-server-employee-crud-seven.vercel.app/mens/${id}`,payload)
    .then((r)=>{
        dispatch({type:types.UPDATE_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        // dispatch({type:types.UPDATE_DATA_ERROR})
        dispatch({type:types.UPDATE_DATA_SUCCESS,payload})
    })
}

const deleteData=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_DATA_REQUEST})
    return axios
    .delete(`https://json-server-employee-crud-seven.vercel.app/mens/${id}`)
    .then((r)=>{
        dispatch({type:types.DELETE_DATA_SUCCESS,payload:id})
    })
    .catch((e)=>{
        // dispatch({type:types.DELETE_DATA_ERROR})
        dispatch({type:types.DELETE_DATA_SUCCESS,payload:id})
    })
}

const deleteCartData=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_CART_DATA_REQUEST})
    return axios
    .delete(`https://json-server-employee-crud-seven.vercel.app/bag/${id}`)
    .then((r)=>{
        dispatch({type:types.DELETE_CART_DATA_SUCCESS,payload:id})
    })
    .catch((e)=>{
        // dispatch({type:types.DELETE_CART_DATA_ERROR})
        dispatch({type:types.DELETE_CART_DATA_SUCCESS,payload:id})
    })
}

const deleteWishData=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_WISH_DATA_REQUEST})
    return axios
    .delete(`https://json-server-employee-crud-seven.vercel.app/wish/${id}`)
    .then((r)=>{
        
        dispatch({type:types.DELETE_WISH_DATA_SUCCESS,payload:id})
    })
    .catch((e)=>{
        // dispatch({type:types.DELETE_WISH_DATA_ERROR})
        dispatch({type:types.DELETE_WISH_DATA_SUCCESS,payload:id})
    })
}




export {addData,deleteCartData,deleteWishData,getWishData,addWishData,getdata,getCartData,addCartData,updateData,deleteData}