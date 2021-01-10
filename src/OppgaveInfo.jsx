import { useCallback, useEffect } from 'react'

function Oppgaveinfo(props) {

    const currentTask = props.task
    const items = currentTask.vareliste
    const itemlist = items.map((item) =>
        <li className="taskinfo-item" onClick={(item) => props.onClick(item)}>
            { item.navn }
        </li>
    )
    const render = useCallback(
        () => {
           if (currentTask !== null) {
            return (
                <div className="taskinfo-task">
                    <div className="taskinfo-props">
                        <ul className="taskinfo-propslist">
                            <li className="props-title">{currentTask.tittel}</li>
                            <li className="props-description">{currentTask.beskrivels}</li>
                            <li className="props-type">{currentTask.type}</li>
                            <li className="props-status">{currentTask.status}</li>
                        </ul>
                    </div>
                    <div className="taskinfo-items">
                        <ul className="taskinfo-itemlist">{itemlist}</ul>
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
    }, [currentTask, itemlist])

    useEffect(
        () => {
            document.title = currentTask.title //Litt testing
            render()
        }, [currentTask, render])

    return (
        render()
    )
}

export default Oppgaveinfo