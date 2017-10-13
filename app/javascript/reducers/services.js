import{
    FETCH_SERVICES,
    CREATE_SERVICE,
    DELETE_SERVICE,
    UPDATE_SERVICE
} from '../config/action-types';

export default function serviceReducer(state = {}, action){
    switch(action.type){
        case FETCH_SERVICES:
            return { ...state, ...action.services };

        case CREATE_SERVICE:
            return [ ...state, ...action.service ];

        case DELETE_SERVICE:
            return [ ...state, ...action.id ];

        case UPDATE_SERVICE:
            return [ ...state, ...action.service ];

        default:
            return state;
    }
}
