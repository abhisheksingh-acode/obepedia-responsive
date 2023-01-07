import React from 'react';
import './userdetails.css';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/green-logo.png';

import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


const UserDetails = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'))
    const token = user.token

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState('')
    const [Address, setAddress] = useState('')
    const [DOB, setDOB] = useState('')
    const [Photo, setPhoto] = useState('')
    const [College, setCollege] = useState('')
    const [School, setSchool] = useState('')
    const [Medium, setMedium] = useState('')
    const [Age, setAge] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Major, setMajor] = useState('')
    const [Stream, setStream] = useState('')

    const { id } = useParams();

    const handleSent = async () => {
// console.log({
//     userame: Name,
//             email: Email,
//             number: Number,
//             adddress: Address,
//             dob: DOB,
//             photo: "photuuu",
//             school: School,
//             college: College,
//             medium: Medium,
//             age: Age,
//             city: City,
//             state: State,
//             major: Major,
//             stream: Stream,
//             ref_id: id
// });
        try {
            const response = await fetch(`https://jellyfish-app-4v5ou.ondigitalocean.app/user/userdet/${id}`, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                username: Name,
                email: Email,
                number: Number,
                address: Address,
                dob: DOB,
                photo: "photuuu",
                school: School,
                college: College,
                medium: Medium,
                age: Age,
                city: City,
                state: State,
                major: Major,
                stream: Stream,
                ref_id: id
            })

        })

        const result = await response.json();
        navigate(`/profile/${id}`)
        } catch (error) {
            console.log(error)
        }
        
    }


    return (

        <>
      
            <div className="upsc-background">
                <div className="logged">
                    <Navbar logoimg={logo} />
                </div>
            </div>

            <div className='user-details-form'>
                <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} value={Name} required />
                <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} value={Email} required />
                <input type="number" placeholder='Number' onChange={e => setNumber(e.target.value)} value={Number} required />
                <input type="text" placeholder='Address' onChange={e => setAddress(e.target.value)} value={Address} required />
                <input type="text" placeholder='City' onChange={e => setCity(e.target.value)} value={City} required />
                <input type="text" placeholder='State' onChange={e => setState(e.target.value)} value={State} required />
                <input type="number" placeholder='DOB' onChange={e => setDOB(e.target.value)} value={DOB} />
                <input type="text" placeholder='College' onChange={e => setCollege(e.target.value)} value={College} required />
                <input type="text" placeholder='School' onChange={e => setSchool(e.target.value)} value={School} required />
                <input type="text" placeholder='Medium' onChange={e => setMedium(e.target.value)} value={Medium} required />
                <input type="text" placeholder='Stream' onChange={e => setStream(e.target.value)} value={Stream} required />
                <input type="text" placeholder='Major' onChange={e => setMajor(e.target.value)} value={Major} required />
                <input type="number" placeholder='Age' onChange={e => setAge(e.target.value)} value={Age} required />

                <div>
                    <label htmlFor="img">Choose Image</label>
                    <input id='img' type="file" placeholder='Photo' onChange={e => setPhoto(e.target.value)} value={Photo} />
                </div>
                <button type='button' onClick={handleSent}>Submit</button>
            </div>

            <Footer />
        </>

    )
}

export default UserDetails