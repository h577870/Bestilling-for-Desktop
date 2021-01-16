import { useState, useEffect, useContext, useCallback } from 'react'
import AuthContext from './context/auth'
import { get } from './Requests'

function Oppgaveliste(props) {

    const url_base = "http://localhost:8080"
    const usercontext = useContext(AuthContext)
    const [data, setData] = useState([]) 

    const fetchTasks = useCallback(
        async (userid) => {
            const url = `${url_base}/oppgave/${userid}`
            const response = await get(url)
            const data = await response.json()
            setData(data)
        }, []
    )

    useEffect(
        () => {
            fetchTasks(usercontext.user)
        }, [fetchTasks, usercontext.user])

    return (
        <ul className="tasklist-list">
            {
                data.map(task => 
                <li className="tasklist-task" onClick={(task) => props.onClick(task)}>{ task.tittel }</li>
                )}
        </ul>
    )
} 
export default Oppgaveliste