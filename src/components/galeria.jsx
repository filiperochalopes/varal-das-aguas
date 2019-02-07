import React, { Component } from 'react';
import Cover from './cover';
import GaleriaItem from './galeria_item';
import Lightbox from 'react-images';

const server = "https://arquivos.filipelopes.me/varal-das-aguas/api/uploads";

class Galeria extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sucess: this.props.match.params.success,
      id: this.props.match.params.id,
      galeria: [
        {}
      ],
      minha_foto: null,
      lightBox: {
        src: null,
        isOpened: false
      }
    }

    console.log(this.state.sucess, this.state.id, this.state.galeria);
  }

  //caso exista minha_foto, adiciona no render a imagem commensagem de insricao com sucesso
  loadSuccess = () => {
    if(this.state.minha_foto){
      return (
        <div>
          <span className="success">SUA IMAGEM FOI CADASTRADA COM SUCESSO!</span>
          <GaleriaItem 
          key="minha_foto" 
          className="minha_foto" 
          server={server}
          item={this.state.minha_foto}
          handler={this.openLightBox} />
        </div>
      )
    }
  }

  //verifica se existe nos parametros do Router uma id, o que significa que acabou de ser inscrito, caso sim, cadastra o objeto da foto que acabou de ser inscrita como minha_foto
  get_minhaFoto = () => {
    if (this.state.id) {
      this.state.galeria.map(item => {
        if (item.id === this.state.id) {
        this.setState({ minha_foto: item }, () => this.loadSuccess) }
      })
    }
  }

  //Comunicação GET com API da galeria - pegar imagens
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

  //Abre imagem maior ao clicar em uma delas
  openLightBox = (e) => {
    this.setState({
      lightBox: {
        src: e.target.src,
        isOpened: true
      }
    })
  }

  //Fecha caixa de imagem
  closeLightbox = () => {
    this.setState({
      lightBox: {
        isOpened: false
      }
    })
  }

  render() {

    return (
      <div className="page" onLoad={this.getPortfolio}>
        <Cover />
        <Lightbox
          images={[{ src: this.state.lightBox.src }]}
          backdropClosesModal={true}
          isOpen={this.state.lightBox.isOpened}
          onClose={this.closeLightbox}
        />
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
                <GaleriaItem 
                key={i} 
                item={item}
                server={server}
                handler={this.openLightBox} />
              ))}
              </section>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Galeria;