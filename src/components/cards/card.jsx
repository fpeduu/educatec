import React, { useState } from "react"
import PopUp from './popUp/popUp';

const Card = (props) => {
    const [popUp, setPopUp] = useState(false);

    let subjectsList = []
    for (let subject in props.subjects) {
        if (!(subject > 4)) {
            subjectsList.push(<span>{props.subjects[subject]}</span>)
        } else if (subject == 5) {
            subjectsList.push(<span>...</span>)
        }
    }

    let link = props.link == null ? props.about : props.link

    return (
        <div>
            <div className='card'>
                    <div className='cardImage'>
                        <img src={props.cover} alt={props.name} />
                    </div>

                    <div className='cardDetails'>
                        <strong>{props.name}</strong>
                        
                        <p className='type'>Categoria: <span>{props.type}</span></p>

                        <p className='cardKeywords'>Palavras-chave: {subjectsList}</p>

                        <p>Autor&#40;es&#x29;: {props.author}</p>

                        <p><a className='cardAboutButton' onClick={() => setPopUp(true)}>Saiba mais</a></p>

                    </div>
                </div>

            <PopUp subjects={props.subjects} name={props.name} description={props.description} type={props.type} link={link} trigger={popUp} setTrigger={setPopUp} /> 
        </div>
        
    )
}

export default Card;