import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
// import MobForm from './MobForm';
import { Form } from 'react-bootstrap';
import fb from '../../images/facebk.png';
import goog from '../../images/Google.png';

const Loginstd = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const val = localStorage.getItem('user')
    const user = JSON.parse(val)
    if (user) {
        console.log(user.user._id);
        var id = user.user._id;
    }

    // const Det = (email, pass) => {
    //     setEmail(email)
    //     setPassword(pass)
    // }

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
        console.log(Email, Password);
            
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
    } catch (error) {
            console.log("login error______",error);
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
                <div className="login-page py-5">
                    {/* <MobForm func={handleLogin} title='Login as Student' btn='Sign In' account='Already you have an account ?' with='Or Sign In with' /> */}
                    <div className="login-form">
                <Form>
                    <h4>Login as Student</h4>
                    <Form.Group className="mb-4">
                        <Form.Control onChange={e=>setEmail(e.target.value)} value={Email} required id="number" placeholder=" Mobile Number Or Email ID" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={e=>setPassword(e.target.value)} value={Password} required id="Password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <small>Forgot Password</small>
                    </Form.Group>
                    <button type="button" onClick={handleLogin} className='signbtn'>Sign in</button>
                    <Form.Group className="mb-4">
                        <Link to='/student-login' className='acct'>Already you have an account ?</Link>
                    </Form.Group>
                    <p className='with'>Or Sign In with</p>
                    <div className="social">
                        <img src={goog} alt='google' />
                        <img src={fb} alt='facebook' />
                    </div>
                </Form>
            </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Loginstd