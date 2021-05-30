import React, { useState } from 'react'
import './App.css'

import Header from "./components/Header";
import Background from "./components/Background";
import Main from "./components/Main"



function App() {

  return (
  <div className="App">
    <Header/>
    
    <Background/>
    <Main/>
  </div>
    
  ) 
}




export default App
