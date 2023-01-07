import React from 'react';
import './drop.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserGraduate } from 'react-icons/fa';
import { FaBuilding } from "react-icons/fa";

const Drop = (props) => {

    return (

        <>
            <div className="drop">
                <Dropdown className="nav-link-lg me-5 text-decoration-none d-none d-lg-inline-block">
                    <Dropdown.Toggle id="dropdown-basic">
                        {props.button}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><FaUserGraduate /> <Link to='/profile'>{props.register1}</Link></Dropdown.Item>
                        <hr />
                        <Dropdown.Item href="#/action-2"><FaBuilding /> {props.register2} </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}

export default Drop