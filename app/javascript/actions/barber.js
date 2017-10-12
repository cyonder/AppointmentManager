import axios from 'axios';
import {
    CREATE_BARBER,
    FETCH_BARBERS,
    DELETE_BARBER,
    UPDATE_BARBER
} from '../config/action-types';

import { toggleModal } from "./ui";

// const ROOT_URL = 'http://barber.cloud/api/v1';
const ROOT_URL = 'https://barbercloud.herokuapp.com/api/v1';
// const ROOT_URL = 'http://localhost:3001/api/v1';
const API_KEY = '?key=94drtfsm144';

export const fetchBarbersSuccess = (barbers) => {
    return {
        type: FETCH_BARBERS,
        barbers: barbers
    }
};

export const createBarberSuccess = (barber) => {
    return {
        type: CREATE_BARBER,
        barber: barber
    }
};

export const deleteBarberSuccess = (id) => {
    return {
        type: DELETE_BARBER,
        id: id
    }
};

export const updateBarberSuccess = (barber) => {
    return {
        type: UPDATE_BARBER,
        barber: barber
    }
};

export const fetchBarbers = () => {
    return (dispatch) => {
        return axios.get(`${ROOT_URL}/barbers${API_KEY}`)
            .then(response => {
                dispatch(fetchBarbersSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createBarber = (barber, callback) => {
    // TODO: Clear form field after submit
    return (dispatch) => {
        return axios.post(`${ROOT_URL}/barbers${API_KEY}`, barber)
            .then(response => {
                dispatch(createBarberSuccess(response.data));
            })
            .then( () => dispatch(toggleModal()) )
            .then( () => callback() )
            .catch(error => {
                throw(error);
            });
    }
};

export function deleteBarber(id, callback){
    return (dispatch) => {
        return axios.delete(`${ROOT_URL}/barbers/${id}${API_KEY}`)
            .then( () => dispatch(deleteBarberSuccess(id)) )
            .then( () => callback() )
            .catch(error => {
                throw(error);
            });
    }
}

export function updateBarber(barber, callback){
    return (dispatch) => {
        return axios.put(`${ROOT_URL}/barbers/${barber.id}${API_KEY}`, barber)
            .then( response => {
                dispatch(updateBarberSuccess(response.data));
            })
            .then( () => callback() )
            .catch(error => {
                throw(error);
            })
    }
}