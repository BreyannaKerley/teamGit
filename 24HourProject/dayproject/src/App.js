import React, {useState} from 'react'
import './App.css';
import Header from './components/site/Header';
import Home from'./components/site/Home';
import Footer from './components/site/Footer';

function App() {

    const owKey = '2c20c5997d2766992b1ad90d53583e5a';

  return (
    <div className="App">
      <header className="App-header">
      <h1>Weather</h1>
      <Header owKey={owKey} />
      <br />
      <Home />
      <Footer />
      </header>
    
    </div>
  );
}

export default App;
