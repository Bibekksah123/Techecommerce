import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Card from './components/Card'
import {items } from './Store/data'
import Productdetail from './components/Productdetail'
import Searchitem from './components/Searchitem'
import { useState } from 'react'

function App() {
const [data, setdata] = useState([...items])
const [addtocard, setaddtocard] = useState([])

  return (
    <>
    <BrowserRouter>
    
    <Navbar addtocard={addtocard} setdata={setdata}/>
    <Routes>

    <Route path='/' element={<Product addtocard={addtocard} setaddtocard={setaddtocard} item={data}/>}/>
    <Route path='product/:id' element={<Productdetail/>}/>
    <Route path='/searchitem/:term' element={<Searchitem/>}/>
    <Route path='carddetail' element={<Card addtocard={addtocard} setaddtocard={setaddtocard}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
