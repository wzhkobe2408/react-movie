import React, { Component } from 'react';
import Header from './components/Header'
import SearchField from './components/SearchField'
import Footer from './components/Footer'
import Home from './page/Home'
import Detail from './page/Detail'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <SearchField />
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={Detail} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
