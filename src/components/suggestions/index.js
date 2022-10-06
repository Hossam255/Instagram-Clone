import React from 'react'
import "./index.scss"
import Profile from '../../containers/profile'

function Suggestions() {
  return (
    <div className='suggestions'>
      <div className='titleContainer'>
        <div className='title'> Suggestions For You </div>
        <a href='/'>See All</a>
      </div>

      <Profile caption="Followed by Ashraf + 2 more " urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true} />
      <Profile caption="Followed by Ahmed + 1 more " urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true} />
      <Profile caption="Followed by Amar + 7 more " urlText="Follow" iconSize="medium" captionSize="small"  />
      <Profile caption="Followed by Focus + 3 more " urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true} />
      <Profile caption="Follows you " urlText="Follow" iconSize="medium" captionSize="small"  />
    </div>
  )
}

export default Suggestions