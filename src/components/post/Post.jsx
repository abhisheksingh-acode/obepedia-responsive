import React from 'react';
import './post.css';
import post1 from '../../images/post1.png';
import post2 from '../../images/post2.png';
import post3 from '../../images/post3.png';


const Post = () => {


    const postdata = [
        {

            title: 'Drishti IAS Academy Delhi, Reviews 2022',
            para: 'Top Blog post ',
            imgsrc: post1,

        },
        {
            title: 'Vision IAS Delhi, Delhi, Reviews 2022',
            para: 'Top Blog post ',
            imgsrc: post2,
        },
        {
            title: 'Rau’s IAS Study Circle Delhi, Reviews 2022',
            para: 'Top Blog post ',
            imgsrc: post3
        }
    ]




    const renderPost = (val, key) => {
        return (

            <div className="post-page" key={key}>
                <div className="postcard d-flex">
                    <div className="image">
                        <span>1</span>
                        <img src={val.imgsrc} alt="post" />
                    </div>
                    <div className="text">
                        <h5>{val.title}</h5>
                        <p>Top Blog post </p>
                    </div>
                </div>
            </div>

        )
    }
    return (

        <>

            {
                postdata.map(renderPost)
            }
        </>

    )


}

export default Post