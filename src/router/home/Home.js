import React from 'react'
import "./Home.css"
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gd1 from "../../assets/1.jpg"
import gd2 from "../../assets/2.jpg"
import gd3 from "../../assets/3.jpg"
import gd4 from "../../assets/4.jpg"
import gd5 from "../../assets/5.jpg"
import gd6 from "../../assets/6.jpg"
import { PRODUCTS } from '../../static';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='home'>
         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        height={400}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide  className='po'>
          <img className='pa'src={gd1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='po'>
          <img className='pa'src={gd2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='po'>
          <img className='pa'src={gd3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='po'>
          <img className='pa'src={gd4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='po'>
          <img className='pa'src={gd5} alt="" />
        </SwiperSlide>
        <SwiperSlide className='po'>
          <img className='pa' src={gd6} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className='container'>
        {
          PRODUCTS.slice(0, 10)?.map((item, inx)=> <div key={inx} className='card'>
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
      <div className='ji'>
        <img className='img2' src={gd2} alt="" />
      </div>
      {
        PRODUCTS.slice(10,20)?.map((item2, inx2)=> <div key={inx2} className='card'>
         <Link to={`/products/${item2.id}`}>
            <img className='img1' src={item2.url} alt="" />
            </Link>
        <h4 className='h4'>{item2.title}</h4>
        <button className='btn2'>{item2.sar}</button>
        <br />
        <del className='del'>{item2.del} so'm</del>
        <h3 className='h3'>{item2.price} so'm</h3>
      </div>)
      }
        <div className='jii'>
          <img className='img3' src={gd3} alt="" />
        </div>
      {
        PRODUCTS.slice(20,25)?.map((item2, inx2)=> <div key={inx2} className='card'>
         <Link to={`/products/${item2.id}`}>
            <img className='img1' src={item2.url} alt="" />
            </Link>
        <h4 className='h4'>{item2.title}</h4>
        <button className='btn2'>{item2.sar}</button>
        <br />
        <del className='del'>{item2.del} so'm</del>
        <h3 className='h3'>{item2.price} so'm</h3>
      </div>)
      }
        <div className='jii'>
          <img className='img3' src={gd4} alt="" />
        </div>
      {
        PRODUCTS.slice(25, 30)?.map((item2, inx2)=> <div key={inx2} className='card'>
         <Link to={`/products/${item2.id}`}>
            <img className='img1' src={item2.url} alt="" />
            </Link>
        <h4 className='h4'>{item2.title}</h4>
        <button className='btn2'>{item2.sar}</button>
        <br />
        <del className='del'>{item2.del} so'm</del>
        <h3 className='h3'>{item2.price} so'm</h3>
      </div>)
      }
        <div className='jii'>
          <img className='img3' src={gd5} alt="" />
        </div>
      {
        PRODUCTS.slice(30, 35)?.map((item2, inx2)=> <div key={inx2} className='card'>
         <Link to={`/products/${item2.id}`}>
            <img className='img1' src={item2.url} alt="" />
            </Link>
        <h4 className='h4'>{item2.title}</h4>
        <button className='btn2'>{item2.sar}</button>
        <br />
        <del className='del'>{item2.del} so'm</del>
        <h3 className='h3'>{item2.price} so'm</h3>
      </div>)
      }
        <div className='jii'>
          <img className='img3' src={gd6} alt="" />
        </div>
      {
        PRODUCTS.slice(35, 40)?.map((item2, inx2)=> <div key={inx2} className='card'>
            <Link to={`/products/${item2.id}`}>
            <img className='img1' src={item2.url} alt="" />
            </Link>
        <h4 className='h4'>{item2.title}</h4>
        <button className='btn2'>{item2.sar}</button>
        <br />
        <del className='del'>{item2.del} so'm</del>
        <h3 className='h3'>{item2.price} so'm</h3>
      </div>)
      }
      </div>
    </div>   
  )
}

export default Home