import { useCallback, useEffect, useRef } from 'react'

function Oppgaveinfo(props) {

    const currentTask = useRef(null)
    const items = useRef(null)
    const itemlist = items.current
    const render = useCallback(
        () => {
            if (currentTask.current !== null) {
            return (
                <div className="taskinfo-task">
                    <div className="taskinfo-props">
                        <ul className="taskinfo-propslist">
                            <li className="props-title">{currentTask.current.tittel}</li>
                            <li className="props-description">{currentTask.current.beskrivelse}</li>
                            <li className="props-type">{currentTask.current.type}</li>
                            <li className="props-status">{currentTask.current.status}</li>
                        </ul>
                    </div>
                    <div className="taskinfo-items">
                        <ul className="taskinfo-itemlist">{
                            itemlist.map((item) =>
                                <li key={ item.ean } className="taskinfo-item" onClick={(item) => props.onClick(item)}>{item.navn}</li>)}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="taskinfo-notask">
                    <p className="taskinfo-notask-p">Ingen oppgave valgt...</p>
                </div>
            )
        }
    }, [itemlist, props])

    useEffect(
        () => {
            if (props.task !== null) {
                currentTask.current = props.task
            }
            if (currentTask.current !== null) {
                items.current = currentTask.current.vareliste.json()
                console.log(typeof items.current)
            }
            render()
        }, [currentTask, render, props.task])

    return (
        render()
    )
}

export default Oppgaveinfo