// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const alertMaker = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a1424';
      alertMaker("Dark mode enabled!","Success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      alertMaker("Light mode enabled!","Success");
    }
  }
  // <About />

  return (
    <>
      <Navbar title="Text Stats" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm label="Enter Text to Analyze" alertMaker={alertMaker} mode={mode}/>
      </div>
      <Alert alert={alert}/>
    </>
  );
}

export default App;
