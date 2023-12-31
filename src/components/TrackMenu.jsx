import React from 'react'
import {BsFillVolumeUpFill,BsMusicNoteList} from "react-icons/bs"
import {FaDesktop} from "react-icons/fa"
import track from "../asssets/track.png"

function TrackMenu() {
  return (
    <div className='trackList'>
        <div className="top">
            <img src={track} alt="" />
            <p className='trackName'>sample name <span className='trackSpan'>Artist</span> </p>
        </div>

        <div className="bottom">
             <i><BsFillVolumeUpFill /></i>
             <input type="range" />
             <i><BsMusicNoteList /></i>
             <i><FaDesktop /></i>
        </div>

    </div>
  )
}

export default TrackMenu