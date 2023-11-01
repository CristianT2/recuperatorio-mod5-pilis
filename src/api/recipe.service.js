import { api } from './api'

const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/recipes`;

export const getRecipesList = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT);
    return response.json();
  } catch (error) {
    throw new Error('could not fetch recipes');
  }
}; 