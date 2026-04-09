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
        axios.post("https://localhost:443/login", login_Data).then((response) => {
            console.log("2");
            console.log(response);
            console.log(response.data.login);
            if (response.data.login) {
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" className="input-field" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input placeholder="Password" className="input-field" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button autoFocus>Login</button>
            </form>
            <p>{responseMessage}</p>

        </>)
}

export default Login;
