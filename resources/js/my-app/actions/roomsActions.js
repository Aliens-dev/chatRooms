import axios from "axios";
import {ROOMS_PAGE_API} from "../urls/AppBaseUrl";
import {GET_ROOMS} from "./index";
import {SHOW_TOAST_ACTION} from "./popupsActions";
import {START_LOADING_ACTION, STOP_LOADING_ACTION} from "./authActions";


export const GET_ROOMS_ACTION = () => async (dispatch,getState) => {
    try {
        let response = await axios({
            method : 'GET',
            url : ROOMS_PAGE_API,
            headers : {
                Authorization : 'bearer ' + getState().auth.user.token,
            }
        })
        dispatch({
            type: GET_ROOMS,
            payload: response.data.data
        })
        dispatch(STOP_LOADING_ACTION())
    }catch(e) {
        dispatch(SHOW_TOAST_ACTION('Failed', 'Failed to fetch Rooms, refresh page'))
        dispatch(STOP_LOADING_ACTION())
    }

}
