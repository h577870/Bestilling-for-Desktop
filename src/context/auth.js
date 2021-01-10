import { createContext } from 'react'

const AuthContext = createContext({
    user: null,
    hasLoginError: false,
    isLoggedIn: false,
    login: () => null,
    logout: () => null,
    token: null
})

export default AuthContext