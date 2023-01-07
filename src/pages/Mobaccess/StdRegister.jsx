import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
import { Form } from 'react-bootstrap';
import fb from '../../images/facebk.png';
import goog from '../../images/Google.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const StdRegister = () => {

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
        }

        else {
            alert("enter correct email and strong password!")
        }

    }

    return (

        <>
            <div className="upsc-background">
                <div className="logged">
                    <Navbar logoimg={logo} />
                </div>
            </div>


            <div className="container">
                <div className="login-form py-5">
                    {/* <MobForm title='Register as Student' btn='Register' account='Login' with='Or Register In with' /> */}
                    <Form>
                    <h4>Register as Student</h4>
                    <Form.Group className="mb-4">
                        <Form.Control onChange={e=>setEmail(e.target.value)} value={Email} required id="number" placeholder=" Mobile Number Or Email ID" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={e=>setPassword(e.target.value)} value={Password} required id="Password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <small>Forgot Password</small>
                    </Form.Group>
                    <button type="button" onClick={handleSignup} className='signbtn'>Sign in</button>
                    <Form.Group className="mb-4">
                        <Link to='/student-login' className='acct'>Already you have an account ?</Link>
                    </Form.Group>
                    <p className='with'>Or Register In with</p>
                    <div className="social">
                        <img src={goog} alt='google' />
                        <img src={fb} alt='facebook' />
                    </div>
                </Form>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default StdRegister