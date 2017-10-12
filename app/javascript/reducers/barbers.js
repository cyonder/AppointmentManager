import {
    CREATE_BARBER,
    FETCH_BARBERS,
    DELETE_BARBER,
    UPDATE_BARBER
} from '../config/action-types';

export default function barberReducer(state = {}, action){
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
