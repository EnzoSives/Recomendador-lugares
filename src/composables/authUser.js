import { ref } from 'vue';
import axios from 'axios';
import router from '../router/Router';

const user = ref(null);
const token = ref('');
const isAuthenticated = ref(false);  

const register = async (username, email, password) => {
  const response = await axios.post('/auth/register', { username, email, password });
  token.value = response.data.access_token;
  localStorage.setItem('access-token', token.value);
};

const login = async (email, password) => {
  const response = await axios.post('/auth/login', { email, password });
  token.value = response.data.access_token;
  localStorage.setItem('access-token', token.value);
  console.log(response.data);
  router.push('/');
  
};

const validateToken = async () => {
  const token = localStorage.getItem('access-token');
  console.log("Validate");
  console.log(token)
  if (token) {
    try {
      const response = await axios.get('/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      user.value = response.data;
      isAuthenticated.value = true; 
      console.log("Validate");
      console.log(isAuthenticated.value)
      
    } catch (error) {
      console.error(error);
      localStorage.removeItem('access-token');
      isAuthenticated.value = false;  
    }
  }
};

const logout = () => {  
  user.value = null;
  isAuthenticated.value = false;
  localStorage.removeItem('access-token');
  router.push('/login');
};

export default function useAuth() {
  return { register, login, validateToken, logout, user, isAuthenticated }; 
}