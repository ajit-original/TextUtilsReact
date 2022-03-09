//Importing Modules and Comopnents
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Texform from './components/TextForm';
import Alert from './components/Alert';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  //useState Hooks
  // const [mode, setMode] = useState('light');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); 

  //showAlert Function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000); 
  }

  //toggleMode Function
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#11283c'
      showAlert('Dark Mode has been enabled', 'success')
      document.title = "Textutils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', 'success')
      document.title = "Textutils - Light Mode"
    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextPlay" firstOption='Home' secondOption='About' thirdOption='Contact' mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar /> *default Props values */}
        <Alert alert={alert}/>

        <div className="container my-3" >
          <Routes>

            <Route exact path="/about" element={<About />}/>

            <Route exact path="/home" element={<Texform heading="Enter Your Text" mode={mode} showAlert={showAlert}/>}/>
            
            <Route exact path="/contact" element={<Contact />}/>
              
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
