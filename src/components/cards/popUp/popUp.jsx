import React from "react";

const PopUp = (props) => {

    let subjectsList = []
    for (let subject in props.subjects) subjectsList.push(<span>{props.subjects[subject]}</span>)

    return props.trigger ? (
        <div className="popupContainer">
            <div className='popup'>
                <p><strong>{props.name}</strong></p>
                <p className='popupDescription'><strong>Descrição: </strong>{props.description}</p>
                <a href={props.link} className='cardAccessLink' target='_blank'>Acessar</a>

                <button className='closeBtn' onClick={() => props.setTrigger(false)}>Voltar</button>
            </div>
        </div>
    ) : (<div></div>);
}

export default PopUp;