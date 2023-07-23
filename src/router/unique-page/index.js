import React from 'react'
import "./index.css"
import { Link, useParams } from "react-router-dom"
import {PRODUCTS} from "../../static"
function Index() {
    const param = useParams()
    let oneItem = PRODUCTS.find((item)=> item.id === param.proID)
    console.log(oneItem);
  return (
    <div className='unique'>
        <img className='ima' src={oneItem?.url} width="500" alt="" />
        <div className='kl'>
            <h1 className='logo2'>{oneItem?.title}</h1>
            <p className='kol'>Sotuvchi: <Link to={"/elect"}><b className='b2'>{oneItem.category}</b></Link></p>
            <p className='kola'>Yetkazib berish: <b className='b'>1 kun, bepul</b></p>
            <hr  className='hr'/>
            <h3 className='kolaa'>Miqdor:</h3>
            <button className='btn5'> - 1 +</button>
            <br />
            <div className='klo'>
            <h2 className='price'>{oneItem?.price} so'm</h2>
            <del className='delf'>{oneItem?.del}</del>
            </div>
            <button className='btno'><button className='nh'>{oneItem?.sar}</button>muddatli to'lov</button>
            <ul>
                {
                    oneItem?.desc?.map((item, inx)=><li key={inx}>{item}</li>)
                }
            </ul>
        </div>
    </div>
  )
}

export default Index