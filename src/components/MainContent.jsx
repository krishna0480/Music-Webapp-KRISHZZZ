import { useEffect } from 'react'
import React  from 'react'
import '../styles/Main.css'
import Banner from './Banner'
import { FaUsers } from 'react-icons/fa'
import AudioList from './AudioList'

function MainContent() {
  useEffect(()=>{
    const allList = document.querySelector(".menuList ul").querySelectorAll("li");
    
    function menuChangeActive(){
        allList.forEach((n)=>n.classList.remove("active"));
        this.classList.add("active")
    }
    
    allList.forEach((n)=>n.addEventListener("click",menuChangeActive));
    },[])
  return (
    <div className='mainContainer'>
    <Banner />
    <div className="menuList">
      <ul>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Ablums</a></li>
        <li><a href="#">Songs</a></li>
        <li><a href="#">Fans</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <p>
        <i><FaUsers /></i>12.3M <span>Followers</span>
      </p>
    </div>
    <AudioList />
    </div>
  )
}

export default MainContent