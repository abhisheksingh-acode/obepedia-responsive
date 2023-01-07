import React, { useContext, useState } from "react";
import "./guide.css";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useParams } from "react-router-dom";
import RatingContext from "../RatingContext";

const Courselogo = require("../../images/upsc.png");

const Guide = (props) => {
  const { id } = useParams();
  const val = JSON.parse(localStorage.getItem("user"));
  const vid = val.user._id;
  const token = val.token;
  const { ratingAverage, setRatingAverage } = useContext(RatingContext);
  const BookMarked = async (value) => {
    try {
      const data = {
        object_id: id,
        user_id: vid,
      };
      const response = await fetch(
        `https://jellyfish-app-4v5ou.ondigitalocean.app/user/user_rights/postbookmark/${vid}`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      alert("Couse saved");
      // if (result) {
      // props.reload()
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="guide">
        <div className="row heading">
          <div className="left col-md-1">
            <img
              src={Courselogo}
              alt="course-img"
              style={{ width: "120px", height: "auto" }}
            />
          </div>
          <div className="left col-md-7 ps-md-5">
            <h4>
              {props.name
                ? props.name
                : `UPSC CAPF (AC) 2022 Result Soon : PST/PET Dates, Exam Centre, Syllabus, Exam Pattern & Latest News`}
            </h4>
            <p>
              <span>{!ratingAverage ? 0 : ratingAverage}</span> Rating (
              {ratingAverage ? 0 : ratingAverage})
            </p>
            <span>NEET</span> <span>JEE Main</span>{" "}
            <span className="review">Write a review</span>
          </div>
          <div className="mt-5 mt-md-0 position-relative right col-md-4">
            <h6>
              <FaRegBookmark onClick={() => BookMarked(props.id)} />
              <AiOutlineShareAlt />
            </h6>
            <button>Download Guide</button>
          </div>
        </div>
      </div>
      {/* guide end*/}
    </>
  );
};

export default Guide;
