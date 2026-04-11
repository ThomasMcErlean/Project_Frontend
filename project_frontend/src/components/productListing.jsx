import React from "react";
import Product from "./product";
function ProductListing({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Edit product</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => <Product key={index} product={product} />)}
      </tbody>
    </table>
  );

};
export { ProductListing as default };