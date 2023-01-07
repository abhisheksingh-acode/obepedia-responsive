import React from 'react';
import './grid.css';
import akash from '../../images/institute.png';
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

const Grid = (props) => {
    const val = localStorage.getItem('user')
    const user = JSON.parse(val)
    const id = user.user._id;
    const token = user.token;
    // console.log(id);

    const BookMarked = async (value) => {

        try {

            const data = {
                object_id: value,
                user_id: id
            }
            const response = await fetch(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/user_rights/postbookmark/${id}`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            alert(result)
            if (result) {
            props.reload()
            }

        } catch (error) {
            console.log(error)
        }


    }

    return (

        <>
            <div className="grid-card ">
                <div className="logo d-flex">
                    <img src={props.image} alt='akash' />
                    <div className="center">
                        <p>Rating 4.2 <span className='num'>(1562)</span> </p>
                        <span><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></span>
                    </div>
                    <h6 onClick={() => BookMarked(props.institute_id)}> <BsHeart /></h6>
                    <h6> <BiDotsVerticalRounded /></h6>
                </div>
                <h5 className='name'>{props.name}</h5>
                <p className='p-abt'>{props.about}</p>
                <p className='location'> <GoLocation /> {props.location} </p>
                <div className="buttons d-flex">
                    {/* <button className='view'>View Courses</button> */}
                    <button className='more'>
                        <Link to={`/institute/${props.institute_id}`}>Know More</Link>
                    </button>
                </div>
            </div>

        </>

    )
}

export default Grid