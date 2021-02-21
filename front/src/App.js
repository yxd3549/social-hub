import './App.css';
import io from "socket.io-client";
import React from 'react';

import Menu from './components/Menu';
import Fibbrick from './components/Fibbrick';
import Youtube from './components/Youtube';
import Login from './components/Login';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentActivity: 'Login'
    }


    this.socket = io.connect('localhost:5000');
  }

  componentDidMount() {
    this.socket.on("change-activity", (game) => {
      console.log(`Recieved request to change to ${game}`)
      this.setState(prevState => {
        return {currentActivity: game}
      })
    })
  }


  render() {
    let currentComponent = null;
    switch(this.state.currentActivity) {
      case "Login":
        currentComponent = <Login socket={this.socket}/>
        break;
      case "Menu":
        console.log("Switching to Menu")
        currentComponent = <Menu socket={this.socket}/>;
        break;
      case "Fibbrick":
        console.log("Switching to Fibbrick")
        currentComponent = <Fibbrick socket={this.socket}/>;
        break;
      case "Youtube":
        console.log("Switching to Youtube")
        currentComponent = <Youtube socket={this.socket}/>;
        break;
      default:
        currentComponent = Menu;
    } 

    return (
      <div>
        {currentComponent}
      </div>

    );
  }
}

export default App;
