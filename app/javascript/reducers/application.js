import { combineReducers } from 'redux';
import AppointmentReducer from './appointments';
import BarberReducer from './barbers';
import UIReducer from './ui';

const applicationReducer = combineReducers({
    appointments: AppointmentReducer,
    barbers: BarberReducer,
    ui: UIReducer
});

export default applicationReducer;