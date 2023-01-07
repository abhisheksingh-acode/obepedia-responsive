
import './job.css';
// import facult1 from '../../images/faculty1.png';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { vacancydata } from '../../data';
import { BsBookmark } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TbTie } from "react-icons/tb";
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import {useEffect } from 'react';
import axios from "axios";
import { Navigate, NavLink } from 'react-router-dom';


const Job = (props) => {


      //for popup
  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [toggleTwoModal, setToggleTwoModal] = useState(false);



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
        dots: false,
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
      console.log("job______",response.data);
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
            <div className="job-slider">
                <Slider {...settings}>
                    {Data.vacancy.map((val, key) => {
                        return (
                            <div className="slide-main" key={key}>
                                <div className="job-card">
                                <div className="top d-flex">
                                    <h6>{val.name[0]}</h6>
                                    <p><BsBookmark />
                                        <AiOutlineShareAlt /></p>
                                </div>
                                <h5>{val.name}</h5>
                                <div className="center d-flex">
                                    <p><GoLocation /> {val.location}</p>
                                    <p><TbTie /> Full Time</p>
                                </div>
                                <p>{val.about.slice(0,50)}</p>
                        {/*<button onClick={() => setToggleOneModal(!toggleOneModal)}>Details</button>*/}
                                
                        <button><NavLink to={`/vacancy-detail/${val._id}`}>Details </NavLink></button>
                            </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>




              {/* Job Vacancy popup start*/}
      <MDBModal show={toggleOneModal} setShow={setToggleOneModal} tabIndex='-1' className='job-popup'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='ps-3'>Job Vacancy</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setToggleOneModal(!toggleOneModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h5>Graphic Designer</h5>
              <h6>Details</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
              <h6>Role & Responsibility</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
              <h6>Perks & Other Details</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>

              <MDBBtn
                onClick={() => {
                  setToggleOneModal(!toggleOneModal);
                  setTimeout(() => {
                    setToggleTwoModal(!toggleTwoModal);
                  }, 400);
                }}
              >
                Apply Job
              </MDBBtn>
            </MDBModalBody>


          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


      {/* Quick Apply popup start */}
      <MDBModal show={toggleTwoModal} setShow={setToggleTwoModal} tabIndex='-1' className='apply-popup'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Quick Apply</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setToggleTwoModal(!toggleTwoModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Form>
                <Form.Group className="mb-3" controlId="FormInput">
                  <Form.Control
                    type="text"
                    placeholder="Full name"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormInput">
                  <Form.Control
                    type="email"
                    placeholder="Email ID"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormInput">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormInput">
                  <Form.Control
                    type="text"
                    placeholder="Resume"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormInput">
                  <Form.Control
                    type="text"
                    placeholder="Post what you applying for ?"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormTextarea">
                  <Form.Control as="textarea" rows={4}
                    placeholder="Send Message"
                  />
                </Form.Group>
              </Form>
              
              <MDBBtn
                // onClick={() => {
                //   setToggleTwoModal(!toggleTwoModal);
                //   setTimeout(() => {
                //     setToggleOneModal(!toggleOneModal);
                //   }, 400);
                // }}
              >
               Apply Job
              </MDBBtn>
            </MDBModalBody>
            
            
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

        </>


    )
}

export default Job