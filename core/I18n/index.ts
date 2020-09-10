import { createContext, useContext } from 'react'
import { br } from './br'

const Context = createContext(br["pt-br"])

export const I18n = Context.Provider
export const useI18n = () => useContext(Context)

export const langs = {
  ...br
}
