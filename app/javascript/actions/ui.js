import { TOGGLE_NAVIGATION, TOGGLE_MODAL } from '../config/action-types';

export function toggleNavigation(){
    return{
        type: TOGGLE_NAVIGATION,
    };
}

export function toggleModal(){
    return{
        type: TOGGLE_MODAL
    }
}
