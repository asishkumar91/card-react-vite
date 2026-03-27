import React from 'react'
import './Navbar.css'

const Navbar = ({count, setCount}) => {
  return (
    <div className='Container'>
        <div>
            <img src='https://cdn2.hubspot.net/hubfs/53/image8-2.jpg' alt='Sanju'></img>
        </div>
    <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
    </ul>
        <div>
            <button onClick= { () => setCount(count+1)}
        className='btn'>Add Card</button>
        </div>
    </div>
  )
}

export default Navbar
