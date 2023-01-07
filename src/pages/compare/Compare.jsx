import React, { useState } from 'react';
import './compare.css';
import Card from '../../components/card/Card';
import logo from '../../images/white-logo.png';
import Navbar from '../../components/navbar/Navbar';
import image from '../../images/institute.png';
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../../components/footer/Footer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
import Cslider from '../../components/compare-slide/Cslider';
import { useEffect } from 'react';
import axios from 'axios';
// import { MDBSelect } from 'mdb-react-ui-kit';

const Compare = () => {

  //for popup
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const [Institute, setInstitute] = useState('')
  const [Course, setCourse] = useState('')
  const [Compare0, setCompare0] = useState('')

  useEffect(() => {
    axios
      .get(
        "https://jellyfish-app-4v5ou.ondigitalocean.app/user/institute/getallinstitute"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const GetCourse = async (id) => {
    setInstitute(id)
    try {
      const response2 = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/institute/course/getcourse/${id}`)
      setData2(response2.data)
      var insticourselen = (response2.data).length
      // console.log(response2.data)
    } catch (error) {
      console.error(error);
    }
  }

  const Compare = async () => {
    try {
      const compdata = await axios.get(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/compare/${Institute}/${Course}`)
      setCompare0(compdata.data)
      // console.log(compdata.data)

      setCourse('')
      setInstitute('')

      handleClose()
    } catch (error) {
      console.error(error);
    }
  }


  return (

    <>
      <div className="upsc-background">
        <Navbar logoimg={logo} />
      </div>

      <div className="compare-page">
        <h4>Compare Aakash Delhi Vs Insparc Technologies Pvt. Ltd.</h4>
        <div className="search">
          <input type="text" placeholder="Obepedia" />
          <span><BiSearch />
          </span>
        </div>

        <div className="d-flex gap">
          <Card onClick={handleShow2} cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Modify Selection' />
          <div className="card-item">

            <span className='plus'><AiOutlinePlus onClick={handleShow} /></span>
          </div>
        </div> {/* gap end */}

        <div className="row">
          <div className="col-md-4">
            <h5 className='titile'>Institute Information</h5>
          </div>
          <div className="col-md-4">
            <ul>
              <li> <p>Established Year</p> 1986</li>
              <li> <p>Ownership </p> Public/Government</li>
              <li> <p>Total Courses </p> 37</li>
              <li> RBI Grade B, Phase 1 complete 2023</li>
            </ul>
          </div>
          <div className="col-md-4">
            {Compare0.institute?.map(item => (
              <ul>
                <li><p>name:</p>{item.name}</li>
                <li><p>Id :</p>{item.institute_id}</li>
                <li><p>about :</p>{item.about}</li>
                <li><p>location :</p>{item.location}</li>
              </ul>
            ))}
          </div>
        </div>{/* 1st row end */}
        <div className="row">
          <div className="col-md-4 col-8">
            <h5 className='titile'>Course Details</h5>
          </div>
          <div className="col-md-8 col-8">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header></Accordion.Header>
                <Accordion.Body>
                  {Compare0.course?.map(item => (
                    <ul>
                      <li><p>name:</p>{item.course}</li>
                      <li><p>Duration :</p>{item.duration}</li>
                      <li><p>Medium : </p>{item.medium}</li>
                    </ul>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>{/* 2nd row end */}
        <div className="row">
          <div className="col-md-4 col-8">
            <h5 className='titile'>Course Fees</h5>
          </div>
          <div className="col-md-8 col-8">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header></Accordion.Header>
                <Accordion.Body>
                  {Compare0.course?.map(item => (
                    <ul>
                      <li><p>Offline Fees :</p>{item.offline}</li>
                      <li><p>Online Fees :</p>{item.online}</li>
                    </ul>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>{/* 3rd row end */}
        <div className="row">
          <div className="col-md-4 col-8">
            <h5 className='titile'>Infrastructure & Facilities</h5>
          </div>
          <div className="col-md-8 col-8">
            <Accordion>
              <Accordion.Item eventKey="0"  >
                <Accordion.Header></Accordion.Header>
                <Accordion.Body>
                  {Compare0.institute?.map(item=>(
                    <p>{item.about}</p>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>{/* 3rd row end */}

        <div className="choosecard">
          <h5>If you had to choose any one of these courses which one would you prefer?</h5>
          <div className="d-flex choose">
            <Card cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Select' />

            <Card cardimg={image} title='Aakash Institute' paragraph='RBI Grade B, Phase 1 complete 2023' location='Delhi' btn='Selected' />
          </div>
        </div>{/* choosecard end */}

      </div>{/* compare-page end */}


      <div className="comparison">
        <h5>Popular comparisons with NIFT Delhi</h5>
        <Cslider />
      </div>{/* comparison end */}




      <Modal show={show} onHide={handleClose} className='compare-popup'>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <div class="mb-3">
            <label htmlFor='institutes' class="form-label"><h5>Institute Selection</h5></label>
            <select onChange={(e) => GetCourse(e.target.value)} class="form-select form-select-lg" name="" id="institutes">
              <option selected>Select one</option>
              {data.map(item => (
                <option value={item.institute_id}>{item.name}</option>
              ))}
            </select>
          </div>

          <div class="mb-3">
            <label htmlFor='courses' class="form-label"><h5>Course Selection</h5></label>
            <select onChange={(e) => setCourse(e.target.value)} class="form-select form-select-lg" name="" id="courses">
              <option selected>Select one</option>
              {data2.map(item => (
                <option value={item._id}>{item.course}</option>
              ))}
            </select>
          </div>

          <Button variant="primary" onClick={() => Compare()}>
            Compare
          </Button>
        </Modal.Body>
      </Modal>


      <Modal show2={show2} onHide={handleClose} className='compare-popup'>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <div>number2</div>
          <div class="mb-3">
            <label htmlFor='institutes0' class="form-label"><h5>Institute Selection</h5></label>
            <select onChange={(e) => GetCourse(e.target.value)} class="form-select form-select-lg" name="" id="institutes0">
              <option selected>Select one</option>
              {data.map(item => (
                <option value={item.institute_id}>{item.name}</option>
              ))}
            </select>
          </div>

          <div class="mb-3">
            <label htmlFor='courses0' class="form-label"><h5>Course Selection</h5></label>
            <select onChange={(e) => setCourse(e.target.value)} class="form-select form-select-lg" name="" id="courses0">
              <option selected>Select one</option>
              {data2.map(item => (
                <option value={item._id}>{item.course}</option>
              ))}
            </select>
          </div>

          <Button variant="primary" onClick={() => Compare()}>
            Compare
          </Button>
        </Modal.Body>
      </Modal>

      <Footer />

    </>

  )
}

export default Compare










