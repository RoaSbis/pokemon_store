import api from '../../../http';

export const getDetailedProduct = (pokemonId) => api.get(`/products/${pokemonId}`)