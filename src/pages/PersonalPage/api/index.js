import api from '../../../http';

export const getOrders = () => api.get('/order')
export const sendOrder = ({customerId, totalPrice, itemsList}) => api.post('/order', {customerId, totalPrice, itemsList});