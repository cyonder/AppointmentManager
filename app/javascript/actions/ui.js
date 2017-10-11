import { TOGGLE_NAV, TOGGLE_MODAL } from '../config/action-types';

export function toggleNav(){
    return{
        type: TOGGLE_NAV,
    };
}

export function toggleModal(){
    return{
        type: TOGGLE_MODAL
    }
}