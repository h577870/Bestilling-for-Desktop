import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


function Application(props) {
    
    return (
        <div className="app">
            <div className="app-body">
                <Container className="task-overview">
                    <Col className="task-3">Viktige oppgaver</Col>
                    <Col className="task-2">Mindre viktige oppgaver</Col>
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