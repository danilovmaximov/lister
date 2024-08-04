import { authData } from '@utils/authData'
import { createContext } from 'react'

export const UserContext = createContext<authData | null>(null)
