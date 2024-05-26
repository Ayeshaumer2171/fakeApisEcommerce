import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'; // Import your CSS file for styling

function Details({AddTocart}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  let chimg="";
  let notchimg="";



  return (
    <div className="container mt-5">
      {product ? (
        <div className="details-container">
          <div className="details-image">
         
            <img src={product.image} alt={product.title} />
          </div>
          <div className="details-content">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <button className="btn btn-primary btn-lg" onClick={() => AddTocart(product)}>Add to Cart</button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Details;
