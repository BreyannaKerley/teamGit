import React, {useState} from 'react'

import logo from './logo.svg';
import './App.css';
import Header from './components/site/Header';
import Card from './components/site/Card';
import Home from'./components/site/Home';
import Footer from './components/site/Footer';

function App() {

    let nasaKey = 'ihsCPXbr1PJhfBa0E1LxYPm8JTPO47MHYnJIPZoL'

  return (
    <div className="App">
      <header className="App-header">
      <Header nasaKey={nasaKey} />
      <Card />
      <Home />
      <Footer />
      </header>
    
    </div>
  );
}

export default App;
