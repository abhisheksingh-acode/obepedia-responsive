import React from 'react';
import './comparepage.css';
import logo from '../../images/white-logo.png';
import Navbar from '../../components/navbar/Navbar';
import { BiSearch } from "react-icons/bi";
import image from '../../images/institute.png';
import Card from '../../components/card/Card';
import Cslider from '../../components/compare-slide/Cslider';
import { CompareApi } from './CompareApi';
import { CourseInfo } from './CompareApi';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ComparePage = () => {

    const { id } = useParams('');
    const [show, setShow] = useState(false);
    const [Institute, setInstitute] = useState('')
    const [Course, setCourse] = useState('')
    const [Compare0, setCompare0] = useState('')
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [InstituteDet, setInstituteDet] = useState('')

    useEffect(() => {
        axios
            .get(
                "https://jellyfish-app-4v5ou.ondigitalocean.app/user/institute/getallinstitute"
            )
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetchData()
    }, [])

    const GetCourse = async (id) => {
        setInstitute(id)
        try {
            const response2 = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/institute/course/getcourse/${id}`)
            setData2(response2.data)
            var insticourselen = (response2.data).length
            // console.log(response2.data)
        } catch (error) {
            console.error(error);
        }
    }

    const Compare = async () => {
        try {
            const compdata = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/compare/${Institute}/${Course}`)
            setCompare0(compdata.data)
            // console.log(compdata.data)

            setCourse('')
            setInstitute('')

            handleClose()
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchData() {
        try {

            const responseq = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/institute/getinstitute/${id}`)
            setInstituteDet(responseq.data)

        } catch (error) {
            console.error(error);
        }
    }

    return (

        <>
            <div className="upsc-background">
                <Navbar logoimg={logo} />
            </div>

            <div className="comapre-bread">
                <h4 className='text-white'>Compare Aakash Delhi Vs Insparc Technologies Pvt. Ltd.</h4>
                <div className="search">
                    <input type="text" placeholder="Obepedia" />
                    <span><BiSearch />
                    </span>
                </div>
                <button onClick={handleShow} className='src-btn'>Choose Institute and Course</button>
            </div>
            <div className="compare-pages">
                <div className="compare-shadow">
                    <div className="content">
                        <h6>Compare Institutes</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>
                    {
                        InstituteDet.institute_profile?.map(item => (
                            <div className="content" >
                                <h6>{item.name}</h6>
                                <p>{item.institute_id}</p>
                                <p className='abt'>{item.about}</p>
                                <p>{item.location}</p>
                                </div>
                                ))}


                    {Compare0.institute?.map((val, index) => {
                        return (
                            <div className="content" key={index}>
                                <h6>{val.name}</h6>
                                <p>{val.institute_id}</p>
                                <p className='abt'>{val.about}</p>
                                <p>{val.location}</p>
                            </div>
                        );
                    })}

                </div>

                <div className="institute">
                    <h4 className='pb-4'>Course Info</h4>

                    {Compare0.course?.map((val, index) => {
                        return (
                            <ul className='p-0' key={index}>

                                <li className='text-black'><b> Course Details </b> </li>
                                <li className='text-black'><b> {val.course} </b> </li>
                                <li className='text-center'>Duration :{val.duration} </li>
                                <li className='text-center'>Offline : {val.offline} </li>
                                <li className='text-center'>Online : {val.online}</li>

                            </ul>
                        );
                    })}

                </div>

                <div className='mt-5'>
                    <h4 className='pb-5'>Institute Details</h4>
                    <div className="course-detail">
                        <div className="content" >
                            <h6>About Institute</h6>
                        </div>
                        {
                        InstituteDet.institute_profile?.map(item => (
                        <div className="content" >
                            <p>{item.about}</p>
                        </div>
                        ))}
                        {Compare0.institute?.map(item => (
                            <div className="content" >
                                <p className='abt'>{item.about}</p>
                            </div>))}
                        {/* <div className="content" >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu </p>
                            <p>vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu </p>
                        </div> */}
                    </div>
                </div>


                <div className="institute mt-5">
                    <h4 className='pb-4'>Infrastructure & facilities</h4>
                    <>
                        {Compare0.course?.map((val, index) => {
                            return (
                                <ul className='p-0' key={index}>
                                    <li className='text-black'><b> Quantitive Details Of</b> {val.course}  </li>
                                    <li className='text-black'><b> No. of Courses </b> </li>
                                    <li className='text-black'><b> {val.course.length} </b> </li>
                                    {/* {Compare0.faculty?.map((val0, index) => {<li className='text-center'>{val0.aculty.length} </li> })} */}
                                    {/* <li className='text-center'>{val.ownership} </li> */}
                                    {/* <li className='text-center'>{val.total}</li> */}

                                </ul>
                            );
                        })}
                    </>

                </div>

                <div className="choosecard">
                    <h4 className='text-center'><b>If you had to choose any one of these courses which one would you prefer?</b></h4>
                    <div className="d-flex choose">
                        <Card cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Select' />

                        <Card cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
                    </div>
                </div>{/* choosecard end */}

            </div>

            <div className="comparison">
                <h4><b>Popular comparisons with NIFT Delhi</b></h4>
                <Cslider />
            </div>{/* comparison end */}

            <Footer />


            <Modal show={show} onHide={handleClose} className='compare-popup'>
                {/* <Modal.Header closeButton></Modal.Header> */}
                <Modal.Body>
                    <div class="mb-3">
                        <label htmlFor='institutes' class="form-label"><h5>Institute Selection</h5></label>
                        <select onChange={(e) => GetCourse(e.target.value)} class="form-select form-select-lg" name="" id="institutes">
                            <option selected>Select one</option>
                            {data.map(item => (
                                <option value={item.institute_id}>{item.name}</option>
                            ))}
                        </select>
                    </div>

                    <div class="mb-3">
                        <label htmlFor='courses' class="form-label"><h5>Course Selection</h5></label>
                        <select onChange={(e) => setCourse(e.target.value)} class="form-select form-select-lg" name="" id="courses">
                            <option selected>Select one</option>
                            {data2.map(item => (
                                <option value={item._id}>{item.course}</option>
                            ))}
                        </select>
                    </div>

                    <Button variant="primary" onClick={() => Compare()}>
                        Compare
                    </Button>
                </Modal.Body>
            </Modal>
        </>


    )
}

export default ComparePage