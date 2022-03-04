import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image from '../../images/bemystyle.png';
import Dropdown from '../Dropdown/Dropdown';
import Dropdown2 from '../Dropdown/Dropdown2';
import {DataContext} from '../../Data/DataProvider'
import cartImage from '../../images/shopping-cart.png';
import { NavbarLogo,Logo } from './NavbarElements';


function Navbar() {

  const value = useContext(DataContext)
  const [cart] = value.cart

  const [navbar,setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 60) {
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  


  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <>
      <nav className={navbar ? 'navbar active': 'navbar'}>
        <NavbarLogo className='navbar-logo' onClick={closeMobileMenu}>
          <Logo to='/' className='logo-header'>BeMyStyle</Logo>
          {/* <img src={image} width={150} height={100} alt="bemystyle" /> */}
        </NavbarLogo>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/mens'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Men's <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/women'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Women <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/magazine'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              E-Magazine
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to="/contact-us"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/signin">
            <div className='btn'>
                SignUp
            </div>
        </Link>
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={cartImage} width={30} className="cart-image" alt="" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;