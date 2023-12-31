import React, { Component } from 'react'
import {FaPlus} from 'react-icons/fa'
import {PlayLsit} from './Playlist'
import {BsMusicNoteList,BsTrash} from "react-icons/bs"

export class MenuPalyLsit extends Component {
  render() {
    return (
      <div className='PalyListcontainer'>
        <div className="nameContainer">
            <p>PlayList</p>
            <i>
                <FaPlus />
            </i>
        </div>
        <div className="palyListScroll">
            {
                PlayLsit && PlayLsit.map((list)=>(

                    <div className="playList" key={list.id}>
                    <i className='list'>
                        <BsMusicNoteList />
                    </i>
                    <p>{list.name}</p>
                    <i className="trash">
                        <BsTrash />
                    </i>
                    </div>

                ))
            }
          
        </div>
      </div>
    )
  }
}

export default MenuPalyLsit