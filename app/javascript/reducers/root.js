import { combineReducers } from 'redux';
import AppointmentReducer from './appointments';
import BarberReducer from './barbers';
import ServicesReducer from './services';
import UIReducer from './ui';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    form: formReducer,
    appointments: AppointmentReducer,
    barbers: BarberReducer,
    services: ServicesReducer,
    ui: UIReducer
});
