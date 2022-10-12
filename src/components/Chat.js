import React from 'react'
import './style.css'
import { BiCamera,BiUserPlus,BiDotsHorizontalRounded } from "react-icons/bi";
import Messages from './Messages';


function Chat() {
  return (
    <div className='chat'>
      <div className='chatInfoNew'>
        <span className='userNameNew'>Jane</span>
        <div className='chatIconsNew'>
        <BiCamera style={{ color: "white", marginRight:"5px" }} />
        <BiUserPlus style={{ color: "white", marginRight:"5px"  }}/>
        <BiDotsHorizontalRounded style={{ color: "white", marginRight:"5px"  }}/>
        </div>
      </div>
     <Messages/>
    </div>
  )
}

export default Chat