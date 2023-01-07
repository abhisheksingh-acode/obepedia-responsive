import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaUserGraduate } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import fb from "../../images/facebk.png";
import goog from "../../images/Google.png";
import stdimg from "../../images/std-login.png";
import instimg from "../../images/inst-log.png";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Loginstd = () => {
  const val = localStorage.getItem("user");
  const user = JSON.parse(val);
  if (user) {
    console.log(user.user._id);
    var id = user.user._id;
  }

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for institute
  const [lgShow, setLgShow] = useState(false);

  // Login Material
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PhoneReg, setPhoneReg] = useState("");
  const [NameReg, setNameReg] = useState("");
  const [EmailReg, setEmailReg] = useState("");
  const [PasswordReg, setPasswordReg] = useState("");

  const handleLogin = async () => {
    try {
      console.log(Email, Password);
      const response = await fetch(
        "https://jellyfish-app-4v5ou.ondigitalocean.app/user/login",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: Email,
            password: Password,
          }),
        }
      );

      const result = await response.json();
      console.log("response______", result);
      const token = result.token;
      if (!result.token) {
        alert("Enter Correct Details!");
      } else {
        //   console.log("else_condition______");
        localStorage.setItem("user", JSON.stringify(result));
        navigate(`/profile/${id}`);
      }

      // console.log(result, token);
    } catch (error) {
      console.log("login error______", error);
    }
  };

  const handleSignup = async () => {
    if (EmailReg && PasswordReg.length > 8) {
      // console.log(Email, Password);
      const response = await fetch(
        "https://jellyfish-app-4v5ou.ondigitalocean.app/signup",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: EmailReg,
            password: PasswordReg,
            role: "user",
            mobile: 1000,
            name: "name",
          }),
        }
      );

      const result = await response.json();
      alert("Registration Succesful! now please login");
      setEmailReg("");
      setPhoneReg("");
      setNameReg("");
      setPasswordReg("");
      navigate("/");
      handleClose();
    } else {
      alert("enter correct email and strong password!");
    }
  };

  return (
    <React.Fragment>
      <div className="drop stdpopup">
        <div className="login">
          <button className="login" onClick={handleShow}>
            Login
          </button>
        </div>
        <div className="register nav-link-lg me-5 text-decoration-none d-none d-lg-inline-block">
          <button className="started" onClick={() => setLgShow(true)}>
            {" "}
            Get Started
          </button>
        </div>
      </div>
      {/* <Dropdown className="nav-link-lg me-5 text-decoration-none d-none d-lg-inline-block">
                    <Dropdown.Toggle id="dropdown-basic">
                        Login
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ padding: '0px', borderRadius: '0px' }}>
                        <Dropdown.Item onClick={handleShow} className='dd-a' > Login as Student  </Dropdown.Item>
                       
                        <Dropdown.Item onClick={() => setLgShow(true)} className='dd-a' >Register as Student </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

      {/* login as student */}
      <Modal show={show} onHide={handleClose} className="login-popup">
        <Modal.Body className="login-form">
          <div className="row">
            <div className="col-md-6 pe-0">
              <div className="form-img">
                <img src={stdimg} alt="login" />
              </div>
            </div>
            <div className="col-md-6 ps-0">
              <Form>
                <Modal.Header closeButton>
                  <h4>Login as Student</h4>
                </Modal.Header>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                    id="number"
                    placeholder=" Mobile Number Or Email ID"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    id="Password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <small>Forgot Password</small>
                </Form.Group>
                <button onClick={handleLogin} type="button" className="signbtn">
                  Sign In{" "}
                </button>
                <Form.Group className="mb-4">
                  <Link to="/student-login" className="acct">
                    Already you have an account ?
                  </Link>
                </Form.Group>
                <p className="with">Or Sign In with</p>
                <div className="social">
                  <img src={goog} alt="google" />
                  <img src={fb} alt="facebook" />
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* register as student */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        className="login-popup"
      >
        <Modal.Body className="login-form">
          <div className="row">
            <div className="col-md-6 pe-0">
              <div className="form-img">
                <img src={instimg} alt="login" />
              </div>
            </div>
            <div className="col-md-6 ps-0">
              <Form>
                <Modal.Header closeButton>
                  <h4>Register as Student</h4>
                </Modal.Header>

                <Form.Group className="mb-4">
                  <Form.Control
                    id="number"
                    onChange={(e) => setPhoneReg(e.target.value)}
                    value={PhoneReg}
                    placeholder="Mobile Number"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    id="name"
                    onChange={(e) => setNameReg(e.target.value)}
                    value={NameReg}
                    placeholder="Full Name"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    id="email"
                    onChange={(e) => setEmailReg(e.target.value)}
                    value={EmailReg}
                    placeholder="Email ID"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    id="Password"
                    onChange={(e) => setPasswordReg(e.target.value)}
                    value={PasswordReg}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="d-flex justify-content-between align-items-center mb-1">
                  <small className="text-black">
                    {" "}
                    <HiOutlineLocationMarker className="me-2" /> Delhi
                  </small>
                  <small>
                    <Link to="#" className="acct">
                      Change{" "}
                    </Link>
                  </small>
                </Form.Group>
                <button
                  type="button"
                  onClick={handleSignup}
                  className="signbtn"
                >
                  {" "}
                  Register{" "}
                </button>
                <Form.Group className="mb-4">
                  <Link to="/student-login" className="acct">
                    Login{" "}
                  </Link>
                </Form.Group>
                <p className="with"> Or Register In with </p>
                <div className="social">
                  <img src={goog} alt="google" />
                  <img src={fb} alt="facebook" />
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Loginstd;
