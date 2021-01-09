import { useState, useEffect, useContext, useCallback } from 'react'
import { AuthContext } from './context/auth'
import { get } from './Requests'

function Oppgaveliste(props) {

    const url_base = "http://localhost:8080"
    const usercontext = useContext(AuthContext)
    const [data, setData] = useState(null)
    //Skamløs kopi fra https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    const token = document.cookie.split('; ').find(row => row.startsWith("jwt")).split('=')[1]

    const listItems = data.map((task) => 
        <li className="tasklist-task" onClick={(task) => props.onClick(task)}>{ task.tittel }</li>
    )

    const fetchTasks = useCallback(async (token, userid) => {
        const url = `${url_base}/oppgave/${userid}`
        const response = await get(url, token)
        const data = await response.json()
        setData(data)
    }, [])

    useEffect(() => {
        fetchTasks(token, usercontext.user)
    }, [fetchTasks, token, usercontext.user])

    return (
        <ul className="tasklist">{ listItems }</ul>
    )
} 
export default Oppgaveliste