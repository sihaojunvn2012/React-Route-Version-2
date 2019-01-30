import {GET_DETAIL_NEW} from '../Contants/Action_Types';



const nameInitialState = {

    Detail_New: {}

}

const rootReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        default:
            return state
        case GET_DETAIL_NEW:
            return {...state,Detail_New : action.Data_New}
    }

}
export default rootReducer