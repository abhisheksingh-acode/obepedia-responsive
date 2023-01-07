import React from 'react';
import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
import { BiPencil } from 'react-icons/bi';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import profile from '../../images/profile.png';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Rightside from '../../components/rightside/Rightside';
import Footer from '../../components/footer/Footer';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [Data, setData] = useState(null)

    const val = localStorage.getItem('user')
    const user = JSON.parse(val)
    // if (user) {
    var id = user.user._id;
    // }

    async function fetchData() {
        try {
            const response = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/getuserdet/${id}`)
            setData([response.data])
            console.log(response.data)
            if (response.data == null) {
                // alert('Data is null')
                navigate(`/user-from/${id}`)
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return Data && (
        <>
            <div className="upsc-background">
                {/* <div className="logged"> */}
                    <Navbar logoimg={logo} />
                {/* </div> */}
            </div>
            {Data.map(item => (

                <div className="profile-page">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                            <div className="profile-bg">
                                <img src={profile} alt='profile' />
                                <div className="text">
                                    <h4>{item.username}</h4>
                                    <p>{item.number}</p>
                                    <p>{item.email}</p>
                                    <p>{item.city}</p>
                                </div>
                                <span><BiPencil /></span>
                            </div>

                            <Tabs defaultActiveKey="inform" transition={false} id="noanim-tab-example" className="mb-3">
                                <Tab eventKey="inform" title="Personal Information">
                                    <Form>
                                        <span className='editing'><BiPencil /></span>
                                        <Form.Group as={Row} className="value mb-1" controlId='name'>
                                            <Form.Label column lg={2} md={3} xs={3}>
                                                Name
                                            </Form.Label>
                                            <Col md={6} xs={8} >
                                                {item.username}
                                            </Col>

                                        </Form.Group>
                                        <Form.Group as={Row} className="value mb-1" controlId='email'>
                                            <Form.Label column lg={2} md={3} xs={3}>
                                                Email
                                            </Form.Label>
                                            <Col md={6} xs={9} >
                                                {item.email}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="value mb-1" controlId='phone'>
                                            <Form.Label column lg={2} md={3} xs={3}>
                                                Phone
                                            </Form.Label>
                                            <Col md={6} xs={9} >
                                                {item.number}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="value mb-1" controlId='gender'>
                                            <Form.Label column lg={2} md={3} xs={3}>
                                                Gender
                                            </Form.Label>
                                            <Col md={6} xs={9} >
                                                Male
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="value mb-1" controlId='dob'>
                                            <Form.Label column lg={2} md={3} xs={3}>
                                                DOB
                                            </Form.Label>
                                            <Col md={6} xs={9} >
                                                {item.dob}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="value mb-1" controlId='residence'>
                                            <Form.Label column lg={2} md={3} xs={3}>
                                                Residence
                                            </Form.Label>
                                            <Col md={6} xs={9} >
                                                {item.state}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Label >
                                                About Me
                                            </Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group className="mb-5">
                                            <Form.Label >
                                                Bio
                                            </Form.Label>
                                            <Form.Control className='bio' />
                                        </Form.Group>

                                    </Form>
                                </Tab>
                                <Tab eventKey="back" title="Education Background">
                                    <p>{item.college}</p>
                                </Tab>
                                <Tab eventKey="aducat" title="Education Prefrences" >
                                    <p>{item.school}</p>
                                </Tab>
                            </Tabs>
                        </div>

                        <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                            <div className="rigthside p-0 p-sm-5">
                                <Rightside />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Footer />
        </>

    )
}

export default Profile