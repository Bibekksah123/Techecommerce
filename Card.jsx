import React from "react";

function Card({ addtocard, setaddtocard }) {
  console.log(addtocard);
  return (
    <div className="container my-5 " style={{ width: "54%" }}>
      {addtocard.map((product) => {
        return (
          <div
            key={product.id}
            className="card mb-3"
            style={{ width: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4 my-3">
                <img
                  src={product.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text des">{product.description}.</p>
                  <button type="button" className="btn btn-primary">
                    {product.price}
                  </button>
                  <button type="button" className="btn btn-primary">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
