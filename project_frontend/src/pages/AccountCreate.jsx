import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Outlet } from 'react-router-dom';
const Accountcreate = () => {
  const [account_Data, setAccountData] = useState({
    username: "",
    password: "",
    address: "",
    phone_Number: 0,
    birth_Date: 1900,
    two_Factor_Authentication: false
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [birth_Date, setbirth_Date] = useState("");
  const [phone_Number, setPhoneNumber] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  console.log(account_Data)
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://localhost:443/account", account_Data).then((response) => {
      console.log(response.data);
      if (response.data==="Account creation successful") {
        navigate("/Login");
      } else {
        setResponseMessage("login unsuccesful");
      }
    }
    ).catch((err) => {
      console.log(err);
      setResponseMessage("Error username or password incorrect");
    });


  }
  return (
    <>
      <h2>Account Creation</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" className="input-field" type="email"
          value={account_Data.username}
          onChange={(e) => setAccountData({
            ...account_Data,
            username: e.target.value
          })} />
          <br/>
        <input placeholder="Password" className="input-field" type="password"
          value={account_Data.password}
          onChange={(e) => setAccountData({
            ...account_Data,
            password: e.target.value
          })} />
          <br/>
        <input placeholder="Address line" className="input-field" type="text"
          value={account_Data.address}
          onChange={(e) => setAccountData({
            ...account_Data,
            address: e.target.value
          })} />
          <br/>
        <input placeholder="Date of birth " className="input-field"
          value={account_Data.birth_Date}
          onChange={(e) => setAccountData({
            ...account_Data,
            birth_Date: e.target.value
          })} />
          <br/>
        <button autoFocus>Create Account</button>
      </form>
    </>)
}

export default Accountcreate;