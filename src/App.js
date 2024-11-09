import './App.css';
import { Alert } from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import { About } from './components/About';
import { TextForms } from './components/TextForms';
import React, { useState } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [btnText, setBtnText] = useState('Dark')
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClass = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClass()
    document.body.classList.add(`bg-${cls}`)
    // showAlert(cls+" Mode Enabled", "success")
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      setBtnText('Light')
      showAlert("Dark Mode Enabled", "success")
      // setInterval(() => {
      //   document.title = "TextUtil - Dark Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtil - Awesome Mode"
      // }, 1600);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setBtnText('Dark')
      showAlert("Light Mode Enabled", "success")
    }
  }


  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtil" aboutText="About" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route exact path="/"
            element={
              <TextForms heading="Enter the text to analyze below.." mode={mode} showAlert={showAlert} />
            } /> */}
              <TextForms heading="Enter the text to analyze below.." mode={mode} showAlert={showAlert} />
            {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Footer  mode={mode}/>
    </>
  );
}

export default App;
