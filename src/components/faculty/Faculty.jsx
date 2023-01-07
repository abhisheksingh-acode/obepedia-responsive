
import './faculty.css';
import facult1 from '../../images/faculty1.png';
// import { Facultdata } from './slidedata';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Facultdata } from '../../data';
import { useState, useEffect } from 'react';
import axios from "axios";


const Faculty = (props) => {



    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#05A474" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#05A474" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        // dots: true,
        infinite: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        loop: true,
        margin: 10,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                    speed: 300,
                    loop: true,
                    margin: 10,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                    speed: 300,
                    loop: true,
                    margin: 10,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };





    const [Data, setData] = useState(null)

    async function fetchData() {
        try {
            const response = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/institute/getinstitute/${props.id}`)
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return Data !== null && (

        <>

            <div className='slide-main'>

                <Slider {...settings}>
                    {Data.faculty.map((val, key) => (
                        <div className="main-con" key={key}>
                            <div className="cards">
                                <div className="image d-flex">
                                    <img src={facult1} alt={facult1} />
                                    <h5>{val.name}</h5>
                                </div>
                                <p>{val.description}</p>
                                <hr />
                                <h6>Professor, {val.subject}</h6>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </>

    )


}

export default Faculty