import React from 'react';
import './detail.css';
import logo from '../../images/white-logo.png';
import Navbar from '../../components/navbar/Navbar';
import img from '../../images/banner6.png';
import Rightside from '../../components/rightside/Rightside';
import Banner from '../../components/banner/Banner';
import image from '../../images/banner7.png';
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';

import Footer from '../../components/footer/Footer';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

import axios from "axios";
import { useParams } from 'react-router-dom';


const Detail = () => {
  const { id } = useParams();

  const [Data, setData] = useState(null)
  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [toggleTwoModal, setToggleTwoModal] = useState(false);

  async function fetchData() {
    try {
      const response = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/vacancy/getvacancy/${id}`)
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
      <div className="upsc-background">
        <Navbar logoimg={logo} />
      </div>

      {Data.map(item => (
        <div className="detail-page">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              <div className="leftside">
                <div className="profile">
                  <Banner bannerimg={item.company_banner} />
                  <img src={logo} alt="logo" className='logo' />
                </div>
                <div class="heading d-flex">
                  <div class="left">
                    <h4>{item.name}</h4>
                    <p>{item.company}</p>
                    <span><i class="fa-solid fa-location-dot"></i> {item.location}</span>
                    <span className='green'>2 Days Ago</span>
                  </div>
                  <div class="right">
                    <h6><i class="fa-regular fa-bookmark"></i><i class="fa-solid fa-share-nodes"></i></h6>
                    <button onClick={() => {
                      setToggleOneModal(!toggleOneModal);
                      setTimeout(() => {
                        setToggleTwoModal(!toggleTwoModal);
                      }, 400);
                    }}>Apply</button>
                  </div>
                </div>
                <h5>About the Job</h5>
                <p>{item.about_job} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga aspernatur ex a minus perferendis in, libero eius fugiat. Perspiciatis quasi laboriosam porro.</p>
                <h5>Responsilibites</h5>
                <p>{item.responsibilities} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga aspernatur ex a minus perferendis in, libero eius fugiat. Perspiciatis quasi laboriosam porro.</p>
                <h5>Skills :-</h5>
                <p>{item.skills} HTML, CSS, PHOTOSHOP</p>
                <div className="about">
                  <h5>About Company</h5>
                  <img src={item.company_banner} alt="img" className='w-100' height="200px" />
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga aspernatur ex a minus perferendis in, libero eius fugiat. Perspiciatis quasi laboriosam porro, quia asperiores tempora distinctio? Accusantium ea magni laboriosam perspiciatis, vitae itaque suscipit architecto facere non error numquam impedit rem fuga praesentium quo magnam nisi adipisci illo nemo! Facilis?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <div className="rigthside">
                <Rightside />
              </div>
            </div>
          </div>
        </div>
      ))}

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
               onClick={() => {
                 setToggleTwoModal(!toggleTwoModal);
                 setTimeout(() => {
                   setToggleOneModal(!toggleOneModal);
                 }, 400);
               }}
             >
              Apply Job
             </MDBBtn>
           </MDBModalBody>
           
           
         </MDBModalContent>
       </MDBModalDialog>
     </MDBModal>

      <Footer />
    </>
  )
}



export default Detail