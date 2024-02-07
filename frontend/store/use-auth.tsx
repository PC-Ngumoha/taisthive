import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  access: string;
  refresh: string;
  setAuthTokens: (atoken: string, rtoken: string) => void;
  updateAccessToken: (token: string) => void;
};

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        access: '',
        refresh: '',
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
        ))
      }),
      {
        name: "auth-store"
      }
    )
  )
);

export default useAuthStore;