import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import Accountcreate from './pages/AccountCreate'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Product from './pages/Product'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Outlet
} from 'react-router-dom';
function App() {

  return (
    <>
      <section id="center" >

        <Router>
          <header>
            <h1>Website</h1>
            <nav>
              <ul>
                <li>
                  <NavLink
                    exact to="/AccountCreation"
                    activeClassName="selected">
                    Account Create
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact to="/Login"
                    activeClassName="selected">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact to="/Dashboard"
                    activeClassName="selected">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact to="/Product"
                    activeClassName="selected">
                    Product
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route
              exact path="/AccountCreation"
              element={<Accountcreate />}
            />
            <Route
              exact path="/Dashboard"
              element={<Dashboard />}
            />
            <Route
              exact path="/Login"
              element={<Login />}
            />
            <Route
              exact path="/Product"
              element={<Product />}
            />
          </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
