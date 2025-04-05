import '../Component/Navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Cartcontext } from '../context/Context';
function Navbar (){

const [showmenue,setShowmenue] = useState(false)

const {countprod}= useContext(Cartcontext)

const handlemenue =()=>{
  setShowmenue(!showmenue);
}


  return (
    <div className={`nav-bar ${showmenue?'active':''}`}>
      <div className={`link-bar ${showmenue?'open-link':''}`} >
        <ul >
        <li><Link to="/all">All</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="/product">product</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="logo">
        <h3>RalphluX</h3>
      </div>
      <div className='form-icons-cart'>
        <form action="">
        <IoSearchOutline />
        <input type="text" placeholder='SEARCH FOR PRODUCTS' />
        </form>
        <Link to="/cart"><SlHandbag className='cart-icon'/></Link>
        <span>{countprod}</span>
        <FaBars className={`humberger ${showmenue?'open':''}`} onClick={handlemenue} />
      </div>
    </div>
  )
}

export default Navbar  


