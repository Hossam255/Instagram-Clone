import React, { useEffect } from 'react'
import "./index.scss"
import Story from '../../components/story'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from "../../api/userService"
import {updateUsers} from '../../redux/action/action'


function Stories() {
  const users = useSelector(state => state.usersReducer.users)
  const dispatch = useDispatch()

  useEffect(()=> {
    const callUsers  = async ()=> {
      const users = await fetchUsers()
      dispatch(updateUsers(users))
    }
    callUsers()
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