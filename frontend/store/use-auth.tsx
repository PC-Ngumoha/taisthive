import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string;
  refreshToken: string;
  setAuthTokens: (atoken: string, rtoken: string) => void;
  updateAccessToken: (token: string) => void;
};

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        accessToken: '',
        refreshToken: '',
        setAuthTokens: (atoken, rtoken) => set((state) => (
          {
            ...state,
            accessToken: atoken,
            refreshToken: rtoken
          }
        )),
        updateAccessToken: (token) => set((state) => ({ ...state, accessToken: token }))
      }),
      {
        name: "auth-store"
      }
    )
  )
);