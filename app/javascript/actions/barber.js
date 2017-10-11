import axios from 'axios';
import { CREATE_BARBER, FETCH_BARBERS } from '../config/action-types';

// const ROOT_URL = 'http://barber.cloud/api/v1';
const ROOT_URL = 'http://localhost:3000/api/v1';
const API_KEY = '?key=94drtfsm144';

export function fetchBarbers(){
    const promise = axios.get(`${ROOT_URL}/barbers.json`);
    return{
        type: FETCH_BARBERS,
        payload: promise
    }
}

export function createBarber(values, callback){
    const request = axios.post(`${ROOT_URL}/barbers${API_KEY}`, values)
        .then( () => callback() );
    return{
        type: CREATE_BARBER,
        payload: request
    };
}