import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-sergio.herokuapp.com',
});

export default api;