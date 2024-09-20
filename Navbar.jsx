import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate,} from 'react-router-dom';
import { items } from '../Store/data';
import Searchitem from './Searchitem';

function Navbar({setdata,addtocard}) {
  const navigate=useNavigate()
  const [seacrchitem, setseacrchitem] = useState('')

  const filterbucategory=(matchs)=>{
    const element=matchs?items.filter((product)=>product.category==matchs):items
setdata(element)
  }

const handlesummit=(e)=>{
  e.preventDefault()
  navigate(`/searchitem/${seacrchitem}`)
}

  
  return (
<header>
  <div className="nav">
    <Link to="/"><div className="logo">
      <img src={logo} alt="" />
    </div></Link>
    <div className="searchbar">
      <form onSubmit={handlesummit} >
      <input  onChange={(e)=>setseacrchitem(e.target.value)} value={seacrchitem} type="text" placeholder='search products..' />
      </form>
    </div>
    <div className="card">
    <button type="button" className="btn btn-primary position-relative">
    <Link to="carddetail"> <FaShoppingCart className='cardshop' /></Link>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {addtocard.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>

    </div>
  </div>
  <div className="navbar-refer">
    <div className="items">Filter product</div>
<div className="items">No Filter</div>
    <div className="items" onClick={()=>filterbucategory('mobiles')}>Mobile</div>
    <div className="items" onClick={()=>filterbucategory('laptops')}>Laptop</div>
    <div className="items" onClick={()=>filterbucategory('tablets')}>Tablets</div>
    <div className="items">29000</div>
    <div className="items">49999</div>
    <div className="items">69999</div>
    <div className="items">89999</div>
  </div>
</header>
  )
}

export default Navbar