import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Oppgaveliste from './OppgaveView'
import Oppgaveinfo from './OppgaveInfo'
import OppgaveOptions from './OppgaveOptions'


function Application(props) {

    //Setter valgt oppgave, som denne funksjonen returnerer, slik at andre komponenter har tilgang.
    const [selectedTask, setSelectedTask] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)

    const setTask = (task) => {
        setSelectedItem(null)
        setSelectedTask(task)
    }
    const setItem = (item) => {
        setSelectedItem(item)
    } 
    
    return (
        <div className="app">
            <div className="app-body">
                <Container className="task-overview">
                    <Col className="task-3">
                        <Oppgaveliste onClick={(task) => setTask(task)}/>
                    </Col>
                </Container>
                <Container className="task-info">
                    <Col>
                        <Oppgaveinfo task={selectedTask} onClick={(item) => setItem(item)}/>
                    </Col>
                </Container>
                <Container className="task-options">
                    <Col>
                        <OppgaveOptions task={selectedTask} item={selectedItem}/>
                    </Col>
                </Container>
            </div>
            <div className="app-footer"></div>
        </div>
    )
}
export default Application