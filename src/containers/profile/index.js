import React from 'react'
import "./index.scss"
import ProfileIcon from '../../components/profile-icon'
import { useSelector, useDispatch } from 'react-redux'


function Profile(props) {
  const users = useSelector(state => state.usersReducer.users)

  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props

  let accountName = username
   ? username 
   : (users.length > 0 ? users[Math.floor(Math.random() * users.length)].username : "userName") 

  return (
    <div className='profile'>
      <ProfileIcon iconSize={iconSize} storyBorder={storyBorder} image={image} />
      {(accountName || caption) && !hideAccountName && (
        <div className='textContainer'>
          <span className='accountName'>{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href='/'>{urlText}</a>
    </div>
  )
}

export default Profile