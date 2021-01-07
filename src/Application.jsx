import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


function Application(props) {
    
    return (
        <div class="app">
            <div class="app-body">
                <Container class="task-overview">
                    <Col class="task-3">Viktige oppgaver</Col>
                    <Col class="task-2">Mindre viktige oppgaver</Col>
                    <Col class="task-1">Fullførte oppgaver</Col>
                    <Col class="task-0">Forslag?</Col>
                </Container>
                <Container class="task-info">
                    <Col>Trykk på en oppgave, informasjon om oppgaven kommer her...</Col>
                    <Col>Varer kommer her...</Col>
                    <Col></Col>
                </Container>
                <Container class="task-options">
                    <Col>Endringer gjøres her...</Col>
                </Container>
            </div>
            <div className="app-footer"></div>
        </div>
    )
}
export default Application