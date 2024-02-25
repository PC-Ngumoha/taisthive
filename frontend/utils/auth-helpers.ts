import axios from 'axios';
import {
  RecipeDataType,
  UserDetailsType,
  UserLoginRefreshType
} from '@/types';
import {
  getAccessToken,
  getRefreshToken,
  hasAuthStore,
  setAccessToken,
  setAuthenticationState,
  setRefreshToken
} from './store-helpers';
import { status } from '.';

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
        const newRefresh = refreshResponse.data.refresh;
        setAccessToken(newAccess);
        setRefreshToken(newRefresh);

        return recipeRequest(error.config);
      } catch (err) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
)

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


const authRequest = axios.create({
  baseURL: `${API_BASE_URL}/api/users`,
  timeout: 3000,
});


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

const refreshUserLogin = async (data: UserLoginRefreshType) => {
  try {
    const response = await authRequest.post('/login/refresh', data);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const checkIfAuthenticated = async () => {
  if (hasAuthStore()) {
    const refresh = getRefreshToken();

    if (refresh !== '') {
      try {
        const response = await refreshUserLogin({ refresh });
        if (response.status === status.HTTP_200_OK) {
          const freshAccess = response.data.access;
          const freshRefresh = response.data.refresh;
          setAccessToken(freshAccess);
          setRefreshToken(freshRefresh);
          setAuthenticationState(true);
        } else {
          setAuthenticationState(false);
        }
      } catch (err) {
        setAuthenticationState(false);
      }
    } else {
      setAuthenticationState(false);
    }
  } else {
    setAuthenticationState(false);
  }
};


const profileRequest = axios.create({
  baseURL: `${API_BASE_URL}/api/profile`,
  timeout: 3000,
})


profileRequest.interceptors.request.use(
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

profileRequest.interceptors.response.use(
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
        const newRefresh = refreshResponse.data.refresh;
        setAccessToken(newAccess);
        setRefreshToken(newRefresh);

        return recipeRequest(error.config);
      } catch (err) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
)

export const createUserProfile = async () => {
  try {
    const response = await profileRequest.post('/');
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const retrieveUserProfile = async () => {
  try {
    const response = await profileRequest.get('/');
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateUserProfile = async (data: {
  displayName: string,
  firstName: string,
  middleName: string,
  lastName: string
}) => {
  const payload = {
    'display_name': data.displayName,
    'first_name': data.firstName,
    'middle_name': data.middleName,
    'last_name': data.lastName,
  };
  try {
    const response = profileRequest.put('/', payload);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
