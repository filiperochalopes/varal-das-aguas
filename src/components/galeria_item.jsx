import React from 'react';

const server = "https://arquivos.filipelopes.me/varal-das-aguas/api/uploads";

const GaleriaItem = (props) => {
    return (
        <div className={props.className}>
            <img src={server + "/" + props.item.url_foto} alt={props.item.nome_foto} />
            <span className="nome_foto"><strong>{props.item.nome_foto}</strong> por </span>
            <span className="nome">{props.item.nome}</span><br/>
            <span className="data_foto">{props.item.data_foto} |</span>
            <span className="local_foto">{props.item.local_foto}</span>
        </div>
    )
}

export default GaleriaItem;