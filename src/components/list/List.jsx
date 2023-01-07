import React from 'react';
import './list.css';
import akash from '../../images/institute.png';
import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const List = () => {

    return (

        <>
            <div className="list-page">
                <div className="list-card d-flex">
                    <img src={akash} alt='akash' />
                    <div className="center">
                        <h5>Aakash Institute</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='location'> <GoLocation /> Delhi <span> | </span> Banglore <span> | </span> Pune <span> | </span> Mumbai <span> | </span> Chennai</p>

                    </div>
                    <div className="left">
                        <h6> <BsHeart /> <BiDotsVerticalRounded /></h6>
                        <p>Rating 4.2 <span className='num'>(1562)</span> </p>
                        <span><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></span>
                    </div>
                </div>

                <div className="buttons d-flex">
                    {/* <button className='view'>View Courses</button> */}
                    <button className='more'>
                        <Link to='/institute'>Know More</Link>
                    </button>
                </div>
            </div>


        </>

    )
}

export default List;





