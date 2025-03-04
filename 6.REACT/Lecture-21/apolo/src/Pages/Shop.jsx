import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
 
  const [product, setProduct] = useState([]);

  console.log("product", product);

  const BaseUrl = `https://fakestoreapi.com/products/`;

  const handleData = async () => {
    try {
      let response = await fetch(BaseUrl);
      let data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <h1 className="headtext">This is Shop Page</h1>
      <section className="flex flex-wrap justify-evenly gap-8 mt-8">
        {product.map((item) => {
          return (
            <div key={item.id}>
              <ProductCard value={item}/>
            </div>
          );
        })}
      </section>
      <nav>
        <Link to="/shop/oldproduct">OldProduct</Link>
        <Link to="/shop/newproduct">NewProduct</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Shop;