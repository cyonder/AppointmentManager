import { TOGGLE_NAV, TOGGLE_MODAL } from '../config/action-types';

const initialState = {
    navToggle: false,
    modalToggle: false,
};

export default function uiReducer(state = initialState, action){
    switch(action.type){
        case TOGGLE_NAV:
            return Object.assign({}, state, {
                navToggle: !state.navToggle
            });
        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                modalToggle: !state.modalToggle
            });
        default:
            return state;
    }
}