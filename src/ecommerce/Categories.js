import React, { useEffect, useState } from "react";
import './Categories.css';

function Category({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [showAllItems, setshowAllItems] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => { setCategories(data); })
      .catch((error) => console.log(error));
  }, []);

  function showSelectedCategory(category) {
    setSelectedCategory(category);
    setshowAllItems(false);
  }

  function showAllCategories() {
    setSelectedCategory(null);
    setshowAllItems(true);
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className={`col-md-2 cat ${showAllItems ? 'active' : ""}`} onClick={showAllCategories}>
          All items
        </div>
        {categories.map((category, index) => (
          <div className="col-md-2 cat" key={index} onClick={() => showSelectedCategory(category)}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
