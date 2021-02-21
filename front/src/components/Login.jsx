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
        console.log(textField.value);
        this.state.socket.emit("login", textField.value);
    }

    render() {
        return (
            <Box align="center"
            >
                <br/>
                <TextField variant="outlined" label="Username" id="username"/>
                <br/><br/>
                <TextField variant="outlined" label="Room Name"/>
                <br/><br/>
                <Button variant="contained" color="primary" onClick={() => this.login()}>Join Room</Button>
            </Box>);
    }
}

export default Login;