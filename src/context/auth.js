import { createContext } from 'react'

const AuthContext = createContext({
    user: null,
    hasLoginError: false,
    isLoggedIn: false,
    login: () => null,
    logout: () => null
})

export default AuthContext