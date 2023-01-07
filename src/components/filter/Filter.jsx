import React, { useState, useContext } from "react";
import "./filter.css";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiGrid } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import Accordion from "react-bootstrap/Accordion";
import { FaAngleDown } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { AiFillStar } from "react-icons/ai";
import SearchContext from "../../context/SearchContext";

const Filter = ({ val }) => {
  // const [centredModal, setCentredModal] = useState(false);
  // const toggleShow = () => setCentredModal(!centredModal);

  const { search, setSearch } = useContext(SearchContext);

  // for filter
  const [show, toggleShows] = useState(false);

  return (
    <>
      <div className="d-flex PC-filter flex-column flex-sm-row">
        <div className="left">
          <button className="filt-btn" onClick={() => toggleShows(!show)}>
            {" "}
            Filters <FaAngleDown />{" "}
          </button>
          {show && (
            <div className="filt-content">
              <h5>Filters</h5>
              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>Courses</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`reverse-${type}`}>
                          <Form.Check
                            className="mb-3"
                            reverse
                            label="JEE Advance"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-1`}
                          />
                          <Form.Check
                            className="mb-3"
                            reverse
                            label="IIT"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-2`}
                          />
                          <Form.Check
                            className="mb-3"
                            reverse
                            label="BITSAT"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-3`}
                          />
                          <Form.Check
                            reverse
                            label="GATE"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-4`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Header>City</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div key={`reverse-${type}`}>
                          <Form.Check
                            className="mb-3"
                            reverse
                            label="Delhi"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-1`}
                          />
                          <Form.Check
                            className="mb-3"
                            reverse
                            label="Mumbai"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-2`}
                          />
                          <Form.Check
                            className="mb-3"
                            reverse
                            label="Kolkata"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-3`}
                          />
                          <Form.Check
                            className="mb-3"
                            reverse
                            label="Banglore"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-4`}
                          />
                          <Form.Check
                            className="mb-3"
                            reverse
                            label="Pune"
                            name="group1"
                            type={type}
                            id={`reverse-${type}-4`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Header>Ratings</Accordion.Header>
                  <Accordion.Body>
                    <div className="rating">
                      <AiFillStar className="color" />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <div className="range">
                      {" "}
                      <Form.Range />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          )}

          <div className="search">
            <input
              type="text"
              value={val}
              onChange={(e) => setSearch({ ...search, name: e.target.value })}
              placeholder="Obepedia"
            />
            <span>
              <BiSearch />
            </span>
          </div>
        </div>

        <div className="right">
          <BiGrid />
          <AiOutlineUnorderedList />

          <Dropdown className="d-lg-inline-block d-none dropdown me-0 me-5 me-sm-5 nav-link-lg text-decoration-none">
            <span> Sort by </span>
            <Dropdown.Toggle id="dropdown-basic">Relevence</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> Relevence 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2"> Relevence 2 </Dropdown.Item>
              <Dropdown.Item href="#/action-2"> Relevence 3 </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Filter;
