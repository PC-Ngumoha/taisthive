// import dotenv from 'dotenv';
// dotenv.config();
import axios from 'axios';
import {
  RecipeDataType,
  UserDetailsType,
  UserLoginRefreshType
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const getAllRecipes = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/recipes/`
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRecipe = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/recipes/${id}/`
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createRecipe = async (data: RecipeDataType) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/recipes/`,
      data
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateRecipe = async (id: number, data: RecipeDataType) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/recipes/${id}/`,
      data
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteRecipe = async (id: number) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/recipes/${id}/`
    );
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createUser = async (data: UserDetailsType) => {
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

export const loginUser = async (data: UserDetailsType) => {
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

export const refreshUserLogin = async (data: UserLoginRefreshType) => {
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
