const Accountcreate = () => {
  return (
    <>
      <div className="input-container">
        <input placeholder="Username" className="input-field" type="email" />
        <label htmlFor="input-field" className="input-label">Username</label>
        <span className="input-highlight"></span>
      </div>
      <div className="input-container">
        <input placeholder="Password" className="input-field" type="password" />
        <label htmlFor="input-field" className="input-label">Password</label>
        <span className="input-highlight"></span>
      </div>
      <div className="input-container">
        <input placeholder="Address 1" className="input-field" type="text" />
        <label htmlFor="input-field" className="input-label">Address 1</label>
        <span className="input-highlight"></span>
      </div>
      <div className="input-container">
        <input placeholder="Address 2" className="input-field" type="text" />
        <label htmlFor="input-field" className="input-label">Address 2</label>
        <span className="input-highlight"></span>
      </div>
      <div className="input-container">
        <input placeholder="Address 3" className="input-field" type="text" />
        <label htmlFor="input-field" className="input-label">Address 3</label>
        <span className="input-highlight"></span>
      </div>
      <div className="input-container">
        <input placeholder="Postcode" className="input-field" type="text" />
        <label htmlFor="input-field" className="input-label">Postcode</label>
        <span className="input-highlight"></span>
      </div>
      <div className="input-container">
        <input placeholder="Postcode" className="input-field" type="date" />
        <label htmlFor="input-field" className="input-label">Postcode</label>
        <span className="input-highlight"></span>
      </div>

    </>)
}

export default Accountcreate;