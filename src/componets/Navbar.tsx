import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from './../store/state';
const Navbar: FC = () => {
   const [state, setState] = useState<boolean>(false)

   const { basket } = useAppSelector(state => state.data);
   return (
      <div className='header'>
         <div className="wrapper">
            <div className="burger">
               <div id="nav-icon1"
                  className={state ? 'open' : ''}
                  onClick={() => setState(!state)}>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>

            </div>
            <div className="logo">
               <Link to="/"
                  onClick={() => setState(false)}
               >WebShop</Link>
            </div>
            <nav
               className={state ? 'nav active' : 'nav'}
            >
               <ul>
                  <li>
                     <Link to="/"
                        onClick={() => setState(false)}
                     >Home</Link>
                  </li>
                  <li>
                     <Link to="/product"
                        onClick={() => setState(false)}
                     >Product</Link>
                  </li>
                  <li>
                     <Link to="/basket"
                        onClick={() => setState(false)}>Basket<span>
                           <p> {basket.length}</p></span></Link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Navbar