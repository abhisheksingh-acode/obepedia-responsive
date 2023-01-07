
import React, { useState } from 'react';
import './footer.css';
// import footlogo from '../../images/footer-logo.png';
import { Link } from 'react-router-dom';
import MobFooter from '../MobFooter/MobFooter';
import newLogo from '../../images/white-logo.png';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InstituteLogin from '../Studdrop/InstituteLogin';
import InstututeRegister from '../Studdrop/InstututeRegister';
// import axios from "axios";


const Footer = () => {

    // const [Data, setData] = useState(null)



    // async function fetchData() {
    //     try {
    //         const response = await axios.get("https://jellyfish-app-4v5ou.ondigitalocean.app/user/category/getcategory_details")
    //         setData(response.data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // For Suggestion form
    const [Email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [Number, setNumber] = useState('')
    const [Message, setMessage] = useState('')


    const handleSent = async () => {
        // console.log(Email, Name, Message, Number);
        try {
            const response = await fetch('https://jellyfish-app-4v5ou.ondigitalocean.app/user/suggestion_form/post_suggestion', {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: Email,
                    name: Name,
                    number: Number,
                    description: Message
                })
            })

            const result = await response.json();

            alert('your response has been shared!')
            setMessage('')
            setName('')
            setNumber('')
            setEmail('')
            handleClose();

        } catch (error) {
            console.log(error)
        }
    }



    return (


        <>
            <div className="footer">
                <div className="container-fluid p-0 overflow-hidden">
                    <div style={{ background: '#05A474' }} className="justify-content-center py-5 row">
                        {/* <div className="col-md-5">
                        <div className="foot-logo">
                            <img src={footlogo} alt="footer-logo" />
                            <ul className='menu list-unstyled d-flex'>
                                <li><Link to=''>About us </Link></li>
                                <li><Link to=''>Contact Us </Link></li>
                                <li><Link to=''> Disclamer</Link></li>
                            </ul>
                            <p>Email : <Link to='mailto: Findopedia123@gmail.com'>Findopedia123@gmail.com</Link></p>
                        </div>
                    </div> */}
                        <div className="col-md-7 ">
                            <h5 className='subs'>Get our experts to answer your questions within 24 Hrs</h5>
                            <div className="search">
                                <input type="text" placeholder="Example.com" />
                                <span>
                                    send
                                </span>
                            </div>
                        </div>
                    </div> {/*  1st row end */}
                    <div className="footer-grid">
                        <div className="footer-menu">
                            <h4>MBA</h4>
                            <ul className='list-unstyled'>
                                <li><Link to=''> MBA </Link></li>
                                <li><Link to=''>  Top MBA Colleges</Link></li>
                                <li><Link to=''>  Executive MBA Colleges </Link></li>
                                <li><Link to=''>  MBA Exams</Link></li>
                                <li><Link to=''> CAT </Link></li>
                                <li><Link to=''> MAT </Link></li>
                                <li><Link to=''> Online MBA </Link></li>
                                <li><Link to=''> MBA College Predictors </Link></li>
                            </ul>
                        </div>

                        <div className="footer-menu">
                            <h4>Sarkari Exams</h4>
                            <ul className='list-unstyled'>
                                <li><Link to=''>RRB Group D </Link></li>
                                <li><Link to=''> RRB NTPC</Link></li>
                                <li><Link to=''> CTET </Link></li>
                                <li><Link to=''> UPTET</Link></li>
                                <li><Link to=''> UGC NET</Link></li>
                                <li><Link to=''> DSSSB</Link></li>
                                <li><Link to=''> SSC CGL</Link></li>
                                <li><Link to=''> SSC CHSL</Link></li>
                                <li><Link to=''> SSC GD</Link></li>
                                <li><Link to=''> NDA</Link></li>
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h4>MBA</h4>
                            <ul className='list-unstyled'>
                                <li><Link to=''> MBA </Link></li>
                                <li><Link to=''>  Top MBA Colleges</Link></li>
                                <li><Link to=''>  Executive MBA Colleges </Link></li>
                                <li><Link to=''>  MBA Exams</Link></li>
                                <li><Link to=''> CAT </Link></li>
                                <li><Link to=''> MAT </Link></li>
                                <li><Link to=''> Online MBA </Link></li>
                                <li><Link to=''> MBA College Predictors </Link></li>
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h4>Sarkari Exams</h4>
                            <ul className='list-unstyled'>
                                <li><Link to=''>RRB Group D </Link></li>
                                <li><Link to=''> RRB NTPC</Link></li>
                                <li><Link to=''> CTET </Link></li>
                                <li><Link to=''> UPTET</Link></li>
                                <li><Link to=''> UGC NET</Link></li>
                                <li><Link to=''> DSSSB</Link></li>
                                <li><Link to=''> SSC CGL</Link></li>
                                <li><Link to=''> SSC CHSL</Link></li>
                                <li><Link to=''> SSC GD</Link></li>
                                <li><Link to=''> NDA</Link></li>
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h4>Sarkari Exams</h4>
                            <ul className='list-unstyled'>
                                <li><Link to=''>RRB Group D </Link></li>
                                <li><Link to=''> RRB NTPC</Link></li>
                                <li><Link to=''> CTET </Link></li>
                                <li><Link to=''> UPTET</Link></li>
                                <li><Link to=''> UGC NET</Link></li>
                                <li><Link to=''> DSSSB</Link></li>
                                <li><Link to=''> SSC CGL</Link></li>
                                <li><Link to=''> SSC CHSL</Link></li>
                                <li><Link to=''> SSC GD</Link></li>
                                <li><Link to=''> NDA</Link></li>
                            </ul>
                        </div>
                    </div>{/*  1st row end */}
                    <div className="footer-grid row" style={{ background: '#004530' }}> 
                    <div className="footer-menu col-md-3 col-6">
                            <h4>About ObeLabs</h4>
                            <ul className='list-unstyled'>
                                <li><Link to=''>   About Us </Link></li>
                                <li><Link to=''>   Contact Us</Link></li>
                                <li><Link to=''>   Careers </Link></li>
                                <li><Link to=''>   FAQs</Link></li>
                                <li><Link to='' onClick={handleShow}> Suggestion Box </Link></li>
                            </ul>
                        </div>
                        <div className="footer-menu col-md-3 col-6">
                            <h4>Institutes</h4>
                            <ul className='list-unstyled'>
                                <InstituteLogin />
                                <InstututeRegister />
                                <li><Link to=''>Help</Link></li>
                                <li><Link to=''> FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="footer-menu col-md-3 col-6">
                            <h4>For Demo</h4>
                            <ul className='list-unstyled'>
                                <li><Link to='/upsc'>  Upsc </Link></li>
                                <li><Link to='/listing'>   Listing </Link></li>
                                <li><Link to='/compare'>   Compare</Link></li>
                                <li><Link to='/compares'>   ComparePage</Link></li>
                                <li><Link to='/vacancy'> Vacancy</Link></li>
                                <li><Link to='/student-login'> Login Student</Link></li>
                                <li><Link to='/institute-login'> Login Institute</Link></li>
                                <li><Link to='/student-register'> Student Register</Link></li>
                                <li><Link to='/institute-register'> Institute Register</Link></li>
                                <li><Link to='/user-from'> User Form</Link></li>
                                <li><Link to='/institute-form'> Institute Form</Link></li>
                                
                            </ul>
                        </div>
                        <div className="footer-menu d-flex justify-content-end col-md-3 col-6" style={{ flexDirection: 'column', marginTop: '100px'}}>
                            <div className="fb-top-bx pb-3">
                                <h4 className='m-0 pb-1'>Get in Touch</h4>
                                <p className='text-hlt'>+91 7503063585</p>
                            </div>
                            <div className="fb-top-bx">
                                <h4 className='m-0 pb-1'>Contribute</h4>
                                <p className='text-hlt'>write a review</p>
                            </div>
                        </div>
                    </div>  
                    <div className="footer-bottom-2 row justify-content-between pb-4" style={{ background: '#004530', alignItems: 'end' }}>
                        <div className="col-md-3"><img src={newLogo} alt="footer-logo" /></div>
                        <div className="col-md-3">
                            {/* <div className="fb-top-bx">
                                <h4>Get in Touch</h4>
                                <p>+91 7503063585</p>
                            </div>
                            <div className="fb-top-bx">
                                <h4>Contribute</h4>
                                <p>write a review</p>
                            </div> */}
                            <div className="fb-btm-bx">
                                <p>Follow us on
                                    <span><BsFacebook /></span>
                                    <span><BsTwitter /></span>
                                    <span><FaLinkedinIn /></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MobFooter />



            {/* suggestion modal popup start */}
            <Modal show={show} onHide={handleClose} className='suggestion-box'>
                <Modal.Header closeButton>
                    <Modal.Title>Suggestion Box</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-4" controlId="FormInput">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                onChange={(e) => setName(e.target.value)} value={Name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="FormInput">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)} value={Email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="FormInput">
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                autoFocus
                                onChange={(e) => setNumber(e.target.value)} value={Number}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="FormTextarea">
                            <Form.Control as="textarea" rows={4}
                                placeholder="Type Message"
                                onChange={(e) => setMessage(e.target.value)} value={Message}
                            />
                        </Form.Group>
                    </Form>

                    <Button variant="primary" onClick={handleSent}>
                        Send Suggestion
                    </Button>
                </Modal.Body>
            </Modal>

        </>


    )
}

export default Footer