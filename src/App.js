import React from 'react'
import {Footer , Header , Possibility , Blog , Features , WhatGpt} from "./containers"
import {CTA , Navbar , Brand} from "./component"
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App