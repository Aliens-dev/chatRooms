import {GET_ROOMS} from "../actions";

const initState = {
    rooms: [],
}

export const RoomsReducer = (state = initState, action) => {

    switch (action.type) {
        case GET_ROOMS: return {...state, rooms: action.payload};
        default :return state;
    }
}
