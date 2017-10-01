// import constants from "../config/constants";

const initialState = {
    navToggle: false
};

export default function uiReducer(state = initialState, action){
    switch(action.type){
        case "TOGGLE_NAV":
            return Object.assign({}, state, {
                navToggle: !state.navToggle
            });
        default:
            return state;
    }
}