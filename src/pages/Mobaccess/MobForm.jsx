import React from 'react';
import logimg from '../../images/std-login.png';
import { Link } from 'react-router-dom';
import fb from '../../images/facebk.png';
import goog from '../../images/Google.png';
import { Form } from 'react-bootstrap';
import { useState } from 'react';





const MobForm = (props) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    return (

        <>
            <div className="login-form">
                <Form>
                    <h4>{props.title}</h4>
                    <Form.Group className="mb-4">
                        <Form.Control onChange={e=>setEmail(e.target.value)} value={Email} required id="number" placeholder=" Mobile Number Or Email ID" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={e=>setPassword(e.target.value)} value={Password} required id="Password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <small>Forgot Password</small>
                    </Form.Group>
                    <button type="button" className='signbtn'>{props.btn}</button>
                    <Form.Group className="mb-4">
                        <Link to='/student-login' className='acct'>{props.account}</Link>
                    </Form.Group>
                    <p className='with'>{props.with}</p>
                    <div className="social">
                        <img src={goog} alt='google' />
                        <img src={fb} alt='facebook' />
                    </div>
                </Form>
            </div>
        </>

    )
}

export default MobForm