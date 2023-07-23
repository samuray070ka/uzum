import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
      <div className='footer2'>
        <h2 className='title'>Biz haqimizda</h2>
        <ul className='collaction2'>
          <li className='item2'>Topshirish punktlarida</li>
          <li className='item2'>Vakansiyalar</li>
        </ul>
      </div>
      <div className='footer2'>
        <h2 className='title'>Foydalanuvchilarga</h2>
      <ul className='collaction2'>
          <li className='item2'>Biz bilan bog'lanish</li>
          <li className='item2'>Savol-javob</li>
        </ul>
      </div>
      <div className='footer2'>
         <h2 className='title'>Tadbirkorlarga</h2>
      <ul className='collaction2'>
          <li className='item2'>Sotuvchi kabinetiga kirish</li>
        </ul>
      </div>
      <div className='footer2'>
      <h2 className='title'>Ilovani yuklab olish</h2>
      <ul className='collaction2'>
          <li className='item2'>AppStore</li>
          <li className='item2'>Google Play</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer