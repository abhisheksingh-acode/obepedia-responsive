import React, { useState } from "react";
import "./exammenu.css";
import { NavLink } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import { FaAngleRight } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";

const Exammenu = () => {
  const [Data, setData] = useState(null);
  const [result, setResult] = useState(false);

  const [search, setSearch] = useState("");

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://jellyfish-app-4v5ou.ondigitalocean.app/user/category/getcategory_details"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    //fetch request js?

    if (search.length > 0) {
      setResult(false);
    }

    if (search && search.length > 0) {
      (async () => {
        try {
          const rawResponse = await fetch(
            `https://jellyfish-app-4v5ou.ondigitalocean.app/user/search/${search}`,
            {
              method: "get",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          const content = await rawResponse.json();
          console.log(content);
          setResult(() => content);
        } catch (error) {
          setResult(false);
        }
      })();
    } else {
      setResult(false);
    }
  }, [search]);

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // // For Suggestion form
  // const [Email, setEmail] = useState('')
  // const [Name, setName] = useState('')
  // const [Number, setNumber] = useState('')
  // const [Message, setMessage] = useState('')

  // const handleSent = async () => {
  //     // console.log(Email, Name, Message, Number);
  //     try {
  //         const response = await fetch('https://jellyfish-app-4v5ou.ondigitalocean.app/user/suggestion_form/post_suggestion', {
  //             method: "post",
  //             headers: {
  //                 Accept: "application/json",
  //                 "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //                 email: Email,
  //                 name: Name,
  //                 number: Number,
  //                 description: Message
  //             })
  //         })

  //         const result = await response.json();

  //         alert('your response has been shared!')
  //         setMessage('')
  //         setName('')
  //         setNumber('')
  //         setEmail('')
  //         handleClose();

  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  return (
    Data !== null && (
      <>
        <div className="menudropdown1" style={{ lineHeight: "40px" }}>
          <ul>
            <li>
              <NavLink
                to="/listing"
                className="nav-link-lg me-5 text-decoration-none d-none d-lg-inline-block"
              >
                Exams
              </NavLink>

              {/*<ul>
                {Data.map((item) => (
                  <li>
                    {item.category_name} <FaAngleRight />
                    <ul>
                      <li>Civil Services 1</li>
                      <li>Civil Services 2</li>
                      <li>Civil Services 3</li>
                    </ul>
                  </li>
                ))}
                </ul>*/}
            </li>

            <li>
              <NavLink
                to="/listing"
                variant="primary"
                className="nav-link-lg me-5 text-decoration-none d-none d-lg-inline-block register"
              >
                Institute
              </NavLink>
            </li>
            <li>
              <div className="search">
                <input
                  type="text"
                  onInput={(e) => setSearch(e.target.value)}
                  placeholder="Obepedia Search Institute, Exam & more"
                />
                <span>
                  <BiSearch />
                </span>

                {result && (
                  <>
                    <div className="floatingSearch">
                      {result.institute.map((el) => {
                        return (
                          <div>
                            <NavLink
                              variant="primary"
                              className={"link"}
                              to={`/institute/${el.institute_id}`}
                              style={({ isActive }) => ({
                                color: "#00f",
                                padding: "5px 10px",
                              })}
                            >
                              {el.name}
                            </NavLink>
                          </div>
                        );
                      })}
                      {result.course_list.map((el) => {
                        return (
                          <div>
                            <NavLink
                              variant="primary"
                              className={"link"}
                              to={`/course/${el._id}`}
                              style={({ isActive }) => ({
                                color: "#00f",
                                padding: "5px 10px",
                              })}
                            >
                              {el.course}
                            </NavLink>
                          </div>
                        );
                      })}
                      {result.vacancy.map((el) => {
                        return (
                          <div>
                            <NavLink
                              variant="primary"
                              className={"link"}
                              to={`/vacancy-detail/${el._id}`}
                              style={({ isActive }) => ({
                                color: "#00f",
                                padding: "5px 10px",
                              })}
                            >
                              {el.name}
                            </NavLink>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* suggestion modal popup start */}
        {/* <Modal show={show} onHide={handleClose} className='suggestion-box'>
                <Modal.Header closeButton>
                    <Modal.Title>Suggestion Box</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-4" controlId="FormInput">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                                onChange={(e) => setName(e.target.value)} value={Name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="FormInput">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)} value={Email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="FormInput">
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                autoFocus
                                onChange={(e) => setNumber(e.target.value)} value={Number}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="FormTextarea">
                            <Form.Control as="textarea" rows={4}
                                placeholder="Type Message"
                                onChange={(e) => setMessage(e.target.value)} value={Message}
                            />
                        </Form.Group>
                    </Form>

                    <Button variant="primary" onClick={handleSent}>
                        Send Suggestion
                    </Button>
                </Modal.Body>
            </Modal> */}
      </>
    )
  );
};

export default Exammenu;
