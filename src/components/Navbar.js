import React from 'react'
import './style.css';
;
function Navbar() {
  
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
      <img className='imgNavbar' src='https://media-exp1.licdn.com/dms/image/D4D35AQFBGaGRwL_KLw/profile-framedphoto-shrink_200_200/0/1664396843790?e=1665784800&v=beta&t=QFqmoSwf4xJRT0GBUOH01HU3wmoMj8XO1jslBCE0YNE' alt=''/>
      <span>Abdullah</span>
      <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar