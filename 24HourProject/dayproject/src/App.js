import React, {useState} from 'react'
import './App.css';
import Header from './components/site/Header';
import Card from './components/site/Card';
import Footer from './components/site/Footer';
import Home from './components/site/Home';

function App() {

    const owKey = '2c20c5997d2766992b1ad90d53583e5a';

  return (
    <div className="App">
      <header className="App-header">
      <Header owKey={owKey} />
      <br />
      <Card />
      <Home />
      <Footer />
      </header>
    </div>
  );
}

export default App;
