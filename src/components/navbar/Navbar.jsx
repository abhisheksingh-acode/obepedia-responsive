import React from "react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Exammenu from "../../components/nav/Exammenu";
import moblogo from "../../images/green-logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import MobNav from "../Mobnav/MobNav";
import Loginstd from "../Studdrop/Loginstd";
import Register from "../Studdrop/Register";
const logoD = require("../../images/logo.png");
// import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = (props) => {
  const val = localStorage.getItem("user");
  const user = JSON.parse(val);
  if (user) {
    console.log(user);

    // console.log(user.user._id);
    var id = user.user._id;
  }

  const navigate = useNavigate();

  const DelToken = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <MobNav />

      <div className="menu" id="navbar">
        <header id="topnav" className="defaultscroll scroll-active">
        <div className="offcanvas offcanvas-start shadow-sm" style={{ width: '75%' }}     id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">
                                <div className="logo">
                                    <NavLink to="/">
                                        <img src={moblogo} alt="moblogo" />
                                    </NavLink>
                                </div>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <NavLink to="/" className="nav-link-offcanvas  text-decoration-none d-block">Home</NavLink>
                            <NavLink to=" " className="nav-link-offcanvas  text-decoration-none d-block">Exams</NavLink>
                            <NavLink to=" " className="nav-link-offcanvas  text-decoration-none d-block">Institutes</NavLink>
                            <NavLink to=" " className="nav-link-offcanvas  text-decoration-none d-block">Suggestions</NavLink>
                            <NavLink to=" " className="nav-link-offcanvas  text-decoration-none d-block">Write a Review</NavLink>
                            <NavLink to="" className="nav-link-offcanvas  text-decoration-none d-block">Careers</NavLink>
                            <NavLink to="/listing" className="nav-link-offcanvas  text-decoration-none d-block">Listing</NavLink>
                            <NavLink to="/vacancy" className="nav-link-offcanvas  text-decoration-none d-block">vacancy</NavLink>

                            <div className='divider-heading'>My Account</div>
                            <div className="divider-line"></div>
                            {
                                user ?
                                    <>

                                        <NavLink to={`/profile/${id}`} className="nav-link-offcanvas  text-decoration-none d-block">Profile</NavLink>
                                        <NavLink to={`/saved/${id}`} className="nav-link-offcanvas  text-decoration-none d-block">Saved Institute</NavLink>
                                    </> :
                                    <> <NavLink to="/student-login" className="nav-link-offcanvas  text-decoration-none d-block"> Login</NavLink>
                                        <NavLink to="/student-register" className="nav-link-offcanvas  text-decoration-none d-block"> Register</NavLink>
                                    </>
                            }
                            <div className="divider-line"></div>
                            <NavLink to="#" className="nav-link-offcanvas  text-decoration-none d-block"> About us</NavLink>
                            <NavLink to=" " className="nav-link-offcanvas  text-decoration-none d-block"> Contact us</NavLink>
                            {
                              user? <><button className="signout" onClick={() => DelToken()} >Signout</button></> : ''
                            }
                        </div>

                    </div>

          <div className="header-top">
            {/* <div className="container"> */}
            <div className="header">
              <div className="navbar d-flex justify-content-between align-item-center px-2 py-0">
                <button
                  className="menu d-lg-none d-flex btn border-0"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <div className="sandwich top rounded-pill me-auto"></div>
                  <div className="sandwich middle rounded-pill me-auto"></div>
                  <div className="sandwich bottom rounded-pill me-auto"></div>
                </button>
                <div className="logo">
                  <NavLink to="/" className="logo">
                    <img src={logoD} alt="logo" />
                  </NavLink>
                </div>
                
                <div className="d-flex justify-content-between align-items-center navmenu" style={{width:"calc(100% - 200px)"}}>
                  <div className="center">
                      <Exammenu />
                  </div>

                  {user ? (
                    <div className="right">
                      <div className="logged-person">
                        <IoIosNotificationsOutline />
                        <Dropdown className="nav-link-lg me-4 text-decoration-none d-none d-lg-inline-block">
                          <Dropdown.Toggle>P</Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Link to={`/profile/${id}`}> Profile </Link>{" "}
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to={`/saved/${id}`}>
                                {" "}
                                Saved Institutes{" "}
                              </Link>{" "}
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/" onClick={() => DelToken()}>
                                {" "}
                                Sign out{" "}
                              </Link>{" "}
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  ) : (
                    <div className="right">
                      {/* <div className="login">
                                                <Loginstd />
                                            </div>

                                            <div className="register nav-link-lg me-5 text-decoration-none d-none d-lg-inline-block">
                                               <button className='started'> Get Started</button>
                                            </div> */}
                      <Loginstd />
                    </div>
                  )}

                  {/* <div className="logged-person">
                                        <IoIosNotificationsOutline />
                                        <Dropdown className="nav-link-lg me-4 text-decoration-none d-none d-lg-inline-block">
                                            <Dropdown.Toggle >
                                                P
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item><Link to={`/profile/${id}`}> Profile </Link>  </Dropdown.Item>
                                                <Dropdown.Item> <Link to='/reviews'> Reviews </Link>   </Dropdown.Item>
                                                <Dropdown.Item><Link to={`/saved/${id}`}> Saved Institutes </Link> </Dropdown.Item>
                                                <Dropdown.Item><Link to='/followed'> Followed Institutes </Link> </Dropdown.Item>
                                                <Dropdown.Item><Link to='/' onClick={() => DelToken()} > Sign out </Link> </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div> */}
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
        </header>
      </div>
      {/* header end */}
    </React.Fragment>
  );
};

export default Navbar;
