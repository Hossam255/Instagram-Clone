import React from 'react'
import "./index.scss"
import { ReactComponent as Home } from "../../images/Home.svg"
import { ReactComponent as Inbox } from "../../images/inbox.svg"
import { ReactComponent as NewPost } from "../../images/NewPost.svg"
import { ReactComponent as Explore } from "../../images/Explore.svg"
import { ReactComponent as Notifications } from "../../images/notifications.svg"
import image from "../../images/pic1.jpg"
import ProfileIcon from '../profile-icon'
function Menu() {
  return (
    <div className='menu'>
        <Home className='icon' />
        <Inbox className='icon' />
        <NewPost className='icon' />
        <Explore className='icon' />
        <Notifications className='icon' />
        <ProfileIcon iconSize="small" image={image}  />
    </div>
  )
}

export default Menu