import React from 'react';
import {Paper, Button, TextField} from '@material-ui/core';

class Fibbrick extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
           socket: props.socket, 
           username: window.localStorage.getItem('username'),
           prompt: '',
           answers: {},
           response: ''
        };

        this.returnToMenu = this.returnToMenu.bind(this);
    }

    componentDidMount() {
        this.state.socket.on("fibbage-prompt", (newPrompt) => {
            console.log("Received Fibbage Prompt");
            this.setState({prompt: newPrompt});
        });

        this.state.socket.on("fibbage-lies", (lies) => {
            const choices = document.getElementById("choices");
            choices.style.display = "block";
            this.setState({
                answers: lies
            });

            const loader = document.getElementById("loader");
            loader.style.display = "none";
        });
    }

    returnToMenu() {
        this.state.socket.emit("select-activity", "Menu");
    }

    submitLie() {
        const textField = document.getElementById("lie");
        this.state.socket.emit("fibbage-response", {lie: textField.value, username: this.state.username})

        const button = document.getElementById("submitButton");
        button.style.display = "none";

        const loader = document.getElementById("loader");
        loader.style.display = "block";
    }

    chooseResponse(response) {
        this.state.socket.emit("fibbage-choice", {choice: response, username: this.state.username})
    }

    render() {
        const elements = Object.values(this.state.answers);

        const items = []

        for (const [index, value] of elements.entries()) {
            items.push(<Paper onClick={((e) => e.target.style.backgroundColor = "Green")} 
                            elevation={3} key={index}>
                            <p className="choice">{value}</p>
                        </Paper>)
        }
        return (
        <div>
            <div id="loader">Loading....</div>
            <div id="fibbage-container">
                <Paper elevation={3} id="prompt">
                    {this.state.prompt}
                </Paper>
                <TextField variant="outlined" label="Enter your lie." id="lie"/>
                <br/><br/>
                <Button id="submitButton" variant="contained" color="primary" onClick={() => this.submitLie()}>Submit Lie</Button>
            </div>
            <div id="choices">
                {items}
            </div>
            <Button variant="contained" color="primary" onClick={() => this.returnToMenu()}>Return to Menu</Button>
        </div>)
    }
}

export default Fibbrick;