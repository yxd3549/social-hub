import React from 'react';
import {Box, Button, TextField} from '@material-ui/core';

class Youtube extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
           socket: props.socket, 
           response: ''
        };

        this.returnToMenu = this.returnToMenu.bind(this);
        this.submitVideoURL = this.submitVideoURL.bind(this);
    }


    componentDidMount() {
        this.state.socket.on("watch_URL", (url) => {
            const urlObj = new URL(url)
            const params = new URLSearchParams(urlObj.search)
            const videoID = params.get('v')
            const new_url = 'https://www.youtube.com/embed/' + videoID + '?autoplay=1'


            console.log(new_url)
            const iFrame = document.getElementById("youtube_iframe")
            iFrame.src = new_url;
        });
    }


    returnToMenu() {
        this.state.socket.emit("select-activity", "Menu");
    }


    submitVideoURL() {
        const textField = document.getElementById("url");
        console.log(textField.value) 
        this.state.socket.emit("video_URL", textField.value);
    }
    

    render() {
        return (
        <Box align="center">
            <br></br>
            <TextField variant="outlined" label="Video URL" id="url"/>
            <br></br>
            <Button variant="contained" color="primary" onClick={() => this.submitVideoURL()}>Submit</Button>
            <br></br>
            <br></br>
            <br></br>
            <iframe id="youtube_iframe" width="1024" height="512" type="text/html" src="https://www.youtube.com/watch?v=SY3y6zNTiLs" frameboard="0" allowFullScreen></iframe>
            <br></br>
            <Button variant="contained" color="primary" onClick={() => this.returnToMenu()}>Return to Menu</Button>
        </Box>)
    }
}

export default Youtube;