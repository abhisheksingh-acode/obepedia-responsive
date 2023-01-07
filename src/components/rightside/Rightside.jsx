
import React from 'react';
import './rightside.css';
import { Link } from 'react-router-dom';
import banner from '../../images/banner1.png';
import Post from '../../components/post/Post';
import banner1 from '../../images/banner2.png';
import { useState, useEffect } from 'react';
import axios from "axios";
// import { useParams } from 'react-router-dom';
// import Rating from '../rating/Rating';

const Rightside = () => {

    const [Data, setData] = useState(null)
    const [Data2, setData2] = useState(null)
    const [Data3, setData3] = useState(null)

    async function fetchData() {
        const response =  `https://jellyfish-app-4v5ou.ondigitalocean.app/user/vacancy/allvacancies?_limit=2`  
        const response2 = `https://jellyfish-app-4v5ou.ondigitalocean.app/user/institute/getallinstitute`
        const response3 = `https://jellyfish-app-4v5ou.ondigitalocean.app/user/sidebar`

        const getVacancy = axios.get(response);
        const getInstitute = axios.get(response2);
        const getBanner = axios.get(response3);

        axios.all([getVacancy, getInstitute, getBanner]).then(
            axios.spread((...allData) => {
                const allVacancyList = allData[0].data
                const allInstituteList = allData[1].data
                const allBanner = allData[2].data
                setData(allVacancyList)
                setData2(allInstituteList)
                setData3(allBanner)
            })
        )

    }

    useEffect(() => {
        fetchData();
    }, [])


    return Data !== null && Data2 !== null && Data3 !== null && (

        <div className="sidebar">
            {/* <Rating /> */}
            <div className="heading">
                <h4>Top Viewed Institute</h4>
                <hr />
            </div>
            <ul className='instname list-unstyled'>
                {Data2.map(item => (
                    <li><Link to={`/institute/${item.institute_id}`}> {item.name}</Link></li>
                ))}
                {/* <li><Link to=''> 2.Vajiram & Ravi</Link></li>
                <li><Link to=''> 3.Drishti IAS Coaching Center</Link></li>
                <li><Link to=''> 4.Rau’s IAS Study Circle</Link></li>
                <li><Link to=''> 5.Chanakya IAS Academy</Link></li> */}
            </ul>

            <div className="banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="heading">
                <h4>Top Rated Institute</h4>
                <hr />
            </div>
            <ul className='instname list-unstyled'>
                {Data2.map(item => (
                    <li><Link to={`/institute/${item.institute_id}`}> {item.name}</Link></li>
                ))}
                {/* <li><Link to=''> 1.Vajirao and Reddy Institute</Link></li>
                <li><Link to=''> 2.Vajiram & Ravi</Link></li>
                <li><Link to=''> 3.Drishti IAS Coaching Center</Link></li>
                <li><Link to=''> 4.Rau’s IAS Study Circle</Link></li>
                <li><Link to=''> 5.Chanakya IAS Academy</Link></li> */}
            </ul>
            <div className="heading">
                <h4>Popular Posts</h4>
                <hr />
            </div>

            <Post />

            {Data3.map(item => (
                <div onClick={() => window.open(`${item.link}`)} className="banner">
                    <img src={item.banner} alt="banner" />
                </div>
            ))}

            <div className="heading">
                <h4>Recent Jobs</h4>
                <hr />
            </div>
            <ul className='instname list-unstyled'>
                {Data.map(item => (
                    <li><Link to={`/vacancy-detail/${item._id}`}>{item.name}</Link></li>
                ))}
                {/* <li><Link to=''> English Faculty</Link></li>
                <li><Link to=''>Counseller </Link></li>
                <li><Link to=''> Receptionist</Link></li>
                <li><Link to=''> Hindi Faculty | General Aptitute Faculty</Link></li> */}
            </ul>

        </div>

    )
}

export default Rightside

