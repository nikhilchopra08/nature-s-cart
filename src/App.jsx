import './App.css'
import "./styles/app.scss"
import "./styles/home.scss"
import "./styles/cart.scss"
import "./styles/certifictions.scss"
import "./styles/reviews.scss"
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Componets/Home'
import {Toaster} from 'react-hot-toast'
import Cart from './Componets/Cart'
import Header from './Componets/Header'
import Shop from './Componets/Shop'

function App() {
  
  return (
    <BrowserRouter>
     <Header/>
   
      <Routes>
      
        <Route path='/' element= {<Home/>}/>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/shop' element= {<Shop/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter> 
  )
}

export default App
