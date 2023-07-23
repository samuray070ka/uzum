import React from 'react'
import "./Navbar.css"
import {AiOutlineHeart} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { HiOutlineUser } from "react-icons/hi"
import { BiCopy } from "react-icons/bi"
import { Link } from 'react-router-dom'
import {IO} from "../../static/index"
function Navbar() {
  return (
    <div className='navbar'>
      {
        IO?.map((item, inx)=><Link to={"/"}><img key={inx} className='kp' src={item.url} alt="" /></Link>)
      } 
      <button className='btn'> <BiCopy className='i'/>Katalog</button>
      <input className='inp' type="text"  placeholder='Mahsulotlar va turkumlar izlaw' /> <BiSearch className='ic'/>
      
      <div className='icon'>
        <h3 className='logo1'><HiOutlineUser className='ico'/>Kirish</h3>
        <h3 className='logo1'><AiOutlineHeart className='icon1'/>Saqlangan</h3>
        <h3 className='logo1'><HiOutlineShoppingBag className='icons'/>Savat</h3>
      </div>
  </div>
  )
}

export default Navbar