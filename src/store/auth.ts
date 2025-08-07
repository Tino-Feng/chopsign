import { persist } from 'zustand/middleware'
import { createStore } from 'zustand/vanilla'
import { TOKEN_NAME } from '#/config'
import { parse, stringify } from 'zipson'

export interface AuthStoreState {
  [TOKEN_NAME]: string
}

export interface AuthStoreAction {
  setToken: (token: string) => void
}

export const authStore = createStore<AuthStoreState & AuthStoreAction>()(
  persist(
    (set) => ({
      [TOKEN_NAME]: '',
      setToken: (token: string) => set({ [TOKEN_NAME]: token })
    }),
    {
      name: 'chop_sign_auth',
      partialize: (state) => ({ [TOKEN_NAME]: state[TOKEN_NAME] }),
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name)
          if (item) {
            return parse(item)
          }
          return null
        },
        setItem(name, value) {
          localStorage.setItem(name, stringify(value))
        },
        removeItem(name) {
          localStorage.removeItem(name)
        }
      }
    }
  )
)
