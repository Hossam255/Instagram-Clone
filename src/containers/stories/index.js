import React from 'react'
import "./index.scss"
import Story from '../../components/story'
import { useSelector, useDispatch } from 'react-redux'


function Stories() {
  const users = useSelector(state => state.usersReducer.users)

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