import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import { useSelector } from 'react-redux'
import Home from './Home'
import logo from "./logo.png"


const Header = () => {

  const {cartItems} = useSelector(state=>state.cart)
  return (
    <>
    <nav>
      <div className="left">
      <img src={logo}/>
      </div>
      <div className="other">

        
   <ul class="nav">
  <li class="nav-item">
  <Link to={"/"}>Home</Link>
  </li>
  <li class="nav-item">
  <Link to={"/shop"}>Shop</Link>
  </li>
  <li class="nav-item">
  <Link to={"/"}>Login</Link>
  </li>
  <li class="nav-item">
  <Link to={"/cart"}>
                <FiShoppingBag/>
                <p>{cartItems.length}</p>
            </Link>
  </li>
</ul>
</div>
</nav>
   
    {/* <nav>
      <div className='content'>
       <img src={logo}/>
</div>

        <div>
        <input type="text" placeholder="Search.."/>
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop All</Link>
            <Link to={"/"}>Login</Link>
            <Link to={"/cart"}>
                <FiShoppingBag/>
                <p>{cartItems.length}</p>
            </Link>
        </div>
    </nav> */}
    </>
  )
}

export default Header