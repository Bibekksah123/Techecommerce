import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../Store/data";
import './Product.css'
import Product from "./Product";

function Productdetail({item}) {
  const { id } = useParams();
  const [prodcut, setprodcut] = useState({});
  const [categorys, setcategorys] = useState([])
  useEffect(()=>{
    const category=items.filter((itemprodcut)=>itemprodcut.category==prodcut.category)
    setcategorys(category)
    

  },[id,prodcut.category])
  useEffect(() => {
    const filteritem = items.filter((product) => product.id == id.toString());
    console.log(filteritem[0]);
    setprodcut(filteritem[0])
  }, [id]);
  return (
    <>
   
      <div className="card" style={{ width: "18rem" }}>
        <img src={prodcut.imgSrc} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">{prodcut.title}</h5>
          <p className="card-text des">{prodcut.description}</p>
          <button type="button" className="btn btn-primary mx-3">
            {"₹" + prodcut.price}
          </button>
          <button type="button" className="btn btn-warning">
            Add To Cart
          </button>
        </div>
      </div>
      <h1>Related Product</h1>
      {/* <div className="contain">
{categorys.map((category)=>
 <div key={category.id} className="col-lg-4 my-3 text-center">
 <div className="card" style={{width: "18rem"}}>
 <img src={category.imgSrc} className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">{category.title}</h5>
   <p className="card-text des">{category.description}</p>
   <button type="button" className="btn btn-primary">{"₹"+category.price}</button>
   <button type="button" className="btn btn-warning">Add To Card</button>
 </div>
</div>
</div>


)}
    </div> */}
    <Product item={categorys}/>

    </>
    
  );
}

export default Productdetail;
