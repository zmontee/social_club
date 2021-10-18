import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Users from "./components/Users/Users";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div class='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs />}/>
            <Route path='/profile' render={() => <Profile />}/>
            <Route path='/users' render={() => <Users />}/>
        </div>
      </div>
  )
}

export default App;
