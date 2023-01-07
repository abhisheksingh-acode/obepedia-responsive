import React from 'react';
import './mobjob.css';
import { BsBookmark } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TbTie } from "react-icons/tb";

const MobJob = () => {

    return (

        <>
            <div className="mob-vacancy">
                <div className="job-card">
                    <div className="top d-flex">
                        <h5>G</h5>
                        <div className="title">
                            <h6>Graphic Designer</h6>
                            <span><GoLocation /> Delhi</span>
                            <span>  <TbTie /> Full Time</span>
                        </div>
                        <p><BsBookmark />
                            <AiOutlineShareAlt /></p>
                    </div>
                    <p className='location'> <GoLocation /> Delhi <span> | </span> Banglore <span> | </span> Pune <span> | </span> Mumbai</p>

                    <p className='parah'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </>

    )
}

export default MobJob