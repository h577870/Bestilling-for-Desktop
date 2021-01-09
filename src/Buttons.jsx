import AuthContext from './context/auth'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

export function LogoutButton(props) {

    const { logout } = useContext(AuthContext)

    return (
        <button className="logout-button" onClick={logout}>
            Logg ut
        </button>
    )
}

export function LoginButton(props) {
    let history = useHistory()
    
    const handleClick = () => {
        history.push("/login")
    }
    return (
        <button className="login-button" onClick={handleClick}>
            Logg inn
        </button>
    )
}
