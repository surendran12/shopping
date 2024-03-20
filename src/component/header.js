import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import logo from  './../images/logo.jpg';
import cart from  './../images/cart.png';
import search from  './../images/search.png';
import collapse from  './../images/collapse.png';

const Header = () => {
  return (
    <header className="header">
        <div className="headerLeft">
            <div className="logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="searchbar">
                <input type="text" className="searchInput" placeholder="What do you want to buy today?" />
                {/* <span className="searchIcon"><img src={search} alt="search" /></span> */}
                <span className="closeIcon">&times;</span>
            </div>
        </div>
        <div className="headerRight">
            <nav>
                <ul>
                <li><a href="/store">Store</a></li>
                <li><a href="/">Account</a></li>
                <li><a href="/">Whish List</a></li>
                <li><a href="/">Basket <span><img src={cart} alt="cart" /></span></a></li>
                </ul>
            </nav>
        </div>

        <div className="collapsemenu">
            <a href="/"><img src={collapse} alt="collapse" /></a>
        </div>
    </header>
  );
}

export default Header;
