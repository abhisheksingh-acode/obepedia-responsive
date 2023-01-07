

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../../components/card/Card';
import image from '../../images/institute.png';
import './cslider.css';


const Cslider = () => {

    function AiOutlineArrowLeft(props) {
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
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        loop: true,
        margin: 10,
        nextArrow: <AiOutlineArrowLeft />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2,
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
                    slidesToShow: 1,
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





    return (

        <>

            <div className='slide-main'>

                <Slider {...settings}>
                    <div className="backgro">
                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <Card cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                            <Card cardimg={image} title='Vajirao & Reddy Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                        </div>
                        <span>vs</span>
                        <h6 className="mt-4 mt-sm-0">Compare Aakash Institute Vs Vajirao & Reddy Institute</h6>
                        <button>Compare</button>
                    </div>
                    <div className="backgro">
                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <Card cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                            <Card cardimg={image} title='Vajirao & Reddy Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                        </div>
                        <span>vs</span>
                        <h6 className="mt-4 mt-sm-0">Compare Aakash Institute Vs Vajirao & Reddy Institute</h6>
                        <button>Compare</button>
                    </div>
                    <div className="backgro">
                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <Card cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                            <Card cardimg={image} title='Vajirao & Reddy Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                        </div>
                        <span>vs</span>
                        <h6 className="mt-4 mt-sm-0">Compare Aakash Institute Vs Vajirao & Reddy Institute</h6>
                        <button>Compare</button>
                    </div>
                    <div className="backgro">
                        <div className="d-flex flex-column flex-sm-row gap-3">
                            <Card cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                            <Card cardimg={image} title='Vajirao & Reddy Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                        </div>
                        <span>vs</span>
                        <h6 className="mt-4 mt-sm-0">Compare Aakash Institute Vs Vajirao & Reddy Institute</h6>
                        <button>Compare</button>
                    </div>
                </Slider>
            </div>

        </>

    )


}

export default Cslider



