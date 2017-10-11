import { CREATE_BARBER, FETCH_BARBERS } from '../config/action-types';

export default function barberReducer(state = {}, action){
    switch(action.type){
        case FETCH_BARBERS:
            return { ...state, ...action.payload.data };

        case CREATE_BARBER:
            // return { ...state, all: action.payload.data };
            return action.payload.data;

        default:
            return state;
    }
}