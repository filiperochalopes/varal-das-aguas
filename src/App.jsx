import React, { Component } from 'react';
import Header from './components/header';
import Cover from './components/cover';
import Main from './components/main';
import Footer from './components/footer';
import Inscricao from './components/inscricao';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { configureAnchors } from 'react-scrollable-anchor'
import './App.scss';

configureAnchors({offset: -90, scrollDuration: 200})

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">        
        <Header/>
        <Route exact path="/" render={() => {
          return (
            <div>
              <Cover/>
              <Main/>
            </div>
          )
        }}/>        
        <Footer/>
        <Route exact path="/inscricao" component={Inscricao}/>  
      </div>
      </Router>
    );
  }
}

export default App;
