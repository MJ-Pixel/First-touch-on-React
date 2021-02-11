import React from 'react';
import Header from './Components/headerComponents/header'
import HomePage from './Components/pages/homePage'
import './test.scss';
import Data from './Components/pages/data'
import Google from './Components/google/google'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="App">

        <Header />

        <Route exact path='/' component = {HomePage} />
        <Route exact path='/Data' component = {Data} /> 
        <Route exact path='/Data' component = {Google} /> 
        {/* <Google /> */}

      </div>
    </Router>
  );
}

export default App;
