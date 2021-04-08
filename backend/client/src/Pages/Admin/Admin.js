
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllUsers } from '../../JS/actions/users.Actions'
import CardAdmin from './CardAdmin'

const Admin = () => {
    const users = useSelector(state => state.usersReducer.users)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllUsers())
    }, [dispatch])
    return (
        <div>

          {/* Button yhezek lel les post el kol */}
          <Link to="adminallposts" >
          <button> All Post </button>
          </Link>
          
          <div className="containerUserCard">
              
               {users.map(user => <CardAdmin user={user} /> )}
          </div>
       </div>
    )
}

export default Admin
