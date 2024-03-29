
const hasAuthStore = () => {
  return (localStorage.getItem('auth-store') !== null);
};

const getAccessToken = () => {
  const authStore = JSON.parse(localStorage.getItem('auth-store')!);
  const accessToken = authStore.state.access;
  return accessToken;
};

const setAccessToken = (token: string) => {
  const authStore = JSON.parse(localStorage.getItem('auth-store')!);
  const newAuthStore = { ...authStore };
  newAuthStore.state.access = token;
  localStorage.setItem('auth-store', JSON.stringify(newAuthStore));
}

const getRefreshToken = () => {
  const authStore = JSON.parse(localStorage.getItem('auth-store')!);
  const refreshToken = authStore.state.refresh;
  return refreshToken;
};

const setRefreshToken = (token: string) => {
  const authStore = JSON.parse(localStorage.getItem('auth-store')!);
  const newAuthStore = { ...authStore };
  newAuthStore.state.refresh = token;
  localStorage.setItem('auth-store', JSON.stringify(newAuthStore));
};

const setAuthenticationState = (authState: boolean) => {
  const authStore = JSON.parse(localStorage.getItem('auth-store')!);
  const newAuthStore = { ...authStore };
  newAuthStore.state.isAuthenticated = authState;
  localStorage.setItem('auth-store', JSON.stringify(newAuthStore));
}

export {
  hasAuthStore,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  setAuthenticationState,
}