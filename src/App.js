import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import Background from './components/ui/background'
import StarChart from './components/main/chart/chart'
import DataTable from './components/main/data-table/data-table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Background />
        <Switch>
            <Route exact={true} path='/' component={StarChart}/>
            <Route path='/data-table' component={DataTable}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
