import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { FaHome, FaBoxOpen, FaTags, FaProductHunt } from 'react-icons/fa';
import { MdPlayArrow } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeclassname="active-link">
            <button className="button-link">
              <FaHome /> Dashboard <MdPlayArrow style={{marginLeft: "auto", marginRight: "0"}}/>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/category" activeclassname="active-link">
            <button className="button-link">
              <FaBoxOpen /> Category <MdPlayArrow style={{marginLeft: "auto", marginRight: "0"}}/>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/subcategory" activeclassname="active-link">
            <button className="button-link">
              <FaTags /> Subcategory <MdPlayArrow style={{marginLeft: "auto", marginRight: "0"}}/>
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeclassname="active-link">
            <button className="button-link">
              <FaProductHunt /> Products <MdPlayArrow style={{marginLeft: "auto", marginRight: "0"}}/>
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
