import React from 'react'
import '../styles/Left.css'
import { FaSpotify,FaEllipsisH } from "react-icons/fa";
// import { BiSearchAlt } from "react-icons/bi";
import Menu from './Menu';
import { MenuList } from './MenuList';
import MenuPalyLsit from './MenuPalyLsit';
import TrackMenu from './TrackMenu';
import logo from "../asssets/studio-removebg-preview.png"

function Left() {
  return (
    <div className="leftMenu">
        <div className="logoContainer">
       
            <img src={logo} alt="" className='logo'/>
      
        <h2>KRISHZZZ</h2>
        <i className='option'>
            <FaEllipsisH />
        </i>
        </div>
        {/* <div className="searchContainer">
        <input type="text" placeholder='Search...' />
        <i className='inputIcon'>
            <BiSearchAlt />

        </i>
        </div> */}

        <Menu title={"Menu"} menuObject={MenuList} />
        <MenuPalyLsit />
        <TrackMenu />
    </div>
  )
}

export default Left