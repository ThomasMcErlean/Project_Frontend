import React from "react";
import Product from "./product";
function ProductListing({ products }) {
  return (
    <figure>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
          <th>description</th>
          <th>Edit product</th>
          <th>Delete product</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => <Product key={index} product={product} />)}
      </tbody>
    </table>
    </figure>
  );

};
export { ProductListing as default };