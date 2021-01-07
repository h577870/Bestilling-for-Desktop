import AuthContext from './context/auth'
import { useContext } from 'react'

export function LogoutButton(props) {

    const { logout } = useContext(AuthContext)

    return (
        <button className="logout-button" onClick={logout}>
            Logg ut
        </button>
    )
}

export function LoginButton(props) {
    return (
        <button className="login-button" onClick={props.handleClick}>
            Logg inn
        </button>
    )
}
