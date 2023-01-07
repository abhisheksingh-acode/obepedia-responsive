import React, { useRef } from 'react';
import './course.css';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
import { Link, useParams } from 'react-router-dom';
import Rightside from '../../components/rightside/Rightside';
import Rating from '../../components/rating/Rating';
import Banner from '../../components/banner/Banner';
import Bannerimg from '../../images/banner3.png';
import Table from 'react-bootstrap/Table';
import Review from '../../components/review/Review';
import image from '../../images/banner5.png';
import Footer from '../../components/footer/Footer';

import Guide from '../../components/guide/Guide';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Course = () => {
    const { id } = useParams();
    const val = JSON.parse(localStorage.getItem('user'))
    const vid = val.user._id
    const token = val.token

    //for tab scroll
    const aboutToRef = useRef();
    const cardToRef = useRef();
    const resultToRef = useRef();
    const formToRef = useRef();
    const dateToRef = useRef();
    const notiToRef = useRef();
    const prepareToRef = useRef();
    const patternToRef = useRef();


    const tabledata = [
        { event: "UPSC CAPF Notification 2022", date: "	20-Apr-2022", feature: "20-Apr-2022" },
        { event: "UPSC CAPF Notification 2022", date: "	20-Apr-2022", feature: "20-Apr-2022" },
        { event: "UPSC CAPF Notification 2022", date: "20-Apr-2022", feature: "20-Apr-2022" },
        { event: "UPSC CAPF Notification 2022", date: "	20-Apr-2022", feature: "20-Apr-2022" },
    ]


    const [Data, setData] = useState(null)

    async function fetchData() {
      try {
  
        const response = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/coursebyid/${id}`)
        setData(response.data)
        
      } catch (error) {
        console.error(error);
      }
    }
  

    useEffect(() => {
        fetchData();
      }, [])


    return (

        <React.Fragment>
            <div className="upsc-background">
                <Navbar logoimg={logo} />
            </div>


            <div className="container-space">
                
                {Data?.map(item=>(
                <Guide name={item.course}  />
                    // <h1>{item.duration}</h1>
                ))}
               

                <div className="tab-view">
                    <ul className='nav'>
                        <li><Link to='' className='active' onClick={() => aboutToRef.current.scrollIntoView()}>About</Link></li>
                        <li><Link to='' onClick={() => cardToRef.current.scrollIntoView()}>Admit Card</Link></li>
                        <li><Link to='' onClick={() => resultToRef.current.scrollIntoView()}>Results</Link></li>
                        <li><Link to='' onClick={() => formToRef.current.scrollIntoView()}>Application Form</Link></li>
                        <li><Link to='' onClick={() => dateToRef.current.scrollIntoView()}>Dates</Link></li>
                        <li><Link to='' onClick={() => notiToRef.current.scrollIntoView()}>Notification</Link></li>
                        <li><Link to='' onClick={() => prepareToRef.current.scrollIntoView()}>Preparation</Link></li>
                        <li><Link to='' onClick={() => patternToRef.current.scrollIntoView()}>Pattern</Link></li>
                    </ul>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                        <div className="tab-content">
                            <div className="about" ref={aboutToRef}>
                                <h5 className='hlt'>About Course</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                                <Banner bannerimg={Bannerimg} />
                            </div>{/* about end */}
                            <div className="admit" ref={cardToRef} >
                                <h5 className='hlt'>How to Download UPSC CAPF(AC) Admit Card 2022?</h5>
                                <p>The candidates can download their UPSC CAPF(AC) admit card 2022 in the manner given below:</p>
                                <ul>
                                    <li> Go to the official website of UPSC – upsc.gov.in</li>
                                    <li> Click on the UPSC CAPF admit card link shown in the “What’s new” section,</li>
                                    <li> Click on the UPSC CAPF exam 2022 admit card link given at the right side.</li>
                                    <li> Click on the link, enter the required credentials for login</li>
                                    <li>Download the CAPF admit card </li>
                                    <li> Take two prints of the CAPF admit card for the future reference</li>
                                </ul>
                                <h5 className='py-3 hlt'>How to check the CAPF(AC) Result?</h5>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>UPSC CAPF Event</th>
                                            <th>Dates</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabledata.map((val, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{val.event}</td>
                                                    <td>{val.date}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </div> {/* admit end */}
                            <div className="result" ref={resultToRef}>
                                <h5 className='py-5 hlt'>How to check the CAPF(AC) Result?</h5>
                                <p>The candidates can check the UPSC CAPF (AC) exam result by following the given steps</p>
                                <ul>
                                    <li>  Step 1: Go to the official website - upsc.gov.in </li>
                                    <li>  Step 2: Click on the CAPF Result appearing in the "What's New" section on the right-hand side</li>
                                    <li>Step 3: A new page will appear showing the PDF link of the CAPF written result </li>
                                    <li>  Step 4: Click on the link given under the "Documents" column, the written result pdf will open </li>
                                    <li> Step 5: Search the roll number Step 6: Download the CAPF result pdf for future reference.</li>
                                    <li>The candidates, who cleared the written exam, are called for a physical and medical examination. UPSC designates an authority for this stage of examination.</li>
                                </ul>
                                <h5 className='py-4 hlt hlt'>UPSC CAPF Physical/Medical Examination Result</h5>
                                <p>The Physical/Medical examination is the second stage of the UPSC CAPF selection process. Though the Physical/Medical exam is only qualifying in nature, it is mandatory to pass this stage of the exam. The physical test and the medical standard exam are conducted by the designated authority.</p>
                            </div> {/* result end */}
                            <div className="application" ref={formToRef}>
                                <h5 className='py-4 hlt hlt'>Documents required to fill the UPSC CAPF Application 2022</h5>
                                <p>The candidates should be ready with the following documents/details before filling out the CAPF application. See below the list of documents/details required:</p>
                                <ul>
                                    <li>Scanned images of photographs & signature </li>
                                    <li>Scanned image of a government photo-identity card</li>
                                    <li> Bank details in case opting for online fee submission </li>
                                    <li>Score sheet of Class 10 and 12</li>
                                </ul>
                            </div>{/* application end */}
                            <div className="dates" ref={dateToRef}>
                                <h5 className='py-3 hlt'>How to check the CAPF(AC) Result?</h5>
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Event</th>
                                            <th>Dates</th>
                                            <th>Silent Feature</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tabledata.map((val, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{val.event}</td>
                                                    <td>{val.date}</td>
                                                    <td>{val.feature}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </div>{/* dates end */}
                            <div className="notification" ref={notiToRef}>
                                <h5 className='py-4 hlt hlt'>UPSC CAPF (AC) 2022 Vacancies</h5>
                                <p>UPSC CAPF (AC) exam is a national level exam. The number of vacancies notified in the UPSC CAPF 2022 advertisement is 253. The number is greater than the previous year's number (159). UPSC CAPF 2022 vacancies will influence each phase of the recruitment process.</p>
                            </div>
                            <div className="prepare" ref={prepareToRef}>
                                <h5 className='py-4 hlt'>UPSC CAPF Exam Centre - Personality test/Interview</h5>
                                <p>The candidate who qualifies the Medical/Physical standard test are called for personality test. The UPSC CAPF personality test/ interview is conducted in the UPSC building, Dholpur House, New Delhi. The candidate needs to carry all his academic and professional certificates which need to be verified at the time of interview.</p>
                            </div>
                            <div className="pattern" ref={patternToRef}>
                                <h5 className='py-4 hlt'>Factors Determining UPSC CAPF (AC) Cutoff</h5>
                                <p>The UPSC CAPF (AC) cut-off marks are the interplay of three important factors.</p>
                                <ul>
                                    <li>Number of Vacancies</li>
                                    <li> Difficulty Level of the question paper</li>
                                    <li> Number of candidates applied for the exam</li>
                                </ul>
                                <p>The number of vacancies is a very important factor in deciding the cut off marks (keeping the other two factors constant). Higher the number of vacancies, lower the cut- marks. The difficulty level of the question paper is another important factor in arriving at the cut-off. In an easy paper, every candidate scores well so the cutoff will automatically shoot up to select the candidates appropriate for the number of vacancies.</p>
                                <p>The third factor is a very rare phenomenon. It will be very rare that the number of candidates applying for the exam will be less than the number of vacancies.</p>

                            </div>
                    <Review/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                        <div className="rigthside">
                            <Rating />
                            <Rightside />
                            <div className="rightbann">
                                <Banner bannerimg={image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>

    )
}

export default Course