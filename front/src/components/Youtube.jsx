import React from 'react';

class Youtube extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
           socket: props.socket, 
           response: ''
        };

        this.returnToMenu = this.returnToMenu.bind(this);
    }

    returnToMenu() {
        this.state.socket.emit("select-activity", "Menu");
    }

    render() {
        return (
        <div>
            <p>This is the Youtube Page</p>
            <button onClick={() => this.returnToMenu()}>Return to Menu</button>
        </div>)
    }
}

export default Youtube;