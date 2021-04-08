
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../JS/actions/users.Actions'
// import CardAdmin from './CardAdmin'

const Admin = () => {
    const users = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllUsers())
    }, [])
    return (
        <div>
           <h1>hello</h1>
          <div>
              
               {users.map(use =>{
                   <h1>{use.name} </h1>
              
                })}
          </div>
       </div>
    )
}

export default Admin
