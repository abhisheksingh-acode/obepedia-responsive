import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserGraduate } from 'react-icons/fa';
import { FaBuilding } from "react-icons/fa";
import fb from '../../images/facebk.png';
import goog from '../../images/Google.png';
import Modal from 'react-bootstrap/Modal';
import stdimg from '../../images/std-login.png';
import instimg from '../../images/inst-log.png';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';


const Register = () => {


    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // for institute
    const [lgShow, setLgShow] = useState(false);

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const handleSignup = async () => {

        if (Email && Password.length > 8) {
            // console.log(Email, Password);
            const response = await fetch('https://jellyfish-app-4v5ou.ondigitalocean.app/signup', {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: Email,
                    password: Password,
                    role: 'user',
                    mobile: 1000,
                    name: "name"
                })
            })

            const result = await response.json();
            alert("Registration Succesful! now please login")
            navigate('/')
            handleClose();
        }

        else {
            alert("enter correct email and strong password!")
        }

    }

    return (

        <>
            {/* <div className="drop">
                <Dropdown className="nav-link-lg me-5 text-decoration-none d-none d-lg-inline-block">
                    <Dropdown.Toggle id="dropdown-basic">
                        Get Started
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ padding: '0px', borderRadius: '0px' }}>
                        <Dropdown.Item onClick={handleShow} className='dd-a' > Register as Student </Dropdown.Item>
                     
                        <Dropdown.Item onClick={() => setLgShow(true)} className='dd-a' >Register as Institute </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div> */}


            {/* Register as student */}
            {/* <Modal show={show} onHide={handleClose} className='login-popup'>
                <Modal.Body className='login-form'>
                    <div className="row">
                        <div className="col-md-6 pe-0">
                            <div className="form-img">
                                <img src={stdimg} alt='login' />
                            </div>
                        </div>
                        <div className="col-md-6 ps-0">
                            <Form>
                                <Modal.Header closeButton>
                                    <h4>Register as Student</h4>
                                </Modal.Header>

                                <Form.Group className="mb-4">
                                    <Form.Control id="number" type='email' placeholder=" Mobile Number Or Email ID" onChange={(e) => setEmail(e.target.value)} value={Email} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control id="Password" placeholder="Password" type='password' onChange={(e) => setPassword(e.target.value)} value={Password} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <small>Forgot Password</small>
                                </Form.Group>
                                <button type="button" onClick={handleSignup} className='signbtn'>Register </button>
                                <Form.Group className="mb-4">
                                    <Link to='/student-login' className='acct'>Login?</Link>
                                </Form.Group>
                                <p className='with'>Or Register In with</p>
                                <div className="social">
                                    <img src={goog} alt='google' />
                                    <img src={fb} alt='facebook' />
                                </div>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}
            {/* <Modal show={show} onHide={handleClose} className='login-popup'>
                <Modal.Body className='login-form'>
                    <div className="row">
                        <div className="col-md-6 pe-0">
                            <div className="form-img">
                                <img src={stdimg} alt='login' />
                            </div>
                        </div>
                        <div className="col-md-6 ps-0">
                            <Form>
                                <Modal.Header closeButton>
                                    <h4>Register as Student</h4>
                                </Modal.Header>

                                <Form.Group className="mb-4">
                                    <Form.Control id="number" placeholder=" Mobile Number Or Email ID" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control id="Password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <small>Forgot Password</small>
                                </Form.Group>
                                <button type="submit" className='signbtn'> Register </button>
                                <Form.Group className="mb-4">
                                    <Link className='acct' >Logins </Link>
                                </Form.Group>
                                <p className='with'> Or Register In with </p>
                                <div className="social">
                                    <img src={goog} alt='google' />
                                    <img src={fb} alt='facebook' />
                                </div>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}



            {/* Register as Institute */}
            {/* <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} className='login-popup'>
                <Modal.Body className='login-form'>
                    <div className="row">
                        <div className="col-md-6 pe-0">
                            <div className="form-img">
                                <img src={instimg} alt='login' />
                            </div>
                        </div>
                        <div className="col-md-6 ps-0">
                            <Form>
                                <Modal.Header closeButton>
                                    <h4>Register as Institute</h4>
                                </Modal.Header>

                                <Form.Group className="mb-4">
                                    <Form.Control id="number" placeholder=" Mobile Number Or Email ID" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control id="Password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <small>Forgot Password</small>
                                </Form.Group>
                                <button type="submit" className='signbtn'> Register </button>
                                <Form.Group className="mb-4">
                                    <Link to='/student-login' className='acct'>Login </Link>
                                </Form.Group>
                                <p className='with'> Or Register In with </p>
                                <div className="social">
                                    <img src={goog} alt='google' />
                                    <img src={fb} alt='facebook' />
                                </div>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}
        </>

    )
}

export default Register