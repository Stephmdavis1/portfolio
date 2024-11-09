import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Navbar.css'
import DarkMode from "./DarkMode/DarkMode";


export default function Navbar() {

  return (
    <>
      {/* <div className="navbar" id={expandNavbar ? "open" : "close"}> */}
      <div className="navbar">
        <div className="nav__links">
          <div className="links">
          <div className="cta__link">
            <Link to="/" onClick={window.scrollTo(0,0)}>SD</Link>
          </div>
            <Link to="/work" onClick={window.scrollTo(0,0)}>WORK</Link>
            <Link to="/about" onClick={window.scrollTo(0,0)}>ABOUT</Link>
            <Link to="/career" onClick={window.scrollTo(0,0)}>CAREER</Link>
            <Link to="/updates" onClick={window.scrollTo(0,0)}>BLOG</Link>
          </div>
        </div>
        <div className="toggle"> <DarkMode /></div>
      </div>
    </>
  );
}
