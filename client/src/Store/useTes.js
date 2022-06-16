import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useTes = create(
  persist(
    (set, get) => ({
      r: 0,
      i: 0,
      a: 0,
      s: 0,
      e: 0,
      c: 0,
      updateRiasec: (type) => set({ [type]: get()[type] + 1 }),
    }),
    {
      name: 'tes-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)