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
        axios.post("https://localhost:443/login", login_Data).then((response) => {
            console.log(response.data);
            if (response.data.login) {
                window.localStorage.setItem("login", JSON.stringify(response.data));
                navigate("/Dashboard");
            } else {
                console.log("login unsuccesful");
                setResponseMessage("login succesful");
            }
        }
        ).catch((err) => {
                console.log(err);
                setResponseMessage("Error username or password incorrect");
            });
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input placeholder="Username" className="input-field" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label>password</label>
                <input placeholder="Password" className="input-field" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button autoFocus>Login</button>
            </form>
            <p>{responseMessage}</p>

        </>)
}

export default Login;
