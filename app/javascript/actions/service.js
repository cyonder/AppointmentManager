import axios from 'axios'
import{
    FETCH_SERVICES,
    CREATE_SERVICE,
    DELETE_SERVICE,
    UPDATE_SERVICE
} from '../config/action-types';

import { toggleModal } from "./ui";
import { fetchBarbers } from './barber'

// const ROOT_URL = 'http://barber.cloud/api/v1';
const ROOT_URL = 'https://barbercloud.herokuapp.com/api/v1';
// const ROOT_URL = 'http://localhost:3001/api/v1';
const API_KEY = '?key=94drtfsm145';

export const fetchServicesSuccess = (services) => {
    return {
        type: FETCH_SERVICES,
        services: services
    }
};

export const createServiceSuccess = (service) => {
    return {
        type: CREATE_SERVICE,
        service: service
    }
};

//

export const deleteServiceSuccess = (id) => {
    return {
        type: DELETE_SERVICE,
        id: id
    }
};

export const updateServiceSuccess = (service) => {
    return {
        type: UPDATE_SERVICE,
        service: service
    }
};

export const fetchServices = () => {
    return (dispatch) => {
        return axios.get(`${ROOT_URL}/services${API_KEY}`)
            .then(response => {
                dispatch(fetchServicesSuccess(response.data));
            })
            .then( () => dispatch( fetchBarbers() )) // Need to access barbers.
            .catch(error => {
                throw(error);
            });
    };
};

export const createService = (service, callback) => {
    // TODO: Clear form field after submit
    return (dispatch) => {
        return axios.post(`${ROOT_URL}/services${API_KEY}`, service)
            .then(response => {
                dispatch(createServiceSuccess(response.data));
            })
            .then( () => dispatch(toggleModal()) )
            .then( () => callback() )
            .catch(error => {
                throw(error);
            });
    }
};

export const deleteService = (id, callback) => {
    return (dispatch) => {
        return axios.delete(`${ROOT_URL}/services/${id}${API_KEY}`)
            .then( () => dispatch(deleteServiceSuccess(id)) )
            .then( () => callback() )
            .catch(error => {
                throw(error);
            });
    }
}

export const updateService = (service, callback) => {
    return (dispatch) => {
        return axios.put(`${ROOT_URL}/services/${service.id}${API_KEY}`, service)
            .then( response => {
                dispatch(updateServiceSuccess(response.data));
            })
            .then( () => callback() )
            .catch(error => {
                throw(error);
            })
    }
}
