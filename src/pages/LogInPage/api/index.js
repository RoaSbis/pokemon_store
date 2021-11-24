import api from '../../../http';

export const LogIn = (signData) => api.post('/auth/signIn', signData);