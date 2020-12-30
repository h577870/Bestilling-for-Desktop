import {useAuth} from './context/auth'


function Application(props) {
    const { setAuthTokens } = useAuth();

    function setToken() {
        setAuthTokens()
    }
    return (
        <div>
            <p>Hello, App...</p>
            <button onClick={setToken}>Logg ut</button>
        </div>
    )
}
export default Application