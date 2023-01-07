import React, { useState, useEffect, useContext } from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
// import homeimg from '../../images/home.png';
import Rightside from "../../components/rightside/Rightside";
import Footer from "../../components/footer/Footer";
import banner3 from "../../images/banner3.png";
import banner4 from "../../images/banner4.png";
// import Accordion from 'react-bootstrap/Accordion';
import logo from "../../images/white-logo.png";
import Accordion from "../../components/accordion/Accordion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import MobNav from "../../components/Mobnav/MobNav";
import axios from "axios";
import MyBackgroundImage from "../../images/image3.png";
import { Button } from "react-bootstrap";

import SearchContext from "../../context/SearchContext";
import { FaSearchengin } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate("");

  const [Data, setData] = useState(null);
  // const [Institute, setInstitute] = useState('')
  // const [Location, setLocation] = useState('')

  const { search, setSearch } = useContext(SearchContext);

  // const Print = () => {
  //   navigate(`/listing/${Institute}/${Location}`);
  // };

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://jellyfish-app-4v5ou.ondigitalocean.app/user/home/homepage"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    Data !== null && (
      <>
        <MobNav />
        <div className="home-background">
          <Navbar logoimg={logo} />
          {/* <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="home-heading">
                <h1>Get Best Offers on   <br /> your Coaching Class</h1>

                <div className="search">
                  <input type="text" placeholder="Obepedia" />
                  <span>
                    <Link to='/upsc'>
                      <CgSearch />
                    </Link>
                  </span>

                </div>

              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="home-img">
                <div className="review">
                  <GoPencil /> Write a review
                </div>
                <img src={homeimg} alt={homeimg} />
              </div>
            </div>
          </div>
        </div> */}
          <div
            className="home-banner"
            style={{
              backgroundImage: `url(${MyBackgroundImage})`,
              // backgroundImage: `url(${externalImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "400px",
            }}
          >
            <div className="container">
              <div className="home-content">
                <h3 className="text-center">
                  Get Best Offers on your Coaching Class
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="searches">
                  <div className="srch">
                    <span>
                      <Link to="">
                        <CgSearch />
                      </Link>
                      <input
                        onChange={(e) =>
                          setSearch({ ...search, name: e.target.value })
                        }
                        value={search.name}
                        type="text"
                        placeholder="Search Intitute"
                      />
                    </span>
                  </div>
                  <div className="srch">
                    <span>
                      <Link to={``}>
                        <HiOutlineLocationMarker />
                      </Link>
                      <input
                        onChange={(e) =>
                          setSearch({ ...search, location: e.target.value })
                        }
                        value={search.location}
                        type="text"
                        placeholder="Location"
                      />
                    </span>
                  </div>
                  <div className="button">
                    <Link to={`listing`}>
                      {" "}
                      <Button>Search</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* home banner end */}
        <div className="home2">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
              {Data.map((item) => (
                <div className="leftside">
                  <h3>About Obe Labs</h3>
                  <p>{item.about}</p>
                  <div className="video">
                    <iframe
                      width="100%"
                      height="350"
                      src="https://www.youtube.com/embed/lbW40hFgq4Y"
                      title="YouTube video player"
                    />
                    {/* <video controls>
                <source src='https://www.youtube.com/embed/lbW40hFgq4Y' type='video/mp4' />
              </video> */}
                  </div>
                  <h3>Our Purpose</h3>
                  <p>L{item.purpose}</p>
                  <div className="banner">
                    <img src={banner3} alt="banner3" />
                  </div>
                  <h3>Our Aim</h3>
                  <p>{item.aim}</p>

                  <Accordion />

                  <div className="banner">
                    <img src={banner4} alt="banner4" />
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
              <div className="rigthside">
                <Rightside />
              </div>
            </div>
          </div>
        </div>
        {/* right side end */}
        <Footer />
      </>
    )
  );
};

export default Home;
