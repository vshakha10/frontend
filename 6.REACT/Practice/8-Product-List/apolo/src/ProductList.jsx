// // filter((item) => item.productColor !== 'gray')



import React from "react";

const products = [
  {
    productName: "Foundation",
    productImage: "https://m.media-amazon.com/images/I/31vgkFQD8FL._SX300_SY300_QL70_FMwebp_.jpg",
    productBrand: "Lake-Me",
    productPrice: 5000,
    productInStock: true,
  },
  {
    productName: "Compact",
    productImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpfUuXpAxm2uPJzywqYrdrbibHQWOgvP23IRK7LubQo-qwUxelwksRFT9ovRUc__GpeFCJPtJZ4nj3ImyZBWj5Op9DNdZYorX5Aa9qiCFw7nOhqC_d8yOT&usqp=CAE",
    productBrand: "Forever",
    productPrice: 2500,
    productInStock: false,
  },
  {
    productName: "Lipstick",
    productImage: "https://rukminim2.flixcart.com/image/1800/703/xif0q/shopsy-lipstick/j/s/y/3-6-9-to-5-primer-matte-lip-color-mp09-nude-touch-3-6-g-nude-original-imaggkw5jkxgvsaf.jpeg?q=60&crop=false",
    productBrand: "Lake-Me",
    productPrice: 5000,
    productInStock: true,
  },
  {
    productName: "Maskara",
    productImage: "https://m.media-amazon.com/images/I/51PQhsaEcLL._SL1001_.jpg",
    productBrand: "Maybelline",
    productPrice: 3800,
    productInStock: true,
  },
  {
    productName: "Eyeliner",
    productImage: "https://m.media-amazon.com/images/I/413yzxupVTL._SL1001_.jpg",
    productBrand: "Maybelline",
    productPrice: 2500,
    productInStock: true,
  },
  {
    productName: "Blusher",
    productImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-Y2ytcnhNJnpHqQReZOWH-VfR0QK5wmKireRDf1F7hBXhwc41_8X4YFfHC5gg4xgpEcFNOdRT8XXqPDykPiUHJd0MSTAZ7mQB-DnAGzT55MKkDzwMjnKXLo0",
    productBrand: "Lake-Me",
    productPrice: 1500,
    productInStock: false,
  },
  {
    productName: "Highlighter",
    productImage: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTifUmBTwk7cOYeJRhO2IWNi3flMFNh-rZytwuFppKvw_izIq-7TPUkxDLCU-WtdqPjTha4j3dl96j9VeLMOea9IZbvlG-YerKBOQ_wo8aCGQui7sDK7w0WA&usqp=CAE",
    productBrand: "Iconic",
    productPrice: 2500,
    productInStock: true,
  },
];

const ProductList = () => {
  return (
    <div>
      <h1 className="heading flex justify-evenly flex-wrap bg-gray-700 text-white p-6 mt-4  font-bold">
        Makeup Product
      </h1>
      <div className="flex justify-evenly flex-wrap">
        {products.map((item, index) => (
          <div key={index} className="bg-pink-300 text-black p-6 mt-4 w-64">
            <h2 className="text-lg">{item.productName}</h2>
            <img src={item.productImage} alt={item.productName} className="w-full h-auto" />
            <p>Brand: {item.productBrand}</p>
            <p>Price: {item.productPrice}</p>
            <p>Status: {item.productInStock ? "In Stock" : "Out of Stock"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

