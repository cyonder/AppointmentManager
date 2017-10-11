import axios from 'axios';
import { CREATE_BARBER, FETCH_BARBERS } from '../config/action-types';
import { toggleModal } from "./ui";

// const ROOT_URL = 'http://barber.cloud/api/v1';
const ROOT_URL = 'https://barbercloud.herokuapp.com/api/v1';
// const ROOT_URL = 'http://localhost:3000/api/v1';
const API_KEY = '?key=94drtfsm144';

// export function fetchBarbers(){
//     const promise = axios.get(`${ROOT_URL}/barbers.json${API_KEY}`);
//     return{
//         type: FETCH_BARBERS,
//         payload: promise
//     }
// }

// export function createBarber(values, callback){
//     const request = axios.post(`${ROOT_URL}/barbers${API_KEY}`, values)
//     .then( () => callback() );
//     return{
//         type: CREATE_BARBER,
//         payload: request
//     };
// }

export const fetchBarbersSuccess = (barbers) => {
    return {
        type: FETCH_BARBERS,
        barbers
    }
};

export const createBarberSuccess = (barber) => {
    return {
        type: CREATE_BARBER,
        barber
    }
};

export const fetchBarbers = () => {
    return (dispatch) => {
        return axios.get(`${ROOT_URL}/barbers${API_KEY}`)
            .then(response => {
                dispatch(fetchBarbersSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createBarber = (barber) => {
    return (dispatch) => {
        return axios.post(`${ROOT_URL}/barbers${API_KEY}`, barber)
            .then(response => {
                dispatch(createBarberSuccess(response.data))
            })
            .then(() => {
                dispatch(toggleModal())
            })
            .catch(error => {
                // dispatch(toggleModal())
                throw(error);
            });
    }
};