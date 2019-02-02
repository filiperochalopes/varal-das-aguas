import React, { Component } from 'react';
import Cover from './cover';
import GaleriaItem from './galeria_item';

class Inscricao extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sucess: this.props.match.params.success,
      id: this.props.match.params.id,
      galeria: [
        {}
      ],
      minha_foto: null
    }

    console.log(this.state.sucess, this.state.id, this.state.galeria);
  }

  loadSuccess = () => {
    if(this.state.minha_foto){
      return (
        <div>
          <span className="success">SUA IMAGEM FOI CADASTRADA COM SUCESSO!</span>
          <GaleriaItem key="minha_foto" className="minha_foto" item={this.state.minha_foto} />
        </div>
      )
    }
  }

  get_minhaFoto = () => {
    if (this.state.id) {
      this.state.galeria.map(item => {
        if (item.id === this.state.id) {
        this.setState({ minha_foto: item }, () => this.loadSuccess) }
      })
    }
  }

  getPortfolio = () => {
    fetch('https://arquivos.filipelopes.me/varal-das-aguas/api/galeria.php')
      .then(function (response) {
        return response.text();
      }).then((galeria) => {
        galeria = JSON.parse(galeria);
        console.log(galeria);

        this.setState({ galeria }, this.get_minhaFoto)
      })
  }

  render() {

    return (
      <div className="page" onLoad={this.getPortfolio}>
        <Cover />
        <main>
          <div className="container full">
            <div>
              <section>
                {this.state.minha_foto 
                  ? this.loadSuccess()
                  : ""
                }
                <h2>GALERIA</h2>
              </section>
              <section id="galeria" className="flex">{this.state.galeria.map((item, i) => (
                <GaleriaItem key={i} item={item} />
              ))}
              </section>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Inscricao;