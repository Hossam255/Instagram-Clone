import React, { useEffect } from 'react'
import "./index.scss"
import Story from '../../components/story'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_USERS_SAGA} from '../../redux/action/action'


function Stories() {
  const users = useSelector(state => state.usersReducer.users)
  const dispatch = useDispatch()

  useEffect(()=> {
      dispatch({type:UPDATE_USERS_SAGA})
  },[])
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