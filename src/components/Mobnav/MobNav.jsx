import React from 'react';
import './mobnav.css';
import Search from '../../images/Search.png';
import User from '../../images/User.png';
import Menu from '../../images/Menu.png';
import { Link } from 'react-router-dom';
import bann from '../../images/banner3.png';

export default function MobNav() {
  const val = localStorage.getItem("user");
  const user = JSON.parse(val);
  if (user) {
    console.log(user);

    // console.log(user.user._id);
    var id = user.user._id;
  }

  return (
    <nav id='mob-nav'>
      <div className="mob-nav-top">
        <div className="mob-nav-left">
          <div className="mob-img-c" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={Menu} className="mob-nav-img" alt="" /></div>
          <div className="mob-nav-title">
            <Link to='/'>Obelabs</Link>
          </div>
        </div>
        <div className="mob-nav-right">
          {/* <div className="mob-img-c"><img src={Search} className="mob-nav-img" alt="" /></div> */}
          <Link to={`/profile/${id}`} className="mob-img-c"><img src={User} className="mob-nav-img" alt="" /></Link>
        </div>
      </div>
      <div className="mob-nav-bottom">
        <input placeholder='Obepedia' type="text" />
      </div>
      <div className="banner-img">
        <img src={bann} alt='banner' />
      </div>
    </nav>

  )
}
