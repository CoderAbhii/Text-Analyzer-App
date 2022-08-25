import './App.css';
import Header from './Components/Header';
import Textform from './Components/Textform';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import ConverLang from './Components/ConverLang';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
    <Router>
    <Header title="TexT - AnalyzeR App" about="Learn About App" convertLangText="Convert Text Into Hindi"/>
    <Alert alert={alert}/>
       <Routes>
       <Route exact path="/" element={<Textform heading="Enter Your Text For Analyze" showAlert={showAlert}/>} />
       <Route exact path="/covertLangText" element={<ConverLang/>} />
       <Route exact path="/learnmore" element={<About/>} />
       </Routes>
    </Router>
    </>
  );
}

export default App;