import {GET_DETAIL_NEW,GET_DATA,LOGIN_LOGOUT} from '../Contants/Action_Types';

export function Get_Data_New_To_Store (Data_New) {
        return {
            type:GET_DETAIL_NEW,
            Data_New
        }
}
export function Get_Data (Data){

    return {
        type: GET_DATA,
        Data
    }

}
export function Check_Login(CheckLogin){

    return {
        type: LOGIN_LOGOUT,
        CheckLogin
    }


}