import image from '../../images/post3.png';
import React from 'react';
import './mobgallery.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MobGallery = () => {

    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        loop: true,
        margin: 10,
        responsive: [
            
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
    };



    return (


        <>
            <div className="gallery-mob" >
                <Slider {...settings}>

                    <div className="gallery-img" >
                        <img src={image} alt='facult1' />
                    </div>
                    <div className="gallery-img" >
                        <img src={image} alt='facult1' />
                    </div>
                    <div className="gallery-img" >
                        <img src={image} alt='facult1' />
                    </div>

                </Slider>
            </div>
        </>

    )
}

export default MobGallery