import React from 'react';
import './vacancy.css';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/white-logo.png';
import Rightside from '../../components/rightside/Rightside';
// import List from '../../components/list/List';
import Filter from '../../components/filter/Filter';
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from 'react';
import axios from "axios";


const Vacancy = () => {


    // const VacancyList = [ 
    //     {
    //        name: 'Graphic Designer',
    //        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.',
    //        location: 'Delhi | Banglore | Pune | Mumbai | Chennai ',
    //        button: 'Details'
    //     },
    //     {
    //         name: 'Php Developer',
    //         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.',
    //         location: 'Delhi | Banglore | Pune | Mumbai | Chennai ',
    //         button: 'Details'
    //      },
    //      {
    //         name: 'React Developer',
    //         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.',
    //         location: 'Delhi | Banglore | Pune | Mumbai | Chennai ',
    //         button: 'Details'
    //      },
    //      {
    //         name: 'Angular Developer',
    //         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.',
    //         location: 'Delhi | Banglore | Pune | Mumbai | Chennai ',
    //         button: 'Details'
    //      }
    // ]
    

    const [Data, setData] = useState(null)

    async function fetchData() {
        try {
            const response = await axios.get("https://jellyfish-app-4v5ou.ondigitalocean.app/user/vacancy/allvacancies")
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])



    return Data !== null && (

        <>
            <div className="upsc-background">
                <Navbar logoimg={logo} />
            </div>


            <div className="vacancy-page pt-5">
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">

                        <Filter />
                        <div className="left">
                            <h4>Vacancies </h4>
                                {Data.map((val, key) => {
                                    return (
                                        <div className="list-item" key={key}>
                                        <h5 className='fw-bold text-capitalize'>{val.name}</h5>
                                       <p>{val.about}</p>
                                       <div className="d-flex justify-content-between">
                                       <p className='location'><GoLocation /> {val.location}</p>
                                       <button><Link to={`/vacancy-detail/${val._id}`}>Details</Link></button>
                                       </div>
                                       </div>
                                    )
                                })}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                        <div className="rigthside p-0 p-sm-5">
                            <Rightside />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Vacancy