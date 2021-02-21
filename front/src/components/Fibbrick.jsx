import React from 'react';
import {Paper, Button, TextField} from '@material-ui/core';

class Fibbrick extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
           socket: props.socket, 
           username: window.localStorage.getItem('username'),
           prompt: '',
           answers: [],
           response: ''
        };

        this.returnToMenu = this.returnToMenu.bind(this);
    }

    componentDidMount() {
        this.state.socket.on("fibbage-prompt", (newPrompt) => {
            console.log("Received Fibbage Prompt");
            this.setState({prompt: newPrompt});
        });
    }

    returnToMenu() {
        this.state.socket.emit("select-activity", "Menu");
    }

    submitLie() {
        const textField = document.getElementById("lie");
        this.state.socket.emit("fibbage-response", {lie: textField.value, username: this.state.username})
    }

    render() {
        return (
        <div>
            <p>This is the Fibbrick Page</p>
            <div id="fibbage-container">
                <Paper elevation={3} id="prompt">
                    {this.state.prompt}
                </Paper>
                <TextField variant="outlined" label="Enter your lie." id="lie"/>
                <br/><br/>
                <Button variant="contained" color="primary" onClick={() => this.submitLie()}>Submit Lie</Button>
            </div>
            <button onClick={() => this.returnToMenu()}>Return to Menu</button>
        </div>)
    }
}

export default Fibbrick;