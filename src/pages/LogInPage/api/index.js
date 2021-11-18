import api from '../../../http';

export const PostLogIn = () => api.post('/signIn')