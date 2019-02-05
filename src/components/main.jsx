import React from 'react';
import Cover from './cover';
import { BrowserRouter as  Router, Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="page">
    <Cover/>
    <main>
      <div className="container">
        <div>
        <a id="concurso"></a>
          <section className="w-50 pb-5">
            <h2>O CONCURSO</h2>
            <p>
            O Concurso de fotografia para todos os técnicos do Inema para exposição de fotos que retratem a temática água (os desafios e as belezas encontradas em campo) pelos colaboradores. Além de uma apresentação cultural com um artista de rua (poesia, musica, cordel) que aborde a temática água.
            </p>
          </section>
          
          <div className="box_inscricao">
            <div className="bg-blue">
              <h3>EXPOSIÇÃO DE FOTOS</h3>
              <p>20 à 24/03/2017 na divisória da Ouvidoria (em frente ao elevador)</p>
            </div>
            <div className="bg-blue">
              <h3>APRESENTAÇÃO</h3>
              <p>20/03/2017 das 16:30h às 17:30h</p>
            </div>
            <Link to="/inscricao"><button>FAÇA SUA INSCRIÇÃO</button></Link>
          </div>
          <hr></hr>
          <a id="sobre"></a>
          <section>
            <h2>SOBRE</h2>
            <p>Objetivos</p>
            <p>Promover a seleção de 100 fotografias produzidas por colaboradores do Inema em comemoração ao dia da água, que será elaborado um mural de fotos denominado de “Varal das Águas".</p>
            <p>Dos participante</p>
            <p>Poderão participar do Concurso Fotográfico 2017: Todos os colaboradores do Instituto do Meio Ambiente e Recursos Hídricos - INEMA e Secretaria do Meio Ambiente -SEMA.</p>
            <p>Das especificações das fotografias participantes</p>
            <p>As fotografias devem abordar somente o tema OS DESAFIOS E AS BELEZAS RETRATADAS EM CAMPO REFERENTE À SITUAÇAO HÍDRICA, devendo ser obrigatoriamente a foto ser tirada em inspeção em campo a serviço do Inema.</p>
            <p>Premiação final do concurso</p>
            <p>As 05 (cinco) primeiras fotografia que for mais votada nas redes sociais (Facebook e Instagram) do Inema, receberá como prêmio.
            </p>
          </section>
          
          <a id="regras"></a>
          <section>
            <h2>REGRAS</h2>
            <p>
            Todas as fotos que retrate da temática água (tais como situação de secas ou excedentes hídricos, as belezas e os desafios de se trabalhar com os recursos hídricos etc.) serão bem vindas.
            </p>
            <ul>
              <li>As fotos devem ser originais e sem alterações.</li>
              <li>As fotos devem expor os ambientes visitados em inspeções técnicas realizadas durante inspeções pelo INEMA.</li>
              <li>Fotografias que incluam pessoas serão desclassificadas.</li>
              <li>As fotografias do concurso se tornarão publicas.</li>
              <li>O fotógrafo da foto que receber mais votos ganhará um prêmio simbólico.</li>
              <li>Cada pessoa só poderá cadastrar uma única foto.</li>
              <li>A votação será por meio das redes sociais do INEMA.</li>
              <li>A votação será por meio das redes sociais do INEMA.</li>
              <li>As vagas serão limitadas apenas 50.</li>
            </ul>
            <p>A foto vencedora irá ganhar um kit de brinde (Agenda, caneta, livro).</p>
          </section>
          
        </div>
      </div>
    </main>
    </div>
  )
}

export default Main;