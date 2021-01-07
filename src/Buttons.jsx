import {useAuth} from './context/auth'

export function LogoutButton(props) {

    const { setAuthTokens } = useAuth();

    function setToken() {
        setAuthTokens()
    }

    return (
        <button class="logout-button" onClick={setToken}>
            Logg ut
        </button>
    )
}

export function LoginButton(props) {
    return (
        <button class="login-button" onClick={props.handleClick}>
            Logg inn
        </button>
    )
}
