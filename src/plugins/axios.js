import axios from 'axios';
import { baseUrl } from '../config';

axios.interceptors.request.use(async (request) => {
  const writableMethods = ['post', 'put', 'patch', 'delete'];

  if (writableMethods.includes(request.method)) {
    const { data } = await axios.get(`${baseUrl}/session/token`);
    request.headers['Content-Type'] = 'application/json';
    request.headers['X-CSRF-Token'] = data;
  }

  return request;
});
