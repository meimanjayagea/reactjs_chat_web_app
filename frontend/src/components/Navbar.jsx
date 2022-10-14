import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Jaya Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/10476524/pexels-photo-10476524.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt=''/>
        <span>Meiman</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar