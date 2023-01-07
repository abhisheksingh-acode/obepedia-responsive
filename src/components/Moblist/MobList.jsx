import React from 'react';
import './mobilelist.css';
import akash from '../../images/institute.png';
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const MobList = (props) => {

    return (

        <>

            <div className="grid-card moblist">
                <div className="logo d-flex">
                    <img src={props.image} alt='akash' />
                    <div className="center">
                        <h5 className='name'><Link to={`/institute/${props.institute_id}`}>{props.name}</Link></h5>
                        <p>Rating 4.2 <span className='num'>(1562)</span> </p>
                        <span><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></span>
                    </div>
                    <h6> <BsHeart /></h6>
                    <h6> <BiDotsVerticalRounded /></h6>
                </div>
                <p className='location'> <GoLocation /> {props.location} </p>

                <p className='p-abt'> {props.about} </p>
                <div className="buttons d-none">
                    {/* <button className='view'>View Courses</button> */}
                    <button className='more'>
                        <Link to={`/institute/${props.institute_id}`}>Know More</Link>
                    </button>
                </div>
            </div>
        </>

    )
}

export default MobList