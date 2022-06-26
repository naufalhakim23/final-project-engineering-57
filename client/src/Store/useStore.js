import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  persist(
    devtools(set => ({
      isLoggedInGlobal: false,
      updateisLoggedInGlobal: isLoggedInGlobal =>
        set(state => ({
          isLoggedInGlobal,
        })),
    })),
    { name: 'login-status', getStorage: () => sessionStorage }
  )
);
export default useStore;
