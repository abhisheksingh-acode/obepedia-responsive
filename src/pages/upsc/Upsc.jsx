import React, { useRef } from 'react';
import './upsc.css'
import Navbar from '../../components/navbar/Navbar';
import upscimg from '../../images/upsc.png';
import Rightside from '../../components/rightside/Rightside';
import Footer from '../../components/footer/Footer';
import logo from '../../images/white-logo.png';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { CgSearch } from 'react-icons/cg';
import Guide from '../../components/guide/Guide';
import { BiSearch } from "react-icons/bi";


const upsc = () => {




  return (

    <>
      <div className='upsc-background'>

        <Navbar logoimg={logo} />
        {/* <div className="home-cell">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-3">
                <div className="upsc-img">
                  <img src={upscimg} alt='upsc' />
                </div>
              </div>
              <div className="col-md-8 col-8">
                <div className="upsc text">
                  <h3>Union Public Selection Commission Exam</h3>
                  <p className='forpc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                </div>
              </div>
              <p className='formb'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>

            <div className="location-srch">
              <Form.Select aria-label="Default select example">
                <option> Delhi</option>
                <option value="1">Pune</option>
                <option value="2">Hyderabad</option>
                <option value="3">Mumbai</option>
              </Form.Select>
              <div class="search">
                <input type="text" placeholder="Upsc Institute in delhi" />
                <span>
                  <Link to='/listing'>
                    <CgSearch />
                  </Link>
                </span>
              </div>
            </div>

          </div>
        </div>
      upsc-background end */}

      </div>

      {/* <div className="upsc-search">
        <input type="text" placeholder="Obepedia" />
         <span><BiSearch />
        </span> 
      </div> */}
      <Guide />






      <div className="upsc2">
        <div className="tab-view">
          <ul className='nav'>
            <li><Link to='' className='active'>About</Link></li>
            <li><Link to='' >Courses</Link></li>
            <li><Link to='' >Blogs</Link></li>
            <li><Link to='' >Gallery</Link></li>
            <li><Link to='' >Job Vacancies</Link></li>
          </ul>
        </div>{/* tab-view end */}
        {/*  <div className="tab-content">
                    <div className="about" ref={aboutToRef}>
                    About
                    </div>
                    <div className="course " ref={courseToRef}>
                      <h4>Courses</h4>
                    </div>

                    <div className="faculty" ref={facultToRef}>
                      <h4>Faculty</h4>
                    </div>
                    <div className="gallery" ref={galleryToRef}>
                      <h4>Gallery</h4>
                    </div>
                    <div className="job-vacancy" ref={jobToRef}>
                      <h4>Job Vacancy</h4>
                    </div>
                    
                  </div> tab-content end*/}
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
            <div className="upscleft">

              <div className="highlights">
                <ul>
                  <li>UPSC Syllabus</li>
                  <li>IAS Prelims Syllabus

                    <ul>
                      <li>IAS Prelims Syllabus for General Studies Paper -1</li>
                      <li>IAS Prelims Syllabus for General Studies Paper -2</li>
                    </ul>
                  </li>
                  <li>IAS Prelims Syllabus</li>
                  <li>IAS Prelims Syllabus</li>
                  <li>IAS Prelims Syllabus</li>
                </ul>
              </div>
              <h3>Description </h3>
              <p className='parah'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
              <h3>Exam Preperation</h3>
              <p className='parah'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
              <h3 className='pb-4'>Latest update</h3>
              <p><span>Aug 3, 2022:</span> UPSC 2022 registrations started check details and fill the form now</p>

              <p><span>July 30, 2022: </span> UPSC 2022 notification released, registrations to start from August 3</p>

              <p><span>July 12, 2022:</span> UPSC 2022 to be conducted by IIM Bangalore, notifcation on July 31</p>

              <p><span>July 6, 2022:</span> UPSC 2022 What to expect? Conducting IIM, syllabus, pattern</p>
              <h3>Description</h3>
              <p className='parah'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
              <h3>Elegibility Criteria</h3>
              <p className='parah'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>

            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
            <div className="rigthside">
              <Rightside />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default upsc