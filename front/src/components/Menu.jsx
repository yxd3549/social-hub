import React from 'react';
import {Container, Jumbotron, Row, Card} from 'react-bootstrap';

class Menu extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
           socket: props.socket, 
           response: ''
        };

        this.selectActivity = this.selectActivity.bind(this);
    }

    selectActivity(game) {
        console.log("On the menu, selecting an activity")
        this.state.socket.emit("select-activity", game);
    }    

    render() {
        return (
        <div>
            <Jumbotron fluid style={{background: '#31493C'}}>
                <Container>
                    <h1 style={{color: 'white'}}>Welcome</h1>
                    <p style={{color: 'white'}}>
                        Select an activity from the list below, or just hang out with your friends!
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px'}} onClick={() => this.selectActivity('Fibbrick')}>
                        <Card.Body>
                            <Card.Title>Fibbrick</Card.Title>
                            <Card.Subtitle className="mb-2">2-8 People</Card.Subtitle>
                            <Card.Text>
                                Can you tell when your friends are lying to you?
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }} onClick={() => this.selectActivity('Youtube')}>
                        <Card.Body>
                            <Card.Title>Youtube Watch Party</Card.Title>
                            <Card.Subtitle className="mb-2">1+ People</Card.Subtitle>
                            <Card.Text>
                                Sit back and enjoy the show!
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }}>
                        <Card.Body>
                            <Card.Title>Paint</Card.Title>
                            <Card.Subtitle className="mb-2">1+ People</Card.Subtitle>
                            <Card.Text>
                                Set your inner artist free! Who can create the best recreation of some famous paintings?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }}>
                        <Card.Body>
                            <Card.Title>Chess</Card.Title>
                            <Card.Subtitle className="mb-2">2 People</Card.Subtitle>
                            <Card.Text>
                                Oh yeah, it's big brain time.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }}>
                        <Card.Body>
                            <Card.Title>Hot Seat</Card.Title>
                            <Card.Subtitle className="mb-2">3+ People</Card.Subtitle>
                            <Card.Text>
                                How well do you know your friends?
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }}>
                        <Card.Body>
                            <Card.Title>Geoguessr</Card.Title>
                            <Card.Subtitle className="mb-2">1+ Players</Card.Subtitle>
                            <Card.Text>
                                Where in the world is Carmen Sandiego?
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }}>
                        <Card.Body>
                            <Card.Title>Catchphrase</Card.Title>
                            <Card.Subtitle className="mb-2">4+ People</Card.Subtitle>
                            <Card.Text>
                                How well can you communicate under pressure?
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }}>
                        <Card.Body>
                            <Card.Title>Pictionary</Card.Title>
                            <Card.Subtitle className="mb-2">3+ People</Card.Subtitle>
                            <Card.Text>
                                Artists rise up.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }}>
                        <Card.Body>
                            <Card.Title>Railroad Barons</Card.Title>
                            <Card.Subtitle className="mb-2">2-5 People</Card.Subtitle>
                            <Card.Text>
                                Check out this totally original game.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>

                <Row>
                    <Card style={{ width: '18rem', background: '#B3EFB2', margin: '2px' }}>
                        <Card.Body>
                            <Card.Title>More to come...</Card.Title>
                            <Card.Subtitle className="mb-2"></Card.Subtitle>
                            <Card.Text>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
        );
    }
}


export default Menu;