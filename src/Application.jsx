import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Oppgaveliste from './OppgaveView'


function Application(props) {

    //Setter valgt oppgave, som denne funksjonen returnerer, slik at andre komponenter har tilgang.
    const [selectedTask, setSelectedTask] = useState(null)

    
    return (
        <div className="app">
            <div className="app-body">
                <Container className="task-overview">
                    <Col className="task-3">
                        <Oppgaveliste onClick={setSelectedTask}/>
                    </Col>
                    <Col className="task-2">Mindre viktige oppgaver - Telling og kontroll</Col>
                    <Col className="task-1">Fullførte oppgaver</Col>
                    <Col className="task-0">Forslag?</Col>
                </Container>
                <Container className="task-info">
                    <Col>Trykk på en oppgave, informasjon om oppgaven kommer her...</Col>
                    <Col>Varer kommer her...</Col>
                    <Col></Col>
                </Container>
                <Container className="task-options">
                    <Col>Endringer gjøres her...</Col>
                </Container>
            </div>
            <div className="app-footer"></div>
        </div>
    )
}
export default Application