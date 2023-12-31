import React from 'react'
import banner from "../asssets/pexels-sebastian-ervi-1763075.jpg"
import check from "../asssets/check.png"
import {FaEllipsisH,FaHeadphones,FaCheck} from "react-icons/fa"

function Banner() {
  return (
    <div className='Banner'>
        <img src={banner} alt="" className='Bannerimg'/>

        <div className="content">
            <div className="breadCrumps">
                <p>
                    Home <span>/Popular Artisit</span>
                </p>
                <i>
                    <FaEllipsisH />
                </i>
            </div>
            <div className="artist">
                <div className="left">
                    <div className="name">
                        <h2>Lana Del Rey</h2>
                        <img src={check} alt="" />
                    </div>
                    <p className='nameDes'><i><FaHeadphones /></i>11,25436,227 <span>/monthly Listeners</span></p>
                </div>
                <div className="right">
                    <a href="#">Play</a>
                    <a href="#">
                        <i><FaCheck /></i>
                        Following
                    </a>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
       
    </div>
  )
}

export default Banner