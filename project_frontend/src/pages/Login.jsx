import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const navigate=useNavigate();
    let login_Data={username:username, password:password};
    console.log(login_Data)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("1");
        axios.post("https://localhost:3000/login", login_Data).then((response) => {
            console.log("2");
            if (response.login) {
                navigate("/Dashboard");
            } else {
                console.log("login unsuccesful");
                setResponseMessage("login succesful");
            }
        }
        ).catch((err) => {
                setResponseMessage("Error creating post");
            });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" className="input-field" type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input placeholder="Password" className="input-field" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button autoFocus>Login</button>
            </form>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input placeholder="Username" className="input-field" type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="input-field" className="input-label">Username</label>
                    <span className="input-highlight"></span>
                </div>
                <div className="input-container">
                    <input placeholder="Password" className="input-field" type="password" />
                    <label htmlFor="input-field" className="input-label">Password</label>
                    <span className="input-highlight"></span>
                </div>
                <button autoFocus>Login</button>
            </form>
            <p>{responseMessage}</p>

        </>)
}

export default Login;
