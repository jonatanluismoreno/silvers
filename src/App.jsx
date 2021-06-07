import React, { useState } from 'react'
import './App.css'
/* ;
import Background from "./components/Background";
import Main from "./components/Main"

<div className="App"></div>
*/
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header"
import Mainpage from './pages/Main';
import Discord from './pages/Discord';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" ><Mainpage/></Route>
        <Route path="/discord"><Discord/></Route>
      </Switch>
    </Router>
  ) 
}

export default App
