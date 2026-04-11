import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from 'react-router-dom';
import { io } from "socket.io-client";
import socket_Connect from "../socket";
import ProductListing from "../components/productListing";
import { useEffect } from "react";
const socket=socket_Connect();
const Product = () => {
    const [products, setProducts] = useState([]);
    let login=window.localStorage.getItem("login");
    login=JSON.parse(login);
        socket.on("connect", () => {
    });
        socket.on("Product get", (data) => {
            setProducts(data);
        });
    return (
        <>
            <h1>Product list</h1>
            <div>
                <ProductListing products={products}/>
            </div>

        </>)
}

export default Product;
