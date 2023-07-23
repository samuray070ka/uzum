import './App.css';
import Navbar from "./components/navbar/Navbar"
import NavbarBottom from "./components/navbar-bottom/NavbarBottom"
import Footer from "./components/footer/Footer"
import { Routes, Route } from "react-router-dom"
import Akses from "./router/aksessuarlar/Akses"
import Home from "./router/home/Home"
import Elect from "./router/electronika/Elect"
import Kiyim from "./router/kiyim/Kiyim"
import Maishiy from "./router/maishiy/Maishiy"
import Poy from "./router/poyabzal/Poy"
import Avto from './router/avtotovarlar/Avto';
import Bola from './router/bolalar tovarlari/Bola';
import Gozal from './router/go\'zallik/Gozal';
import Salom from './router/salomatlik/Salom';
import Uy from './router/uy-rozg\'or-buyumlari/Uy';
import Qurilish from "./router/qurilish va ta'mirlash/Qurilish"
import UniquePage from "./router/unique-page/index"

function App() {
  return (
    <div className="app">
        <Navbar/>
        <NavbarBottom/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/akses' element={<Akses/>}/>
        <Route path='/elect' element={<Elect/>}/>
        <Route path='/kiyim' element={<Kiyim/>}/>
        <Route path='/maishiy' element={<Maishiy/>}/>
        <Route path='/poyabzal' element={<Poy/>}/>
        <Route path='/avto' element={<Avto/>}/>
        <Route path='/bola' element={<Bola/>}/>
        <Route path='/gozal' element={<Gozal/>}/>
        <Route path='/salom' element={<Salom/>}/>
        <Route path='/uy' element={<Uy/>}/>
        <Route path='/qurilish' element={<Qurilish/>}/>
        <Route path="/products/:proID" element={<UniquePage/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
