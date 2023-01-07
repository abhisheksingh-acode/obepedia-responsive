import React from 'react';
import './card.css';
import { GoLocation } from "react-icons/go";

const Card = (props) => {

    return (

        <>

            <div className="card-item">
                <img src={props.cardimg} alt='img' />
                <h4>{props.title}</h4>
                <p>{props.paragraph}</p>
                <p><GoLocation /> {props.location}</p>
                <button>{props.btn}</button>
            </div>
        </>

    )
}

export default Card