import React from 'react';

class Fibbrick extends React.Component {
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
            <p>This is the Fibbrick Page</p>
            <button onClick={() => this.returnToMenu()}>Return to Menu</button>
        </div>)
    }
}

export default Fibbrick;