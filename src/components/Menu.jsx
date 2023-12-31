import React, { useEffect } from 'react'

function Menu({title,menuObject}) {

    useEffect(()=>{
const allList = document.querySelector(".menuContainer ul").querySelectorAll("li");

function menuChangeActive(){
    allList.forEach((n)=>n.classList.remove("active"));
    this.classList.add("active")
}

allList.forEach((n)=>n.addEventListener("click",menuChangeActive));
},[])


  return (
    <div className='menuContainer'>
        <p className='title'>{title}</p>
        <ul>
            {menuObject && 
            menuObject.map((menu)=>(
                <li key={menu.id}>
                    <a href="#">
                        <i>{menu.icon}</i>
                        <span>{menu.name}</span>
                    </a>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Menu