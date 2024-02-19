import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrChannel } from "react-icons/gr";
import { RiDashboard3Line } from "react-icons/ri";
import { FaShippingFast, FaBorderStyle } from 'react-icons/fa';
import { MdOutlineInventory2 } from "react-icons/md";
import "./index.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul>
        <li className={`section ${location.pathname === '/dashboard' ? 'active' : ''}`}>
          <Link to="/dashboard">
            <RiDashboard3Line />
            <p className='para'>Dashboard</p>
          </Link>
        </li>

        <li className={`section ${location.pathname === '/shipping' ? 'active' : ''}`}>
          <Link to="/shipping">
            <FaShippingFast />
            <p className='para'>Shipping</p>
          </Link>
        </li>

        <li className={`section ${location.pathname === '/orders' ? 'active' : ''}`}>
          <Link to="/orders">
            <FaBorderStyle />
            <p className='para'>Orders</p>
          </Link>
        </li>
        
        <li className={`section ${location.pathname === '/channel' ? 'active' : ''}`}>
          <Link to="/channel">
            <GrChannel />
            <p className='para'>Channel</p>
          </Link>
        </li>

        <li className={`section ${location.pathname === '/inventory' ? 'active' : ''}`}>
          <Link to="/inventory">
            <MdOutlineInventory2 />
            <p className='para'>Inventory</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
