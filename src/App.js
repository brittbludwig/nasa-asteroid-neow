import React, { Component } from 'react';
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import Background from './components/ui/background'
import StarChart from './components/main/chart/chart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Background />
        <StarChart />
        <Footer />
      </div>
    );
  }
}

export default App;
