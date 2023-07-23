import React from 'react'
import "./Poy.css"
import { PRODUCTS } from '../../static'
import { Link } from 'react-router-dom'
function Poy() {
  return (
    <div className='elect'>
    <div className='sidebar'>
      <h3 className='ol'>Turkumlar</h3>
        <ul className='collaction3'>
          <li className='item3'>Barcha turkumlar</li>
          <li className='item3'>Elektronika</li>
          <li className='item3'>Navigatorlar</li>
          <li className='item3'>Foto va video texnika</li>
          <li className='item3'>Oʻyin pristavkalari</li>
          <li className='item3'>Smartfonlar va telefonlar</li>
          <li className='item3'>Soatlar va elektron budilniklar</li>
          <li className='item3'>Aqlli soatlar va fitnes bilakuzuklar</li>
          <li className='item3'>Aqlli uy va xavfsizlik</li>
          <li className='item3'>Elektronikalar uchun aksessuarlar</li>
          <li className='item3'>Quloqchinlar va audio texnikalar</li>
          <li className='item3'>Noutbuklar, planshetlar va elektron kitoblar</li>
          <li className='item3'>Ofis texnikasi</li>
          <li className='item3'>Televizorlar va videotexnikalar</li>
          <li className='item3'>Kompyuter texnikasi</li>
          <li className='item3'>Narx, baho</li>
        </ul>
    </div>
    <div className='container'>
      {
        PRODUCTS.filter(i=> i.category === "poyabzal")?.map((item, inx)=> <div key={inx} className='card'>
        <Link to={`/products/${item.id}`}>
              <img className='img1' src={item.url} alt="" />
            </Link>
        <h4 className='h4'>{item.title}</h4>
        <button className='btn2'>{item.sar}</button>
        <br />
        <del className='del'>{item.del} so'm</del>
        <h3 className='h3'>{item.price} so'm</h3>
      </div>)
      }
    </div>
  </div>
  )
}

export default Poy