import React from 'react'
import { GrAttachment, GrGallery } from "react-icons/gr";

function Input() {
  return (
    <div className='inputMain'>
<input className='inputMsg' type="text" placeholder='Type something...'/>
<div className='sendMsg'>
  <GrAttachment style={{marginRight:"5px"}}/>
<input type="file" style={{display:"none"}} id="file"/>
<label htmlFor='file'>
<GrGallery  style={{marginRight:"5px"}}/>
</label>
<button className='btnMsg'>Send</button>
</div>
    </div>
  )
}

export default Input