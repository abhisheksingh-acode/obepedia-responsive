import React, { useRef, useContext, useState, useEffect } from "react";
import "./institute.css";
import Rightside from "../../components/rightside/Rightside";
import logo from "../../images/white-logo.png";
import Navbar from "../../components/navbar/Navbar";
import Rating from "../../components/rating/Rating";
import { BiSearch } from "react-icons/bi";
import Banner from "../../components/banner/Banner";
import img from "../../images/banner4.png";
import akash from "../../images/institute.png";
import { AiOutlinePlus } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import { Link } from "react-router-dom";
import Faculty from "../../components/faculty/Faculty";
import Job from "../../components/job/Job";
import image from "../../images/post3.png";
import Table from "react-bootstrap/Table";
import Review from "../../components/review/Review";
import { AiFillStar } from "react-icons/ai";
import bann from "../../images/banner5.png";
import { tabledata, reviewdata } from "../../data";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import RatingContext from "../../components/RatingContext";

const Institute = () => {
  const { id } = useParams();
  const val = JSON.parse(localStorage.getItem("user"));
  let vid = false;
  let token = false;
  if (val) {
    let vid = val._id;
    let token = val.token;
  }

  const { ratingAverage, setRatingAverage } = useContext(RatingContext);

  //for scroll
  // const ref = useRef(null);
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behaviour: 'smooth' });
  // };
  const [Loading, setLoading] = useState(false);
  const colors = ["#65D370","#FC9C9C", "#FFBD3D"];

  const aboutToRef = useRef();

  const scrollToRef = useRef();

  const facultToRef = useRef();

  const galleryToRef = useRef();

  const jobToRef = useRef();

  const [Data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://jellyfish-app-4v5ou.ondigitalocean.app/user/institute/getinstitute/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const Follow = async (institute_id) => {
    try {
      if (!vid && !token) {
        alert("you are not logged in.");
      }

      setLoading(true);
      const data = {
        institute_id: id,
        user_id: vid,
      };
      const response = await fetch(
        `https://jellyfish-app-4v5ou.ondigitalocean.app/user/user_rights/postfollow/${vid}`,
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
      console.log(data.institute_id);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function Sliding_banner({ src }) {
    return (
      <div className="home-banner">
        <img style={{ height: "250px" }} src={src} alt="" />
      </div>
    );
  }

  const Values = (data) => {
    console.log(data);
  };

  return (
    Data !== null && (
      <React.Fragment>
        <div className="upsc-background">
          <Navbar logoimg={logo} />
        </div>

        {Data.institute_profile.map((item) => (
          <div className="instutute-page">
            <h4>{item.name}</h4>
            <div className="row">
              <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                <div className="leftside">
                  {/* search end*/}
                  {/* <Banner bannerimg={img} /> */}
                  <Sliding_banner src={item.sliding_banner} />
                  <h6>
                    <span>NEET </span> <span>JEE Main</span>{" "}
                    <span className="review">Write a review</span>
                  </h6>

                  <div className="d-flex overexp">
                    <img src={item.image} alt="akash" />
                    <div className="follow">
                      <h4>{item.name}</h4>
                      <span
                        onClick={() => Follow(item.institute_id)}
                        className="folbtn"
                      >
                        <AiOutlinePlus /> {Loading ? "Loading" : "Follow"}
                      </span>{" "}
                      <span>14 k Followers</span>
                    </div>

                    <div className="compare">
                      <p>
                        <span>{ratingAverage}</span> Rating (1562)
                      </p>
                      <button>
                        <Link to={`/compares/${item.institute_id}`}>
                          <TbGitCompare /> Compare
                        </Link>
                      </button>
                    </div>
                  </div>
                  {/* follow end*/}
                  <div className="tab-view">
                    <ul className="nav">
                      <li>
                        <Link
                          to=""
                          className="active"
                          onClick={() => aboutToRef.current.scrollIntoView()}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          onClick={() => scrollToRef.current.scrollIntoView()}
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          onClick={() => facultToRef.current.scrollIntoView()}
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          onClick={() => galleryToRef.current.scrollIntoView()}
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          onClick={() => jobToRef.current.scrollIntoView()}
                        >
                          Job Vacancies
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* tab-view end */}
                  <div className="tab-content">
                    <div className="about" ref={aboutToRef}>
                      <p>{item.about}</p>
                      <div className="video">
                        <iframe
                          width="100%"
                          height="350"
                          src="https://www.youtube.com/embed/lbW40hFgq4Y"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="course " ref={scrollToRef}>
                      <h4>Courses</h4>
                      <div className="scroll">
                        <Table>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Duration</th>
                              <th>Fee</th>
                              <th>Rating</th>
                              <th>Medium</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Data.course.map((val, key) => {
                              return (
                                <tr key={key}>
                                  <td>{val.course}</td>
                                  <td>{val.duration}</td>
                                  <td>{val.offline}</td>
                                  <td>
                                    <span>{val.rating ?? 0}</span>
                                  </td>
                                  <td>{val.medium}</td>
                                  <td>
                                    <Link to={`/course/${val._id}`}>View</Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </div>
                    </div>

                    <div className="faculty" ref={facultToRef}>
                      <h4>Faculty</h4>
                      <Faculty id={id} />
                    </div>
                    <div className="gallery" ref={galleryToRef}>
                      <h4>Gallery</h4>
                      <div className="row">
                        <div className="col-md-8">
                          <img src={image} alt="image1" className="gallery" />
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-12">
                              <img
                                src={image}
                                alt="image2"
                                className="gallery"
                                style={{ padding: "0 0 20px 0" }}
                              />
                            </div>
                            <div className="col-md-12">
                              <img
                                src={image}
                                alt="image3"
                                className="gallery"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="job-vacancy" ref={jobToRef}>
                      <h4>Job Vacancy</h4>
                      <Job id={id} />
                    </div>
                    <h4>Reviews </h4>
                    {Data.reviews.map((val, key) => {
                      return (
                        <div className="rev row pb-5" key={key}>
                          <div className="col-md-1 d-flex justify-content-center align-items-start">
                            <h6>{val.name[0]}</h6>
                          </div>
                          <div className="text col-md-10">
                            <h5 className="d-flex justify-content-between text-capitalize">
                              {val.name}{" "}
                              <span>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                              </span>
                            </h5>
                            <p className="desc">{val.desc}</p>
                            <p className="quali p-0 m-0">B.Tech. in Mechanical Engineering</p>
                          </div>
                          <div className="col-md-1"></div>
                        </div>
                      );
                    })}
                    {/* review description end*/}
                    <Review
                      reload={fetchData}
                      institute_id={item.institute_id}
                      courseid={"null"}
                      userid={id}
                    />
                  </div>
                  {/* tab-content end*/}
                </div>
                {/* leftside end*/}
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                <div className="rigthside">
                  <Rating
                    func={Values}
                    reload={fetchData}
                    institute_id={item.institute_id}
                  />
                  <Rightside />
                  <Banner bannerimg={bann} />
                </div>
              </div>
              {/* rigthside end*/}
            </div>
          </div>
        ))}
        <Footer />
      </React.Fragment>
    )
  );
};

export default Institute;
