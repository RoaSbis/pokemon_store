import api from '../../../http';

export const getProducts = () => api.get('/products');