import moment from 'moment'
import { create } from 'zustand'
import 'moment/dist/locale/ru'
import 'moment/dist/locale/es'
import 'moment/dist/locale/cs'

interface storeState {
  lang: string
  setLang: (newLang: string) => void
}

export const useStore = create<storeState>((set) => ({
  lang: navigator.language.match(/[a-z]{2}/g)?.[0] ?? 'en',
  setLang: (newLang: string) => {
    // Update moment locale
    moment.locale(newLang)
    // Update store value
    set({ lang: newLang })
  },
}))
