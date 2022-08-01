import * as types from "./actionTypes";

const initialState={
    isAuth: false,
    toke: "",
    isAuthLoading:true
}

const reducer =(oldState= initialState, action) =>{
    const {type, payload} = action;

    switch(type) {
        case types.USER_LOGIN_REQUEST:
            return{
                ...oldState,
                isAuthLoadin:true
            }
        case types.USER_LOGIN_SUCCESS:
            return{
                 ...oldState,
                 isAuthLoadin:false,
                 isAuth:true,
                 token:payload
            }
        case types.USER_LOGIN_FAILURE:
            return{
                 ...oldState,
                isAuthLoadin:false,
                isAuth: false,
                token:""
             }
        
        default :
        return oldState
    }

}

export {reducer}