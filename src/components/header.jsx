import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ModalInscricao } from '../App';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ulClass: "desktop",
      isOpened: false,
      menuStyle: {
        display: "none"
      },
      modalIsOpened: true
    }
    
  }

  //Ao montar o componente verifica se o usuário está usando desktop ou dispositivo móvel
  componentDidMount() {
    if(window.innerWidth < 767.98){
      this.setState({
        ulClass: "mobile"
      }, () => console.log(this.state.ulClass))      
    }
  }

  //Função que verifica se o menu está visível ou não
  toggleMenu = () => {
    let bol = this.state.isOpened ? false : true
      this.setState({
        isOpened: bol
      }, this.changeStyle())
  }

  //Função que alterna o menu mobile em visível ou não
  changeStyle = () => {
    let display = this.state.isOpened ? "none" : "block"
    this.setState({
      menuStyle: {
        display: display
      }
    })
  }

  //Função para abrir modal de inscrição
  openModal = () => {
    this.setState({ modalIsOpened: true });
    this.toggleMenu()
  }

  //Função para fechar modal de inscrição
  closeModal = () => {
    this.setState({ modalIsOpened: false });
  }

  render() {
    return (
      <ModalInscricao.Consumer>
        {(context) => (
        <header>      
          <div className="container">
            <button className={this.state.ulClass} onClick={this.toggleMenu}><img src="/img/bars-solid.svg"/></button>
            <img className={this.state.ulClass} src="/img/purelogo.png"/>
            <ul className={this.state.ulClass} style={this.state.menuStyle}>
              <a href='/#inicio' onClick={this.toggleMenu}><li>INÍCIO</li></a>
              <a href='/#concurso' onClick={this.toggleMenu}><li>O CONCURSO</li></a>
              <a href='/#sobre' onClick={this.toggleMenu}><li>SOBRE</li></a>
              <a href='/#regras' onClick={this.toggleMenu}><li>REGRAS</li></a>
              <span className="a_like" onClick={context.openModal}><li>INSCRIÇÃO</li></span>
            </ul>
          </div>
        </header>
        )}
      </ModalInscricao.Consumer>
    );
  }
}

export default Header;