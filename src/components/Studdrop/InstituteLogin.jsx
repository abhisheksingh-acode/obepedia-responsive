import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import fb from '../../images/facebk.png';
import goog from '../../images/Google.png';
import instimg from '../../images/std-login.png';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';


const InstituteLogin = () => {

    const val = localStorage.getItem('user')
    const user = JSON.parse(val)
    if (user) {
        // console.log(user.user._id);
        var id = user._id;
    }

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // for institute
    const [lgShow, setLgShow] = useState(false);

    // Login Material
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const handleLogin = async () => {
        // console.log(Email, Password);
        const response = await fetch('https://jellyfish-app-4v5ou.ondigitalocean.app/user/login', {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: Email,
                password: Password,
            })
        })

        const result = await response.json();
        const token = result.token;
        if (!result.token) {
            alert('Enter Correct Details!');
        }
        else {
            localStorage.setItem('user', JSON.stringify(result))
            navigate(`/profile/${id}`)
        }


        // console.log(result, token);

    }

    return (

        <>
            <div className="footer-menu p-0">
                <ul className='list-unstyled'>
                    <li><Link to='' onClick={() => setLgShow(true)}> Institute Login</Link></li>
                </ul>
            </div>


            {/* login as Institute */}
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
                                    <h4>Login as Institute</h4>
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
                                <button type="submit" className='signbtn'> Sign In </button>
                                <Form.Group className="mb-4">
                                    <Link to='/student-login' className='acct'>Already you have an account ? </Link>
                                </Form.Group>
                                <p className='with'> Or Sign In with </p>
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

export default InstituteLogin