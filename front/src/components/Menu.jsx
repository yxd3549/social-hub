import React from 'react';


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
            <p>This is the main menu</p>
            <button onClick={() => this.selectActivity('Fibbrick')}>Fibbrick</button>
            <button onClick={() => this.selectActivity('Youtube')}>Youtube</button>
        </div>)
    }
}


export default Menu;