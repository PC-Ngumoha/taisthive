import axios from 'axios';
import {
  RecipeDataType,
  UserDetailsType,
  UserLoginRefreshType
} from '@/types';
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken
} from './store-helpers';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/* Axios instance config */
const recipeRequest = axios.create({
  baseURL: `${API_BASE_URL}/api/recipes`,
  timeout: 2500,
});

recipeRequest.interceptors.request.use(
  (config) => {
    const access = getAccessToken();

    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

recipeRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const refresh = getRefreshToken();
        const refreshResponse = await axios.post(
          `${API_BASE_URL}/api/users/login/refresh`,
          { refresh }
        );
        const newAccess = refreshResponse.data.access;
        setAccessToken(newAccess);

        return recipeRequest(error.config);
      } catch (err) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
)

const authRequest = axios.create({
  baseURL: `${API_BASE_URL}/api/users`,
  timeout: 3000,
});

/* Recipe CRUD Helper Functions */
export const getAllRecipes = async () => {
  try {
    const response = await recipeRequest.get('/');
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRecipe = async (id: number) => {
  try {
    const response = await recipeRequest.get(`/${id}/`);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createRecipe = async (data: RecipeDataType) => {
  try {
    const response = await recipeRequest.post('/', data);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateRecipe = async (id: number, data: RecipeDataType) => {
  try {
    const response = await recipeRequest.put(`/${id}/`, data);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteRecipe = async (id: number) => {
  try {
    const response = await recipeRequest.delete(`/${id}/`);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

/* User Authentication Helper Functions */
export const createUser = async (data: UserDetailsType) => {
  try {
    const response = await authRequest.post('/register', data);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loginUser = async (data: UserDetailsType) => {
  try {
    const response = await authRequest.post('/login', data);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const refreshUserLogin = async (data: UserLoginRefreshType) => {
  try {
    const response = await authRequest.post('/login/refresh', data);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};