import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Input from '../Input/Input';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Input />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
