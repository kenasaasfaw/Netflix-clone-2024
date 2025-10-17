import React from 'react'
import './header.css';
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import  Logo from './Image/images.png'
const Header = () => {
  return (
    <div>
<div className="header-container">
  <div className="header_left">
    <ul>
      <li><img src={Logo} alt="Netflix logo" className='image' /></li>
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>Latest</li>
      <li>MyList</li>
      <li>Browse by Language</li>
    </ul>
  </div>

  <div className="header_right">
    <ul>
      <li><CiSearch /></li>
      <li><IoIosNotifications /></li>
      <li><MdAccountBox /></li>
      <li><RiArrowDropDownLine /></li>
    </ul>
  </div>
</div>

    </div>
  )
}

export default Header
