import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getAllUsers } from "../../JS/actions/users.Actions";
import './Card.css'
const Card = ({post}) => {
    // const isLoading = useSelector(state => state.postReducer.isLoading)
     const users = useSelector(state => state.usersReducer.users)  // oneallusers
     const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllUsers())
    }, [dispatch])
    return (
        <div className='card-container' key={post._id}>
          {/* <h6>{post._id} </h6> */}
             {/* {!isLoading ? (
               <div>
                    <h1>{post._id} </h1>
                   
               </div>
            ):
            //cas retard- isLoading true
            <li className='fas fa-spinner fa-spin'></li>
            } */}
        <div className="img_Name">
                    <div className ="card-left">
                            <img src={
                                    users.map(user => {
                                        if (user._id === post.posterId) return user.picture ;
                                        else return null;
                                    })
                                    .join("") 
                                }
                                alt="poster-pic"
                                className="imgUser"
                                /> 
                                
                    </div>
                    <div className ='name-user'>
                                    {users.map(user => {
                                        if (user._id === post.posterId) return user.name;
                                        else return null;
                                    })
                                    }
                                 </div>
                   
                    {/* <div className ='bio-user'>
                        {users.map(user => {
                            if (user._id === post.posterId) return user.bio;
                            else return null;
                        })
                        }
                    </div>  */}
        </div>       
        <div className="message">
            <p> {post.message}</p>
        </div>
        <div className="picturePost">
           {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
        </div>
    </div>
    )
}
export default Card
