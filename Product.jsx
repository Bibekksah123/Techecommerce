import React from "react";
import "./product.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { json, Link } from "react-router-dom";


function Product({item,addtocard, setaddtocard}) {
  const addtocards=(id,title,img,description,price)=>{
    // addtocard.push(id)
    // console.log(addtocard)
  const obj={
    title,img,price,description,id
  }
setaddtocard([...addtocard,obj])
toast.success('Prodcut add to card', {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  
  });
  }

  return (
    <>
<ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>

    <div className="container">
      <div className="row">
        {item.map((productitem) => (
          <div key={productitem.id} className="col-lg-4 my-3 text-center">
            <div className="card" style={{ width: "18rem" }}>
              <Link to={`/product/${productitem.id}`}>
                <img src={productitem.imgSrc} className="card-img-top" alt={productitem.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{productitem.title}</h5>
                <p className="card-text des">{productitem.description}</p>
                <button type="button" className="btn btn-primary mx-3">
                  {'₹' + productitem.price}
                </button>
                <button type="button" className="btn btn-warning" onClick={()=>addtocards(productitem.id,productitem.title,productitem.imgSrc,productitem.description,productitem.price)}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Product;

