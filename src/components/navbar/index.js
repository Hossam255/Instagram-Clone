import "./index.scss"
import React from 'react'
import logo from "../../images/InstagramLogo.png"
import searchLogo from  "../../images/searchLogo.png"
import Menu from "../nav-menu"

function Navigation() {
  return (
    <div className="navigation">
        <div className="container">
            <img className="logo" src={logo} alt="instagram logo" />
            <div className="search">
                <img className="searchIcon" src={searchLogo} alt="search icon" />
                <span className="searchText">Search</span>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default Navigation