// import React from 'react'
// import './mobfooter.css';
// // import FacebookIcon from '@mui/icons-material/Facebook';
// import Facebook from '../../images/Facebook.png'
// import YT from '../../images/YouTube.png'
// import TWT from '../../images/Twitter.png'
// import IG from '../../images/Instagram.png'

// export default function MobFooter() {
//   return (
//     <footer id='mob-footer'>
//       <div className="mf-top">
//         <strong>Obelabs</strong>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium dolorum quis quibusdam, voluptate corrupti unde rem repudiandae hic molestiae optio nihil, labore mollitia incidunt!</p>
//         <h5>Email</h5>
//         <p>Obelabs@gmail.om</p>
//       </div>
//       <div className="mf-mid">
//         <h3>Important links</h3>
//         <div className='mf-mid-list'>Best coaching for upsc</div>
//         <div className='mf-mid-list'>Best coaching for upsc</div>
//         <div className='mf-mid-list'>Best coaching for upsc</div>
//         <div className='mf-mid-list'>Best coaching for upsc</div>
//         <div className='mf-mid-list'>Best coaching for upsc</div>
//         <div className='mf-mid-list'>Best coaching for upsc</div>
//         <div className='mf-mid-list'>Best coaching for upsc</div>
//         <div className='mf-mid-list'>Best coaching for upsc</div>
//       </div>
//       <div className="mf-bottom">
//         <p className="">@ copyright 2022 All right reserved</p>
//         <div className='span-c'>
//           <span className="mf-bottom-span">Home</span>
//           <span className="mf-bottom-span">About us</span>
//           <span className="mf-bottom-span">Contact us</span>
//         </div>
//         <div className="icons-c">
//         <span className="mf-bottom-icons-c"><img src={Facebook} alt="" /></span>
//         <span className="mf-bottom-icons-c"><img src={YT} alt="" /></span>
//         <span className="mf-bottom-icons-c"><img src={TWT} alt="" /></span>
//         <span className="mf-bottom-icons-c"><img src={IG} alt="" /></span>
//         </div>
//       </div>
//     </footer>
//   )
// }



import React from 'react'
import './mobfooter.css';
// import FacebookIcon from '@mui/icons-material/Facebook';
import Facebook from '../../images/Facebook.png'
import YT from '../../images/YouTube.png'
import TWT from '../../images/Twitter.png'
import IG from '../../images/Instagram.png'

const MobFooter = () => {
  return (
    <footer id='mob-footer'>
    <div className="mf-top">
      <strong>Obelabs</strong>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium dolorum quis quibusdam, voluptate corrupti unde rem repudiandae hic molestiae optio nihil, labore mollitia incidunt!</p>
      <h5>Email</h5>
      <p>Obelabs@gmail.om</p>
    </div>
    <div className="mf-mid">
      <h3>Important links</h3>
      <div className='mf-mid-list'>Best coaching for upsc</div>
      <div className='mf-mid-list'>Best coaching for upsc</div>
      <div className='mf-mid-list'>Best coaching for upsc</div>
      <div className='mf-mid-list'>Best coaching for upsc</div>
      <div className='mf-mid-list'>Best coaching for upsc</div>
      <div className='mf-mid-list'>Best coaching for upsc</div>
      <div className='mf-mid-list'>Best coaching for upsc</div>
      <div className='mf-mid-list'>Best coaching for upsc</div>
    </div>
    <div className="mf-bottom">
      <p className="">@ copyright 2022 All right reserved</p>
      <div className='span-c'>
        <span className="mf-bottom-span">Home</span>
        <span className="mf-bottom-span">About us</span>
        <span className="mf-bottom-span">Contact us</span>
      </div>
      <div className="icons-c">
      <span className="mf-bottom-icons-c"><img src={Facebook} alt="" /></span>
      <span className="mf-bottom-icons-c"><img src={YT} alt="" /></span>
      <span className="mf-bottom-icons-c"><img src={TWT} alt="" /></span>
      <span className="mf-bottom-icons-c"><img src={IG} alt="" /></span>
      </div>
    </div>
  </footer>
  )
}

export default MobFooter