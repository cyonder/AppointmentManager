import { combineReducers } from 'redux';
import AppointmentReducer from './appointments';
import BarberReducer from './barbers';
import UIReducer from './ui';
import { reducer as formReducer } from 'redux-form';

const applicationReducer = combineReducers({
    form: formReducer,
    appointments: AppointmentReducer,
    barbers: BarberReducer,
    ui: UIReducer
});

export default applicationReducer;