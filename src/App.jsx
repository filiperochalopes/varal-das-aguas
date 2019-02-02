import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Inscricao from './components/inscricao';
import Galeria from './components/galeria';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { configureAnchors } from 'react-scrollable-anchor'
import './App.scss';

configureAnchors({offset: -90, scrollDuration: 200})

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">        
        <Header/>
        <Route exact path="/" component={Main}/> 
        <Route exact path="/inscricao" component={Inscricao}/>  
        <Route exact path="/galeria/:success?/:id?" component={Galeria}/>        
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
