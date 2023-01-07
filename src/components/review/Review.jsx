import React from 'react';
import './review.css';
import Form from 'react-bootstrap/Form';
import { AiFillStar } from "react-icons/ai";
import { useState } from 'react';

const Review = (props) => {
  const val = localStorage.getItem('user')
  const user = JSON.parse(val)
  const token = user.token
  if (user) {
    // console.log(user.user._id);
    var id = user.user._id;
    var name = user.user.name
  }


  const [Review, setReview] = useState('') 


  const handleReview = async () => {

    try {
      const response = await fetch(`https://jellyfish-app-4v5ou.ondigitalocean.app/institute/reviews/postreviewoninstitute/${id}`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: 'nme',
          desc: Review,
          rating: 10,
          ref_id: id,
          institute_id: props.institute_id
        })
      })

      const result = await response.json();
      if (result) {
        props.reload()
      }
      alert('Comment added succesfully!');
      setReview('')
    } catch (error) {
      console.log(error)
    }

  }

  // useEffect(() => {
  //   // RunApi();
  // }, [])

  return (

    <>
      <div className="write-rev">
        <h5>Write a Review</h5>
        <p>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar className='color' />
        </p>
        <form>
          <Form.Group className="mb-4" controlId="FormTextarea">
            <Form.Control as="textarea" rows={5}
              placeholder="Review"
              onChange={(e) => setReview(e.target.value)} value={Review}
            />
          </Form.Group>
          <button onClick={handleReview} type='button' >Post</button>
        </form>
      </div>
    </>

  )
}

export default Review