import {combineReducers} from "redux";
import {AuthReducer} from "./AuthReducer";
import {RoomsReducer} from "./RoomsReducer";
import {PopupsReducer} from "./PopupsReducer";

export default combineReducers({
    auth: AuthReducer,
    rooms: RoomsReducer,
    popup: PopupsReducer,
});
