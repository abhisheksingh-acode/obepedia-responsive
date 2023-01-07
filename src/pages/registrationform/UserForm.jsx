import React from 'react';
import './registrationform.css';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
import background from '../../images/image.png';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UserForm = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.token

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState('')
    const [Address, setAddress] = useState('')
    const [DOB, setDOB] = useState('')
    const [Photo, setPhoto] = useState('')
    const [College, setCollege] = useState('')
    const [School, setSchool] = useState('')
    const [Medium, setMedium] = useState('')
    const [Age, setAge] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Major, setMajor] = useState('')
    const [Stream, setStream] = useState('')

    const { id } = useParams();

    const handleSent = async () => {
// console.log({
//     userame: Name,
//             email: Email,
//             number: Number,
//             adddress: Address,
//             dob: DOB,
//             photo: "photuuu",
//             school: School,
//             college: College,
//             medium: Medium,
//             age: Age,
//             city: City,
//             state: State,
//             major: Major,
//             stream: Stream,
//             ref_id: id
// });
        try {
            const response = await fetch(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/userdet/${id}`, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                username: Name,
                email: Email,
                number: Number,
                address: Address,
                dob: DOB,
                photo: "photuuu",
                school: School,
                college: College,
                medium: Medium,
                age: Age,
                city: City,
                state: State,
                major: Major,
                stream: Stream,
                ref_id: id
            })

        })

        const result = await response.json();
        navigate(`/profile/${id}`)
        } catch (error) {
            console.log(error)
        }
        
    }

    return (

        <>

            <div className="upsc-background" style={{ boxShadow: '0px 4px 22px rgb(0 0 0 / 10%)' }}>
                    <Navbar logoimg={logo} />
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
                        <h6 className='text-center'>Hold On !! Please Fill This Form For Your Better Experience</h6>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label><b>Full Name</b></Form.Label>
                                    <Form.Control  onChange={e => setName(e.target.value)} value={Name} required type="text" placeholder="Full Name" name='name' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label><b>Phone Number</b></Form.Label>
                                    <Form.Control  onChange={e => setNumber(e.target.value)} value={Number} required type="number" placeholder="Your Number" name='phone' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Email Address</b></Form.Label>
                                    <Form.Control  onChange={e => setEmail(e.target.value)} value={Email} required type="email" placeholder="Email Address" name='email' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAge">
                                    <Form.Label><b>Address</b></Form.Label>
                                    <Form.Control  onChange={e => setAddress(e.target.value)} value={Address} required type="text" placeholder="Your Address" name='address' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label><b>City</b> </Form.Label>
                                    <Form.Control  onChange={e => setCity(e.target.value)} value={City} required type="text" placeholder="Enter City " name='city ' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label><b>State</b></Form.Label>
                                    <Form.Control  onChange={e => setState(e.target.value)} value={State} required type="text" placeholder="Enter State" name='state' />
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
                                    <Form.Label><b>School</b></Form.Label>
                                    <Form.Control onChange={e => setSchool(e.target.value)} value={School} required  type="text" placeholder="Enter School" name='state' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>College</b></Form.Label>
                                    <Form.Control  onChange={e => setCollege(e.target.value)} value={College} required type="text" placeholder="Your College " name='college' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAge">
                                    <Form.Label><b>Major</b></Form.Label>
                                    <Form.Control  onChange={e => setMajor(e.target.value)} value={Major} required type="text" placeholder="Your Major" name='major' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>DOB</b></Form.Label>
                                    <Form.Control  onChange={e => setDOB(e.target.value)} value={DOB} required type="number" placeholder="Your College " name='DOB' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Medium</b></Form.Label>
                                    <Form.Control  onChange={e => setMedium(e.target.value)} value={Medium} required type="text" placeholder="Your College " name='Medium' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Photo</b></Form.Label>
                                    <Form.Control  onChange={e => setPhoto(e.target.value)} value={Photo} required type="file" placeholder="Your College " name='DOB' />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Stream</b></Form.Label>
                                    <Form.Control  onChange={e => setStream(e.target.value)} value={Stream} required type="text" placeholder="Your Stream " name='Stream' />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><b>Age</b></Form.Label>
                                    <Form.Control  onChange={e => setAge(e.target.value)} value={Age} required type="Age" placeholder="Your Age " name='age' />
                                </Form.Group>
                            </Row>

                            <div className='buttons'>
                                <button className='cancel'>Cancel</button>
                                <div onClick={handleSent}  className='create'>Create Account</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default UserForm