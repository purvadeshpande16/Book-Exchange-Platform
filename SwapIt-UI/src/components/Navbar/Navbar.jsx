import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/logo.jpg";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <NavLink to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>swapit</span>
          </NavLink>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <NavLink to = "/home" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to = "/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to = "/add" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>add Book</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar