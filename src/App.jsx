import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Inscricao from './components/inscricao';
import Galeria from './components/galeria';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { configureAnchors } from 'react-scrollable-anchor'
import './App.scss';

configureAnchors({offset: -90, scrollDuration: 200});
const ModalInscricao = React.createContext();

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalInscricao: {
        isOpened: false,
        closeModal: () => {
          let modalInscricao = this.state.modalInscricao;
          modalInscricao.isOpened = false;          
          this.setState({ modalInscricao })
        },
        openModal: () => {
          let modalInscricao = this.state.modalInscricao;
          modalInscricao.isOpened = true;        
          this.setState({ modalInscricao })
        }
      }
    }
  }
  render() {
    return (
      <Router>
        <ModalInscricao.Provider value={this.state.modalInscricao}>
          <div className="App">        
            <Header/>
            <Route exact path="/" component={Main}/> 
            <Route exact path="/inscricao" component={Inscricao}/>  
            <Route exact path="/galeria/:success?/:id?" component={Galeria}/>        
            <Footer/>
          </div>
        </ModalInscricao.Provider>
      </Router>
    );
  }
}

export default App;
export { ModalInscricao };
