import React, {Component} from 'react';
import Cover from './cover';

class Inscricao extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [ {
        name: "Carregando...",
        slug: "carregando",
        description: "carregando...",
        items: [
          { type : "cover", url: "carregando.jpg"}
        ],
        categories: [ "carregando..." ],
        tags: [ "carregando..." ]
      }],
      atual: {
        items: []
      },
      pixel: 0,
      backgroundColor: "#252525",
      currentIndex: 0
    }

  }

  sendPhoto = e => {
    e.preventDefault();
    console.log(e.target);
    const data = new FormData(e.target);

    fetch('https://arquivos.filipelopes.me/varal-das-aguas/api/galeria.php', {
      method: 'POST',
      body: data,
    }).then(function(response) {
      return response.text();
    }).then((data) => {     
      data = JSON.parse(data);
      console.log(data);
      if(data.registro_id){
        window.location.href = "galeria/success/" + data.registro_id;
      }
    }); 
  }

  render () {
    return (
      <div className="page">
        <Cover />
        <main>
          <div className="container">
            <div>
              <section>
              <h2>INSCRIÇÃO</h2>
              <p>Inscreva sua foto preenchendo o formulário abaixo. Lembramos que apenas poderá ser inscrita uma foto por pessoa. Boa Sorte!</p>
              </section>
              <form encType="multipart/form-data" method="POST" onSubmit={this.sendPhoto}>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" required />
                <label htmlFor="nome-foto">Nome da Foto</label>
                <input type="text" name="nome-foto" id="nome-foto" required/>
                <label htmlFor="nome-foto">Local da Foto</label>
                <input type="text" name="local-foto" id="local-foto" required/>
                <label htmlFor="nome-foto">Data de registro da foto</label>
                <input type="date" name="data-foto" id="data-foto" required/>
                <label htmlFor="foto" className="file">Clique aqui para escolher sua foto</label>
                <input type="file" name="foto" id="foto" required/>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Inscricao;