import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarBottom.css"
function NavbarBottom() {
  return (
    <div className='navbarbottom'>
      <ul className='collaction'>
        <Link className='link__bottom' to={"/elect"}>
         <li className='item'>Elektronika</li>
        </Link>
        <Link className='link__bottom' to={"/maishiy"}>
          <li className='item'>Maishiy texnika</li>
        </Link>
        <Link className='link__bottom' to={"/kiyim"}>
          <li className='item'>Kiyim</li>
        </Link>
        <Link className='link__bottom' to={"/poyabzal"}>
          <li className='item'>Poyabzallar</li>
        </Link>
        <Link className='link__bottom' to={"/akses"}>
          <li className='item'>Aksessuarlar</li>
        </Link>
        <Link className='link__bottom' to={"/gozal"}>
          <li className='item'>Go'zallik</li>
        </Link>
        <Link className='link__bottom' to={"/salom"}>
          <li className='item'>Salomatlik</li>
        </Link>
        <Link className='link__bottom' to={"/uy"}>
          <li className='item'>Uy-rozg'or-buyumlari</li>
        </Link>
        <Link className='link__bottom' to={"/qurilish"}>
          <li className='item'>Qurilish va ta'mirlash</li>
        </Link>
        <Link className='link__bottom' to={"/avto"}>
          <li className='item'>Avtotovarlar</li>
        </Link>
        <Link className='link__bottom' to={"/bola"}>
          <li className='item'>Bolalar tovarlari</li>
        </Link>
          <li className='item'>Yana</li>
      </ul>
    </div>
  )
}

export default NavbarBottom