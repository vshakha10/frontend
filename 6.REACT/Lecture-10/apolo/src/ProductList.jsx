import React from "react";

const products = [
  {
    productName: "laptop",
    productColor: "gray",
    productPrice: 50000,
    productInStock: true,
  },
  {
    productName: "mouse",
    productColor: "black",
    productPrice: 300,
    productInStock: false,
  },
  {
    productName: "television",
    productColor: "black",
    productPrice: 80000,
    productInStock: true,
  },
  {
    productName: "mobile",
    productColor: "blue",
    productPrice: 55000,
    productInStock: true,
  },
  {
    productName: "desktop",
    productColor: "gray",
    productPrice: 50000,
    productInStock: true,
  },
  {
    productName: "cloth",
    productColor: "yellow",
    productPrice: 1000,
    productInStock: false,
  },
  {
    productName: "smartwatch",
    productColor: "gray",
    productPrice: 5000,
    productInStock: true,
  },
];

// let filterProduct = products.filter((item) => item.productColor !== 'gray')

const ProductList = () => {
  return (
    <div>
      <h1 className="heading flex justify-evenly flex-wrap bg-purple-700 text-white p-6 mt-4">This is ProductList Components</h1>
      <div className="flex justify-evenly flex-wrap">
      {products.map((item) => {
        return (
          <>
            <ul className="bg-purple-700 text-white p-6 mt-4">
              <li>{item.productName}</li>
              <li>{item.productColor}</li>
              <li>${item.productPrice}</li>
            </ul>
          </>
        );
      })}
      </div>
    </div>
  );
};

export default ProductList;



// filter((item) => item.productColor !== 'gray')