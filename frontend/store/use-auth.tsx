import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  access: string;
  refresh: string;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuth: boolean) => void;
  setAuthTokens: (atoken: string, rtoken: string) => void;
  updateAccessToken: (token: string) => void;
  destroyTokens: () => void;
};

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        access: '',
        refresh: '',
        isAuthenticated: false,
        setIsAuthenticated: (isAuth) => set(() => (
          {
            isAuthenticated: isAuth
          }
        )),
        setAuthTokens: (atoken, rtoken) => set(() => (
          {
            access: atoken,
            refresh: rtoken
          }
        )),
        updateAccessToken: (token) => set(() => (
          {
            access: token
          }
        )),
        destroyTokens: () => set(() => (
          {
            access: '',
            refresh: ''
          }
        )),
      }),
      {
        name: "auth-store"
      }
    )
  )
);

export default useAuthStore;