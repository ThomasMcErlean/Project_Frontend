import Product from './Product';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Outlet,
  useNavigate
} from 'react-router-dom';
const Dashboard = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="dashboard-grid-container">
        <div className="sidebar">
          <input type="button" value="Product"onClick={navigate("/Product")}/>
        </div>
      </div>

    </>)
}

export default Dashboard;