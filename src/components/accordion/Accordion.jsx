import React from 'react';
import './accordion.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react';
import axios from "axios";

const AccordionFaq = () => {


    const faq = [
        {
            question: '1. How to Choose an IAS Coaching/UPSC Institute?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
        {
            question: '2. Why Coaching is helpful to Crack UPSC IAS Exam?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
        {
            question: '3. What to know before joining any IAS Coaching Institutes',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
    ]
    const [Data, setData] = useState(null)

    async function fetchData() {
      try {
        const response = await axios.get("https://jellyfish-app-4v5ou.ondigitalocean.app/user/home/faq")
        setData(response.data)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, [])
  
    return Data !== null &&  (

        <div className="home-accordion">
            <h3>FAQ's</h3>
            {Data.map((val, key) => (

                <Accordion key={key}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{val.question}</Accordion.Header>
                        <Accordion.Body>
                            {val.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </div>
    )
}

export default AccordionFaq