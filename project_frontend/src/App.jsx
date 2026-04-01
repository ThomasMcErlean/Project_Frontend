import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import Accountcreate from './pages/AccountCreate'
import Dashboard from './pages/Dashboard'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Outlet
} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

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
                    exact to="/Dashboard"
                    activeClassName="selected">
                    Dashboard
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
          </Routes>
        </Router>
      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
