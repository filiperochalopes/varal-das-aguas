import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

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
            <a href='/#inicio' onClick={this.toggleMenu}><li>INÍCIO</li></a>
            <a href='/#concurso' onClick={this.toggleMenu}><li>O CONCURSO</li></a>
            <a href='/#sobre' onClick={this.toggleMenu}><li>SOBRE</li></a>
            <a href='/#regras' onClick={this.toggleMenu}><li>REGRAS</li></a>
            <Link to="/inscricao" onClick={this.toggleMenu}><li>INSCRIÇÃO</li></Link>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;