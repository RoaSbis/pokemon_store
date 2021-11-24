import api from '../../../http';

export const getCartState = () => api.get('/cart');
export const addProductToCart = ({id, name, image, price, quantity}) => api.post('/cart/item', {id, name, image, price, quantity} );
export const changeCartState = ({id, quantity}) => api.patch('/cart/item', {id, quantity});
export const deleteProductFromCart = (id) => api.delete(`/cart/item/${id}`);
export const sendOrder = ({customerId, totalPrice, itemsList}) => api.post('/order', {customerId, totalPrice, itemsList})