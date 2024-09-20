
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../Store/data'


export default function Searchitem() {
  const {term}=useParams()
  const [filtersearchitem, setfiltersearchitem] = useState([])
useEffect(()=>{
  const itemfilter=items.filter((item)=>item.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
setfiltersearchitem(itemfilter)
},[term])
  return (
<>
<div className="contain">
{filtersearchitem.map((itemlist)=>
  <div key={itemlist.id} className="card" style={{width: "18rem"}}>
  <img src={itemlist.imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{itemlist.title}</h5>
    <p className="card-text des">{itemlist.description}</p>
    <button type="button" class="btn btn-primary">{itemlist.price}</button>
    <button type="button" class="btn btn-warning">Add To Card</button>

  </div>
</div>
)}
</div>
</>
  )
}
