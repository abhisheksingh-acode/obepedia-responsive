import React from 'react';
import './saved.css';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/green-logo.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Grid from '../../components/grid/Grid';
import Footer from '../../components/footer/Footer';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { IoMdRemove } from 'react-icons/io';
import Guide from '../../components/guide/Guide';

const Saved = () => {

    const val0 = localStorage.getItem('user')
    const userHere = JSON.parse(val0)
    const token = userHere.token;
    console.log(token);

    const { id } = useParams();
    const [Data, setData] = useState(null)
    const [Data2, setData2] = useState(null)
    const [Data3, setData3] = useState(null)

    async function fetchData() {


        const response2 = `https://jellyfish-app-4v5ou.ondigitalocean.app/user/user_rights/getfollow/${id}`
        const response  = `https://jellyfish-app-4v5ou.ondigitalocean.app/user/user_rights/getbookmark/${id}`
        const response3 = `https://jellyfish-app-4v5ou.ondigitalocean.app/user/user_rights/getsavedcourse/${id}`
        // const response = `http://127.0.0.1:3000/user/user_rights/getbookmark/639ec9a5e77a2cc4cc0b64ee`

        const getsaved = axios.get(response, { headers: { Authorization: `Bearer ${token}` } });
        const getfollowed = axios.get(response2, { headers: { Authorization: `Bearer ${token}` } });
        const getSC = axios.get(response3, { headers: { Authorization: `Bearer ${token}` } });

        axios.all([getsaved, getfollowed , getSC]).then(
            axios.spread((...allData) => {
                const allsaved = allData[0].data
                setData(() => allData[0].data)
                const allfollowed = allData[1].data
                setData2(()=>allData[1].data)

                const allsc = allData[2].data 
                setData3(()=>{
                    // console.log("respinse sc",allData[2].data);
                    return allData[2].data})
            })
        )
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="upsc-background">
                {/* <div className="logged"> */}
                    <Navbar logoimg={logo} />
                {/* </div> */}
            </div>
            <div className="saved-page">
                <Tabs
                    defaultActiveKey="saved"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3">
                    <Tab  eventKey="saved" title="Saved Institutes">
                        <div className="row ">
                            {Data !== null ?

                                Data.map(item => (
                                    <div className='col-md-4'>
                                        <Grid image={item.image} name={item.name} location={item.location} institute_id={item.institute_id} about={item.about} reload={fetchData} />
                                    </div>
                                )) :

                                <h1>there is no data</h1>

                            }
                        </div>
                        {/* <div className="row">
                            <div className="col-md-4">
                                <Grid />
                            </div>
                            <div className="col-md-4">
                                <Grid />
                            </div>
                            <div className="col-md-4">
                                <Grid />
                            </div>
                            <div className="col-md-4 col-12">
                                <Grid />
                            </div>
                            <div className="col-md-4 col-12">
                                <Grid />
                            </div>
                            <div className="col-md-4 col-12">
                                <Grid />
                            </div>
                        </div> */}
                    </Tab>
                    <Tab onClick={() => fetchData()} eventKey="follow" title="Followed Institutes">
                        <div className="row">
                            {Data2 !== null ?

                                Data2.map(item => (
                                    <div className='col-md-4'>
                                        <Grid image={item.image} name={item.name} location={item.location} institute_id={item.institute_id} about={item.about} reload={fetchData} />
                                    </div>
                                )) :

                                <h1>there is no data</h1>

                            }
                            {/* <div className="col-md-4">
                                <Grid />
                            </div>
                            <div className="col-md-4">
                                <Grid />
                            </div>
                            <div className="col-md-4">
                                <Grid />
                            </div> */}
                        </div>
                    </Tab>
                    <Tab onClick={() => fetchData()} eventKey="sc" title="Saved Courses">
                        <div className="row g">
                            {Data3 !== null ?

                                Data3.map(item => (
                                    <Guide id={item._id} name={item.course} />
                                    // <h1>{item.course}</h1>
                                )) :

                                <h1>there is no data</h1>

                            }
                            {/* <div className="col-md-4">
                                <Grid />
                            </div>
                            <div className="col-md-4">
                                <Grid />
                            </div>
                            <div className="col-md-4">
                                <Grid />
                            </div> */}
                        </div>
                    </Tab>
                </Tabs>
            </div>

            <Footer />
        </>
    )
}

export default Saved