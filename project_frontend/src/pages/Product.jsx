import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from 'react-router-dom';
import { io } from "socket.io-client";
const Product = () => {
    const socket = io("https://localhost:443", {
        extraHeaders: {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzc1NTc2NDY1LCJleHAiOjE3NzU2NjI4NjV9.Xv5rFGcWhQOjcHY4DyH-A6HO1B1xJPUpP0QGvV4abmI"
        }
    });
    socket.on("connect", () => {
        console.log(socket.connected)
    });
    socket.on("event", (arg) => {
        console.log(arg); // world
    });
    return (
        <>
            <h1>Product</h1>

        </>)
}

export default Product;
