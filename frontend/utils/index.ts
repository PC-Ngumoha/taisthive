// import dotenv from 'dotenv';
// dotenv.config();
import axios from 'axios';
import {
  RecipeDataType,
  UserDetailsType,
  UserLoginRefreshType
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/* Useful Definitions of all the useful status code that we
could encounter */
export const status = {
  HTTP_200_OK: 200,
  HTTP_201_CREATED: 201,
  HTTP_204_NO_CONTENT: 204,
  HTTP_400_BAD_REQUEST: 400,
  HTTP_401_UNAUTHORIZED: 401,
  HTTP_403_FORBIDDEN: 403,
};

/* Recipe CRUD Helper Functions */
export const getAllRecipes = async (access: string) => {
  try {
    console.log(access);
    const response = await axios.get(
      `${API_BASE_URL}/api/recipes/`,
      {
        headers: {
          'Authorization': `Bearer ${access}`,
        }
      }
    );
    return response;
  } catch (err) {
    // console.log(err);
    throw err;
  }
};

export const getRecipe = async (
  id: number,
  access: string
) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/recipes/${id}/`,
      {
        headers: {
          'Authorization': `Bearer ${access}`,
        }
      }
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createRecipe = async (
  data: RecipeDataType,
  access: string
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/recipes/`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${access}`,
        }
      }
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateRecipe = async (
  id: number,
  data: RecipeDataType,
  access: string
) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/recipes/${id}/`,
      data,
      {
        headers: {
          'Authorization': `Bearer ${access}`,
        }
      }
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteRecipe = async (
  id: number,
  access: string
) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/recipes/${id}/`,
      {
        headers: {
          'Authorization': `Bearer ${access}`,
        }
      }
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};


/* User Authentication Helper Functions */
export const createUser = async (
  data: UserDetailsType
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/register`,
      data
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const loginUser = async (
  data: UserDetailsType
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/login`,
      data
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const refreshUserLogin = async (
  data: UserLoginRefreshType
) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/login/refresh`,
      data
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
