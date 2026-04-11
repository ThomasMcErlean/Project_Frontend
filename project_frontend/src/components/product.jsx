import React from 'react'


function Product({product}) {
  console.log(product.product_data);
  const product_data=product.product_data;
  return (
        <tr>
            <td>{product_data.name}</td>
            <td>{product_data.price}</td>
            <td>{product_data.stock}</td>
            <td>{product_data.category}</td>
            <td>{product_data.description}</td>
            <td><button>Edit</button></td>
        </tr>
  )
}
export default Product;