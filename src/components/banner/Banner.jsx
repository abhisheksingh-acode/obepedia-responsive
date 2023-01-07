import React from 'react';
import './banner.css';
// import homebanner from '../../images/banner3.png';

const Banner = (props) => {
    return (

        <>
            <div className="home-banner">
                <h4>{props.title} </h4>
                <img src={props.bannerimg} alt="homebanner" />
            </div>
        </>
    )
}

export default Banner