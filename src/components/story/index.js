import React from 'react'
import "./index.scss"
import ProfileIcon from '../profile-icon'

function Story({user}) {

    
    return (
    <div className='story'>
        <ProfileIcon iconSize="big" storyBorder={true} />
        <span className='accountName'>{user.name > 10 ? user.name.substring(0,10) + "..." : user.name}</span>
    </div>
  )
}

export default Story