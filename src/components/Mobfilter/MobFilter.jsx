import React, { useState } from 'react';
import './mobfilter.css';

import { BiFilterAlt } from 'react-icons/bi';
// import $ from 'jquery';
// import 'jquery-ui-dist/jquery-ui';
import Form from 'react-bootstrap/Form';
// import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Sort from '../../components/Mobfilter/MobSort';
import { AiFillStar } from "react-icons/ai";

const MobFilter = () => {

    const [filter, setFilter] = useState(false);


    return (
        <>
            <div className='filter-mob'>
                <div className='table-filter'>

                    <Sort />
                    <div className='filter-popup'>
                        <div className='filter' onClick={() => setFilter(!filter)}>
                            <BiFilterAlt className='filter' /> Filter
                        </div>
                        {
                            filter ?
                                <div className='popupshow'>
                                    <h3>Filters  <AiIcons.AiOutlineClose onClick={() => setFilter(!filter)} /></h3>
                                   
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                        <Row>
                                            <Col sm={3} xs={6}>
                                                <Nav variant="pills" className="flex-column">
                                                    
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">Courses</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">City</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="third">Rating</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="fourth">Exam</Nav.Link>
                                                    </Nav.Item>

                                                </Nav>
                                            </Col>
                                            <Col sm={9} xs={6}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="first">
                                                        <Form>
                                                            {['checkbox'].map((type) => (
                                                                <div key={`reverse-${type}`} >
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="JEE Advance"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-1`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="IIT"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-2`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="BITSAT"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-3`}
                                                                    />
                                                                    <Form.Check
                                                                        reverse
                                                                        label="GATE"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-4`}
                                                                    />

                                                                </div>
                                                            ))}

                                                        </Form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <Form>
                                                            {['checkbox'].map((type) => (
                                                                <div key={`reverse-${type}`} >
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Delhi"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-1`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Mumbai"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-2`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Kolkata"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-3`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Banglore"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-4`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Pune"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-4`}
                                                                    />

                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="third">
                                                        <div className="rating">
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiFillStar className='color' />
                                                        </div>
                                                        <div className="range"> <Form.Range /></div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="fourth">
                                                    <Form>
                                                            {['checkbox'].map((type) => (
                                                                <div key={`reverse-${type}`} >
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Engineer"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-1`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Medical"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-2`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Bank"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-3`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Civil Service"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-4`}
                                                                    />
                                                                    <Form.Check className="mb-3"
                                                                        reverse
                                                                        label="Law"
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`reverse-${type}-4`}
                                                                    />

                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                    <div className='filterBtns'>
                                        <button className='cancel'>Cancel</button>
                                        <button className='apply'>Apply</button>
                                    </div>


                                </div> : null
                        }



                    </div>

                </div>
            </div>
        </>
    )
}

export default MobFilter