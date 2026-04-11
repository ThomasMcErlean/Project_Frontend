import React, { useState } from "react";
const Accountcreate = () => {
  const [account_Data, setAccountData] = useState({
    username: "",
    password: "",
    address: "",
    phone_Number: 0,
    birth_Date: 1900,
    two_Factor_Authentication: false
  })
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  console.log(account_Data)
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://localhost:443/accountCreate", account_Data).then((response) => {
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
      <h1>Account Creation</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" className="input-field" type="email"
          value={account_Data.username}
          onChange={(e) => setAccountData({
            ...account_Data,
            username: e.target.value
          })} />
        <input placeholder="Password" className="input-field" type="password"
          value={account_Data.password}
          onChange={(e) => setAccountData({
            ...account_Data,
            password: e.target.value
          })} />
        <input placeholder="Address line" className="input-field" type="text"
          value={account_Data.address}
          onChange={(e) => setAccountData({
            ...account_Data,
            address: e.target.value
          })} />
        <input placeholder="Date of birth " className="input-field"
          value={account_Data.address}
          onChange={(e) => setAccountData({
            ...account_Data,
            DOB: e.target.value
          })} />
        <button autoFocus>Create Account</button>
      </form>
    </>)
}

export default Accountcreate;