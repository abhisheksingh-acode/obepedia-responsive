import React from 'react';
import './registrationform.css';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
import background from '../../images/inst-log.png';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Footer from '../../components/footer/Footer';


const InstituteForm = () => {
    return (

        <>
       
            <div className="upsc-background" style={{ boxShadow: '0px 4px 22px rgb(0 0 0 / 10%)' }}>
                <div className="logged">
                    <Navbar logoimg={logo} />
                </div>
            </div>

            <div className="user-form"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: '0.8',
                }} >
                <div className="container">
                    <div className="formcard">
                        <h6 className='text-center'>Registration Please Fill This Form And Create an account for youself </h6>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label><b>Full Name</b></Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" name='name' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label><b>Phone Number</b></Form.Label>
                                    <Form.Control type="text" placeholder="Your email" name='phone' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Email Address</b></Form.Label>
                                    <Form.Control type="email" placeholder="Email Address" name='email' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAge">
                                    <Form.Label><b>Age</b></Form.Label>
                                    <Form.Control type="text" placeholder="Your Age" name='age' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label><b>City</b> </Form.Label>
                                    <Form.Control type="text" placeholder="Enter City " name='city ' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label><b>State</b></Form.Label>
                                    <Form.Control type="text" placeholder="Enter State" name='state' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label><b>Profession</b> </Form.Label>
                                    <Form.Select required className='form-control'>
                                        <option value="" disabled selected>Profession</option>
                                        <option>Teacher </option>
                                        <option>Student</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label><b>State</b></Form.Label>
                                    <Form.Control type="text" placeholder="Enter State" name='state' />
                                </Form.Group>
                            </Row>
                            <div className='buttons'>
                                <button className='cancel'>Cancel</button>
                                <button className='create'>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default InstituteForm