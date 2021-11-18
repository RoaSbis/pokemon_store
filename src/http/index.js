import axios from 'axios';

const baseURL = 'https://demo-api.it-shatle.by/';

const config = {
    baseURL,
}

const api = axios.create(config)

export default api;