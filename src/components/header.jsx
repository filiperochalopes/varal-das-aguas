import React from 'react';
import { BrowserRouter as  Router, Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <button>Menu</button>
                <ul>
                    <a href='#inicio'><li>INÍCIO</li></a>
                    <a href='#concurso'><li>O CONCURSO</li></a>
                    <a href='#sobre'><li>SOBRE</li></a>
                    <a href='#regras'><li>REGRAS</li></a>
                    <Link to="/inscricao"><li>INSCRIÇÃO</li></Link>
                </ul>
            </div>
        </header>
    );
}

export default Header;