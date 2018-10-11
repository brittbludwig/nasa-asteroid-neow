import React, { Component } from 'react';
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import Background from './components/ui/background'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Background />
         
        <Footer />
      </div>
    );
  }
}

export default App;
