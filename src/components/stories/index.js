import React from 'react'
import "./index.scss"
import Story from '../story'
import users from '../../data/users'

function Stories() {
  return (
    <div className='stories'>
        <div className="scroll" >
          {users.map((user,i)=><Story key={i} user={user} />) }
            <div> </div>
        </div>
    </div>
  )
}

export default Stories