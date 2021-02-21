import React from 'react';
import {Box, Button, TextField} from '@material-ui/core';

class Login extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
           socket: props.socket, 
        };
    }

    login() {
        const textField = document.getElementById("username");
        window.localStorage.setItem('username', textField.value);        
        this.state.socket.emit("login", textField.value);
    }

    render() {
        return (
            <div style={{position: "fixed", top: "35%", left: "45%"}}>
                <Box align="center"
                >
                    <br/>
                    <TextField variant="outlined" label="Username" id="username"/>
                    <br/><br/>
                    <TextField variant="outlined" label="Room Name"/>
                    <br/><br/>
                    <Button variant="contained" color="primary" onClick={() => this.login()}>Join Room</Button>
                </Box>
            </div>);
    }
}

export default Login;