// import React from "react";
// import { Link } from "react-router-dom";
// import { FiShoppingBag } from "react-icons/fi";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const { cartItems } = useSelector((state) => state.cart);
//   return (
//     <nav>
//       <h2>Logo Here.</h2>

//       <div>
//         <Link to={"/"}>Home</Link>
//         <Link to={"/cart"}>
//           <FiShoppingBag />
//           <p>{cartItems.length}</p>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import { useSelector } from 'react-redux'
import Home from './Home'
import BasicExample from './BasicExample'

const Header = () => {

  const {cartItems} = useSelector(state=>state.cart)
  return (
    <>
    <nav>
      <div className='content'>
        <h2>logo here..</h2>
        <div className="hidden-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est voluptas optio aut possimus incidunt cum pariatur enim, dolorem ducimus minima? Impedit saepe magni consectetur nemo dolores eos quas quaerat.</p>
                  <Home/>
                        </div>
                        </div>

        <div>
            <Link to={"/"}>Shop All</Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Handmade Crafts</Link>
            <div className="login">
            <button>Login</button>
            <div className="hidden-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est voluptas optio aut possimus incidunt cum pariatur enim, dolorem ducimus minima? Impedit saepe magni consectetur nemo dolores eos quas quaerat.</p>
              {/* <BasicExample/> */}
                        </div>
                        </div>
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