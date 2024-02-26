/* Useful status code reference object to make the code more
 readable.
*/
export const status = {
  HTTP_200_OK: 200,
  HTTP_201_CREATED: 201,
  HTTP_204_NO_CONTENT: 204,
  HTTP_400_BAD_REQUEST: 400,
  HTTP_401_UNAUTHORIZED: 401,
  HTTP_403_FORBIDDEN: 403,
  HTTP_404_NOT_FOUND: 404,
};

export type AvailablePaths = '/' | '/signin' | '/signup' | '/create-recipe' | '/recipes' | '/about' | '/profile';