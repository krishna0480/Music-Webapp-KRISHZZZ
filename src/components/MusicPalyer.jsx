import React,{useState,useRef, useEffect} from 'react'
import "../styles/MusicPlayer.css"
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa';
import{BsDownload} from "react-icons/bs"

function MusicPalyer({song,imgSrc}) {
    console.log(song);
    
    const [isLove,setLoved] = useState(false)
    const [isPlaying,setPlaying] = useState(false)
    const [duration,setDuration] = useState(0)
    const [currentTime,setCurrentTime] =useState(0)

    const audioPlayer =useRef();
    const progressBar = useRef();
    const animationRef = useRef();
    
    
    useEffect(()=>{
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds)
    }, [audioPlayer?.current?.loadedmetadata,audioPlayer?.current?.readyState])

    const calculateTime = (sec) =>{
        const minutes = Math.floor(sec/60);
        const returnMin = minutes < 10 ? `0${minutes}` :`${minutes}`;

        const seconds=Math.floor(sec%60);
        const returnSec=seconds<10? `0${seconds}`:`${seconds}`;

        return `${returnMin}:${returnSec}`;
    }


    const changePlayPause = () =>{
        setPlaying(!isPlaying)
        if(isPlaying){
            audioPlayer.current.pause();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }
        else{
            audioPlayer.current.play();
            cancelAnimationFrame(animationRef.current)
        }
    }

   const changeLoved =()=>{
    setLoved(!isLove)
  
   }

   const whilePlaying =()=>{
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime()
    animationRef.current = requestAnimationFrame(whilePlaying)
   }


   const changeProgress =()=>{
     audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime()
   }
   
   const changeCurrentTime = () =>{
    progressBar.current.style.setProperty("--player-played",`${(progressBar.current.value / duration)*100}%`);
    setCurrentTime(progressBar.current.value)
   }


    console.log(song,imgSrc);
  return (
    <div className='musicPlayer'>
        <div className="songImage">
            <img src={imgSrc} alt="" />
        </div>
        <div className="songAttribute">

            <audio src={song} preload='metadata' ref={audioPlayer}/>

            <div className="top">
                <div className="left">
                   <div className="Loved" onClick={changeLoved}>
                   {isLove? (<i><FaHeart /></i>):(<i><FaRegHeart /></i>)}
                   </div>
                   <div className="download">
                    <i><BsDownload /></i>
                   </div>
                </div>

                <div className="middle">
                    <div className="back">
                        <i><FaStepBackward className='control1' /></i>
                        <i ><FaBackward /></i>
                    </div>
                    <div className="playPause" onClick={changePlayPause}>
                    {
                        isPlaying ?(<i><FaPause /></i>) : (<i>
                            <FaPlay />
                        </i>) 
                       
                    }
                    </div>
                    <div className="forward">
                        <i> <FaForward /></i>
                        <i><FaStepForward className='control1'/></i>
                    </div>
                </div>
                <div className="right">
                    <i><FaShareAlt /></i>
                </div>
            </div>
            <div className="bottom">
                <div className="currentTime">{calculateTime(currentTime)}</div>
                <input type="range" className='progressBar' ref={progressBar} onChange={changeProgress}/>
                <div className="duration">{duration && !isNaN(duration)  && calculateTime(duration)?
                calculateTime(duration):"00:00"}</div>
            </div>
        </div>
    </div>
  )
}

export default MusicPalyer
