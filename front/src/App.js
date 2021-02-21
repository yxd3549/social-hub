import './App.css';
import io from "socket.io-client";
import React from 'react';

import Menu from './components/Menu';
import Fibbrick from './components/Fibbrick';
import Youtube from './components/Youtube';
import Login from './components/Login';

import { reducer as voxeetReducer } from "@voxeet/react-components"
import thunkMidleware from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux"
import { ConferenceRoom, VoxeetProvider } from "@voxeet/react-components"
import "@voxeet/react-components/dist/voxeet-react-components.css"

const settings = {
  consumerKey: 'QCcMg9I76NPfCgls2CPY4A==',
  consumerSecret: '68ygdCLzwcGBla7QF9-bs3h2nHmOobUCkE9L58ngMHA=',
  conferenceAlias: 'RoomName'
}

const reducers = combineReducers({
  voxeet: voxeetReducer,
})

const configureStore = () =>
  createStore(reducers, applyMiddleware(thunkMidleware))

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

    let sidebar = <div></div>;
    if (this.state.currentActivity != "Login") {
      sidebar = 
        <div>  
          <VoxeetProvider store={configureStore()}>
            <ConferenceRoom
              autoJoin
              consumerKey={settings.consumerKey}
              consumerSecret={settings.consumerSecret}
              conferenceAlias={settings.conferenceAlias}
            />
          </VoxeetProvider>
        </div>;
    }

    return (
      <div>
        {currentComponent}
        {sidebar}
      </div>
    );
  }
}

export default App;
