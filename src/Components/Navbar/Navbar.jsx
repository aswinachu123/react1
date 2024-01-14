import React, {useContext, useRef, useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import nav_dropdown from "../Assets/hamburger.png.png"

import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { ShopContext } from '../../Context/ShopContext'



const Navbar = () => {
  const [menu,setmenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef()


  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open')

  }


  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="" />
          <p>CARTIFY</p>

        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
          <li onClick={()=>{setmenu("shop")} }> <Link style={{textDecoration: 'none' }} to="/">Shop</Link>  {menu==="shop"? <hr></hr>:<></>}</li>
          <li onClick={()=>{setmenu("men")}}> <Link style={{textDecoration: 'none' }} to="/mens">Men</Link>{menu==="men"? <hr></hr>:<></>}</li>
          <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration: 'none' }} to="/womens">Women</Link>{menu==="women"? <hr></hr>:<></>}</li>
          <li onClick={()=>{setmenu("kids")}}> <Link style={{textDecoration: 'none' }} to="/kids">Kids</Link>{menu==="kids"? <hr></hr>:<></>}</li>


        </ul>
        
        <div className='nav-login-cart'>
          <Link to="login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
         


        </div>

    </div>
  )
}

export default Navbar