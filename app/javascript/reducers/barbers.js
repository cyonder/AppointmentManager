import {
    FETCH_BARBERS,
    CREATE_BARBER,
    DELETE_BARBER,
    UPDATE_BARBER
} from '../config/action-types';

const initialState = {};

export default function barberReducer(state = initialState, action){
    switch(action.type){
        case FETCH_BARBERS:
            return { ...state, ...action.barbers };

        case CREATE_BARBER:
            return [ ...state, ...action.barber ];

        case DELETE_BARBER:
            return [ ...state, ...action.id ];

        case UPDATE_BARBER:
            return [ ...state, ...action.barber ];

        default:
            return state;
    }
}
