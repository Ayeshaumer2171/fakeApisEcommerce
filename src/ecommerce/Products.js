import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Products.css"; 

function Products({selectedCategory, AddTocart}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let apiUrl = 'https://fakestoreapi.com/products';
        if(selectedCategory){
            apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        }
        axios.get(apiUrl)
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error))
    }, [selectedCategory]);



    
    return (
        <div className="container mt-5">
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="col-md-4 cats" key={product.id}>
                            <div className="card mb-4 product-card">
                                <Link to={`/products/${product.id}`}>
                                    <div className="image-container">
                                        {product.image ? (
                                            <img src={product.image} alt={product.title} className="card-img-top" />
                                        ) : (
                                            <h2>No image available</h2>
                                        )}
                                    </div>
                                </Link>            
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">Description: {product.description}</p>
                                    <p className="card-text card_price">Price: ${product.price}</p>
                                </div>
                                <button onClick={() => AddTocart(product)}>Add to Cart</button>
                            </div>
                        </div>  
                    ))
                ) : (
                    <h3>Loading...</h3>
                )}
            </div>
        </div>
    );
}

export default Products;
