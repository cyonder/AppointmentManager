import { CREATE_BARBER, FETCH_BARBERS } from '../config/action-types';

export default function barberReducer(state = {}, action){
    switch(action.type){
        case FETCH_BARBERS:
            // return { ...state, ...action.payload.data };
            return { ...state, ...action.barbers };

        case CREATE_BARBER:
            console.log("action.payload", action.barber);
            console.log("action.payload.data", action.barber.data);
            // return { ...state, all: action.payload.data };
            return { ...state, ...action.payload.data };
            // return action.payload.data;

        default:
            return state;
    }
}