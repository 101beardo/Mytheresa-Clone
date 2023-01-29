import * as types from './actionTypes';

const initialState={
    data:[],
    bag:[],
    wish:[],
    isLoading:false,
    isError:false,
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action;

    switch(type){
        // data
        case types.GET_DATA_REQUEST:
            return {...oldState,isLoading:true};
        case types.GET_DATA_SUCCESS:
            return {...oldState,isLoading:false,data:payload}
        case types.GET_DATA_ERROR:
            return {...oldState,isLoading:false,isError:true}


        case types.UPDATE_DATA_REQUEST:
            return {...oldState,isLoading:true}
        case types.UPDATE_DATA_SUCCESS:
            let newData=oldState.data.map((item)=>item.id===payload.id?payload:item)
            return {...oldState,isLoading:false,data:newData}
        case types.UPDATE_DATA_ERROR:
            return {...oldState,isLoading:false,isError:true}



        case types.ADD_DATA_REQUEST:
                return {...oldState,isLoading:true}
        case types.ADD_DATA_SUCCESS:
                return {...oldState,isLoading:false,data:[...oldState.data,payload]}
        case types.ADD_DATA_ERROR:
                return {...oldState,isLoading:false,isError:true}


        case types.DELETE_DATA_REQUEST:
                return {...oldState,isLoading:true}
        case types.DELETE_DATA_SUCCESS:
                let filteredData=oldState.data.filter((item)=>item.id!==payload)
                return {...oldState,isLoading:false,data:filteredData}
        case types.DELETE_DATA_ERROR:
                return {...oldState,isLoading:false,isError:true}

        // bag

        case types.ADD_CART_DATA_REQUEST:
                    return {...oldState,isLoading:true}
        case types.ADD_CART_DATA_SUCCESS:
                    return {...oldState,isLoading:false,bag:[...oldState.bag,payload]}
        case types.ADD_CART_DATA_ERROR:
                    return {...oldState,isLoading:false,isError:true}


        case types.GET_CART_DATA_REQUEST:
                        return {...oldState,isLoading:true}
        case types.GET_CART_DATA_SUCCESS:
                        return {...oldState,isLoading:false,bag:payload}
        case types.GET_CART_DATA_ERROR:
                        return {...oldState,isLoading:false,isError:true}

        
        case types.DELETE_CART_DATA_REQUEST:
                         return {...oldState,isLoading:true}
        case types.DELETE_CART_DATA_SUCCESS:
                        let filteredCartData=oldState.bag.filter((item)=>item.id!==payload)
                        return {...oldState,isLoading:false,bag:filteredCartData}
        case types.DELETE_CART_DATA_ERROR:
                        return {...oldState,isLoading:false,isError:true}

        // wish

        case types.ADD_WISH_DATA_REQUEST:
                    return {...oldState,isLoading:true}
        case types.ADD_WISH_DATA_SUCCESS:
                    return {...oldState,isLoading:false,wish:[...oldState.wish,payload]}
        case types.ADD_WISH_DATA_ERROR:
                    return {...oldState,isLoading:false,isError:true}
        
                            
        case types.GET_WISH_DATA_REQUEST:
                        return {...oldState,isLoading:true}
        case types.GET_WISH_DATA_SUCCESS:
                        return {...oldState,isLoading:false,wish:payload}
        case types.GET_WISH_DATA_ERROR:
                        return {...oldState,isLoading:false,isError:true}


        case types.DELETE_WISH_DATA_REQUEST:
                        return {...oldState,isLoading:true}
        case types.DELETE_WISH_DATA_SUCCESS:
                        let filteredWishData=oldState.wish.filter((item)=>item.id!==payload)
                        return {...oldState,isLoading:false,wish:filteredWishData}
        case types.DELETE_WISH_DATA_ERROR:
                        return {...oldState,isLoading:false,isError:true}
        

        default :
        return oldState
    }
 
}

export {reducer}