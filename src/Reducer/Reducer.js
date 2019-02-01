import {GET_DETAIL_NEW,GET_DATA,LOGIN_LOGOUT} from '../Contants/Action_Types';


const nameInitialState = {

    Detail_New: {},
    Data:[],
    isCheckLogin: false
}

const rootReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        default:
            return state
        case GET_DETAIL_NEW:
           return {...state,Detail_New : action.Data_New}

        case GET_DATA:
        return {...state,Data: action.Data}
        case   LOGIN_LOGOUT:
        return {...state, isCheckLogin: !action.CheckLogin}  
    }

}
export default rootReducer