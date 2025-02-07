import React from "react";

export const Product = ({ productName, inStock }) => {
  //   if (inStock) {
  //     return <li className="heading my-2">{productName}</li>;
  //   }
  //   return <li className="heading"><del>{productName}</del></li>
//   return <>{inStock ? <li>{productName}✅</li> : null}</>;
//   return <><li>{inStock ? productName + '✅' : null}</li></>;
return <li>{inStock && productName}{inStock && '✅'}</li>
};
const Item = () => {
  return (
    <div className="container mx-auto">
      <h1 className="heading mt-4">This is Item Components</h1>
      <ul>
        <Product productName="Mobile" inStock={false} />
        <Product productName="Television" inStock={true} />
        <Product productName="Laptop" inStock={false} />
        <Product productName="Mixture" inStock={true} />
        <Product productName="Freeze" inStock={true} />
        <Product productName="WashingMachine" inStock={false} />
        <Product productName="DishWasher" inStock={true} />
        <Product productName="Microwave" inStock={false} />
        <Product productName="AirConditioner" inStock={true} />
        <Product productName="HomeTheator" inStock={true} />
      </ul>
    </div>
  );
};

export default Item;