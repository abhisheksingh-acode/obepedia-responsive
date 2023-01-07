import React, { useState } from 'react';
import fb from '../../images/facebk.png';
import goog from '../../images/Google.png';
import Modal from 'react-bootstrap/Modal';
import instimg from '../../images/inst-log.png';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


const InstututeRegister = () => {



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
            <div className="footer-menu p-0">
                <ul className='list-unstyled'>
                    <li><Link to='' onClick={() => setLgShow(true)}> Institute Register</Link></li>
                </ul>
            </div>



            {/* Register as Institute */}
            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} className='login-popup'>
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
            </Modal>
        </>

    )
}

export default InstututeRegister