import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Axios Instance
const apiClient = axios.create({
  baseURL:  'http://localhost:3333/api/users',
  timeout: 5000,
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log(`[Request] ${config.method.toUpperCase()} - ${config.url}`);
    return config;
  },
  (error) => {
    console.error('[Request Error]', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log(`[Response] ${response.status} - ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('[Response Error]', error.response?.data || error.message);

    if (error.response?.status === 401) {
      console.warn('Unauthorized! Redirecting to login...');
      // React-friendly redirection
      
    }
    return Promise.reject(error);
  }
);

export default apiClient;
