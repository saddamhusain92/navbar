import React, { useState } from 'react'
import './Nvigationbar.css'
import {AiFillAppstore ,AiFillCloseSquare} from "react-icons/ai";
import { BsFillLockFill } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Nvigationbar = () => {
  const[mode,setMode]=useState(true)
  const [device,setDevice]=useState({classmode:"hide",
  icon:<AiFillAppstore/>
})
  const drawer=()=>{
    mode?setMode(false):setMode(true)
    mode?setDevice({classmode:"mobile",
    icon:<AiFillCloseSquare/>
  }):setDevice({classmode:"default-mode",
  icon:<AiFillAppstore/>
})
    
  }
  const meclose =()=>{
    setMode(true)
    setDevice({classmode:"hide",
    icon:<AiFillAppstore/>
  })
  }
 return (
    <>
<nav>
  <div className='logo'>SD Husain</div>
  <ul className={device.classmode}>
  <li><NavLink onClick={meclose} to="/">Home</NavLink></li>
  <li><NavLink onClick={meclose} to="/code">Code</NavLink></li>
  <li><NavLink onClick={meclose} to="/about">About</NavLink></li>
  <li ><NavLink onClick={meclose} to="/play">Play</NavLink></li>
</ul>
 <div className='contact' >
 {/* <NavLink to="/contact">contact</NavLink> */}
   {/* <NavLink  to="/contact"><FaUserLock/></NavLink> */}
   <NavLink  to="/login"><BsFillLockFill/> Login</NavLink>
   <NavLink to={"#"} >/</NavLink>
   <NavLink  to="/register"><FaUserPlus/>Register user</NavLink>
 </div>
   
  <div className='toggle' onClick={drawer}>{device.icon}</div>
  
</nav>
    
    </>
  )
}
export default Nvigationbar