import React from 'react'
import "./index.scss"
import Profile from "../../containers/profile"
import Suggestions from "../suggestions"
import Footer from "../sidebar-footer"
import image from "../../images/pic1.jpg"

function Sidebar() {
  return (
    <div className='sidebar'>
      <Profile username="hossam.255"
        caption="Hossam Hassan"
        urlText="switch"
        iconSize="big"
        image={image} />
      <Suggestions />
      <Footer />
    </div>
  )
}

export default Sidebar