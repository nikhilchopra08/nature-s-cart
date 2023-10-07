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
    </nav>
    </>
  )
}

export default Header