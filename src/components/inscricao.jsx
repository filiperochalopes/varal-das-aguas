import React, {Component} from 'react';
import Cover from './cover';

class Inscricao extends Component {

  constructor(props){
    super(props);

    this.state = {
      canSend: false
    }

    this.submitBt = React.createRef();

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
        window.location.href = "/#/galeria/success/" + data.registro_id;
      }
    }); 
  }

  canSend = (e) => {
    this.setState({canSend:e.target.checked}, () => {
      this.submitBt.current.disabled = this.state.canSend ? false : true
    })
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
              <section>
              <form encType="multipart/form-data" method="POST" onSubmit={this.sendPhoto}>
                <label htmlFor="nome">Nome do colaborador</label>
                <input type="text" name="nome" id="nome" placeholder="Insira o seu nome" required />
                <label htmlFor="nome-foto">Nome da Foto</label>
                <input type="text" name="nome-foto" id="nome-foto" placeholder="Insira o nome da foto" required/>
                <label htmlFor="nome-foto">Local da Foto</label>
                <input type="text" name="local-foto" id="local-foto" placeholder="insira o local da foto" required/>
                <label htmlFor="nome-foto">Data de registro da foto</label>
                <input type="date" name="data-foto" id="data-foto" required/>
                <label htmlFor="foto" className="file">Clique aqui para escolher sua foto</label>
                <input type="file" name="foto" id="foto" required/>
                <label>Termos de participação</label>
                <div id="termos">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat eget nunc ullamcorper elementum ut non lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nec varius massa. Morbi condimentum pulvinar neque, a gravida odio tincidunt volutpat. Curabitur sit amet quam lorem. Vivamus mollis mi vitae ex tincidunt tincidunt. Nullam fermentum mauris quis consequat dignissim.</p>

                <p>Donec nisl massa, facilisis a leo a, dapibus volutpat ipsum. Nulla interdum augue nec facilisis blandit. Pellentesque rhoncus congue ex sit amet accumsan. Sed accumsan blandit justo, eu placerat odio consequat vel. Duis accumsan eget est quis gravida. Nullam tempus mollis sem at accumsan. Quisque aliquam finibus erat eu pellentesque. Vestibulum nec est massa. Nulla facilisi. Aliquam nec laoreet massa. Nam erat urna, posuere a elementum eget, dictum eu magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin interdum tellus nulla, ut dictum dolor consectetur vel.</p>

                <p>Sed nunc augue, luctus a tristique vel, venenatis ut dolor. Praesent consequat malesuada consequat. Cras blandit massa finibus, porta erat vel, bibendum magna. Integer luctus eros eu ante vehicula, quis cursus odio venenatis. Nulla ligula sem, molestie sit amet orci in, finibus tristique sapien. Quisque tempor enim nunc. Maecenas ut ultrices magna. Curabitur vestibulum, dui sed lacinia blandit, nisi sem pharetra augue, sit amet interdum metus tortor in dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida justo velit, facilisis scelerisque arcu aliquet sed. Duis efficitur libero mi, non tincidunt ligula dignissim ac. Vestibulum non neque interdum, faucibus turpis sit amet, elementum ipsum. Integer scelerisque dictum rutrum.</p>
                </div><br/>
                <input type="checkbox" onChange={this.canSend}/> <strong>Li e concordo com os termos de participação</strong><br/><br/>
                <button ref={this.submitBt} type="submit" disabled>Enviar</button>
              </form>
              </section>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Inscricao;