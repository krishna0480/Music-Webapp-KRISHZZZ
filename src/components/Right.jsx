import React from 'react'
import "../styles/Right.css"
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import profile from "../asssets/IMG-20231218-WA0000.jpg"

function Right() {
  return (
    <div className='rightContainer'>
         <div className="goPro">
        <i>
          <FaCrown />
          <p>
            <span> Go</span>Pro
          </p>
        </i>

        <i>
          <FaBell />
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>

        <div className="profileImage">
          <img src={profile}alt="" />
        </div>
      </div>
    </div>
  )
}

export default Right