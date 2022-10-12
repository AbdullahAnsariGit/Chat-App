import React from 'react'

function Message() {
  return (
    <div className="message owner">
      <div className="messageSec">
        <img className='imagesUser' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p className="para">Hello</p>
        <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' style={{width:"300px",height:"300px"}}/>
      </div>

    </div>
  )
}

export default Message