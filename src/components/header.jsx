import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ulClass: "desktop",
      isOpened: false,
      menuStyle: {
        display: "none"
      }
    }
    
  }

  componentDidMount() {
    if(window.innerWidth < 767.98){
      this.setState({
        ulClass: "mobile"
      }, () => console.log(this.state.ulClass))      
    }
  }

  toggleMenu = () => {
    let bol = this.state.isOpened ? false : true
      this.setState({
        isOpened: bol
      }, this.changeStyle())
  }

  changeStyle = () => {
    let display = this.state.isOpened ? "none" : "block"
    this.setState({
      menuStyle: {
        display: display
      }
    })
  }

  render() {
    return (
      <header>
        <div className="container">
          <button className={this.state.ulClass} onClick={this.toggleMenu}><img src="/img/bars-solid.svg"/></button>
          <img className={this.state.ulClass} src="/img/purelogo.png"/>
          <ul className={this.state.ulClass} style={this.state.menuStyle}>
            <Link smooth to='/#inicio' onClick={this.toggleMenu}><li>INÍCIO</li></Link>
            <Link smooth to='/#concurso' onClick={this.toggleMenu}><li>O CONCURSO</li></Link>
            <Link smooth to='/#sobre' onClick={this.toggleMenu}><li>SOBRE</li></Link>
            <Link smooth to='/#regras' onClick={this.toggleMenu}><li>REGRAS</li></Link>
            <Link smooth to="/inscricao" onClick={this.toggleMenu}><li>INSCRIÇÃO</li></Link>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;