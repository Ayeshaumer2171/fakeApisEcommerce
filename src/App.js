import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './ecommerce/Header';
import Category from './ecommerce/Categories';
import Products from './ecommerce/Products';
import { useState } from 'react';
import Details from './ecommerce/Details';
import Cart from './ecommerce/Cart';

function App() {

  const [counter,setCounter]=useState(0);
  const [cartItems, setCartItems] = useState([]);
const [selectedCategory,setSelectedCategory]=useState(null);


function AddTocart(product){

  const newItem = {
    id: product.id,
    image:product.image,
    price: product.price,
    title: product.title,
    quantity: 1,

  };

  const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);
  
  if (existingItemIndex !== -1) {
    const updatedCart = [...cartItems];
    updatedCart[existingItemIndex].quantity += 1;
    setCartItems(updatedCart);
  } else {
    newItem.quantity = 1;
    setCartItems([...cartItems, newItem]);
  }

  setCounter(counter+1);
}

function removeItem(itemid){

const updateditem=cartItems.filter((items)=>items.id!==itemid)
setCartItems(updateditem);
setCounter(counter-1);

}

  return (
    <div className="App">
      <BrowserRouter>
      <Header counter={counter}/>
      <Routes>
        <Route  path='/' element={<>

          <Category setSelectedCategory={setSelectedCategory} />
         <Products selectedCategory={selectedCategory} AddTocart={AddTocart}/>
        
        </>}/>
        <Route  path='/products/:id' element={<Details  AddTocart={AddTocart}/>}/>
        <Route  path='/cart' element={<Cart cartItems={cartItems} removeItem={removeItem} />}/>


      </Routes>
      </BrowserRouter>
          </div>
  );
}

export default App;
