import React,{useState,useEffect} from 'react'
import {Songs} from "./Songs"
import {FaHeadphonesAlt,FaRegClock,FaHeart,FaRegHeart} from "react-icons/fa"
import MusicPalyer from './MusicPalyer'

function AudioList() {
  const [songs,setSongs] =useState(Songs)
  const [song,setSong] =useState(Songs[0].song)
  const [img,setImg] = useState(Songs[0].imgSrc)

  useEffect(()=>{
    const songs = document.querySelectorAll(".songs");
    
    function menuChangeActive(){
        songs.forEach((n)=>n.classList.remove("active"));
        this.classList.add("active")
    }
    
    songs.forEach((n)=>n.addEventListener("click",menuChangeActive));
    },[])

  const changeFavourite =(id) =>{
    Songs.forEach((song) =>{
      if(song.id == id ){
        song.favourite =!song.favourite
      }
// condition checks the id of the song ,if it matchs it will change the favorie 
// Songs are stored in  an array and updated every time we click the favoru=ite
    })
    setSongs([...Songs])
  }

  const setMainSong = (songSrc,imgSrc) =>{
    setSong(songSrc);
    setImg(imgSrc)
  }

  return (
    <div className='audioList'>
     <h2 className="title">
        The List <span>{`${Songs.length} songs`}</span>
     </h2>


     <div className="songsContainer">
     {
      Songs && Songs.map((song,index) =>(

        <div className="songs" key={song?.id} onClick={()=> setMainSong(song?.song, song?.imgSrc)} >
        <div className="count">{`#${index + 1}`}</div>
       <div className="song">
        
            <div className="imgBox">
                <img src={`${song?.imgSrc}`} alt="" />
            </div>
            <div className="section">
              <p className="songName">
                {song.songName}
                <span className='spanArtist'>
                  {song?.artist}
                </span>
              </p>
              <div className="hits">
                <p className="hit">
                  <i>
                    <FaHeadphonesAlt />
                  </i>
                  95,490,102
                </p>
                <p className="duration">
                  <i>
                    <FaRegClock />
                  </i>
                  03.04
                </p>
                <div className="favorites" 
                onClick={() => changeFavourite(song?.id)}>

                  {
                    song.favourite ? 
                    (<i>
                    <FaHeart />
                  </i>) : (
                       <i>
                       <FaRegHeart />
                     </i>
                  )

                  }
                  
                 
                  </div>
                </div>
              </div>
            </div>
        </div>
      ))
     }
     </div>


     <MusicPalyer  song={song} imgSrc={img}/>
    </div>
  )
}

export default AudioList