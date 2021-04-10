import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { Spinner } from 'bootstrap-react';

import './Card.css'
import { getAllUsers } from "../../JS/actions/users.Actions";
import LikeBtn from './LikeBtn';
import CardComment from './CardComment';
import { isEmpty } from "../Utiles/Utiles";

const Card = ({post}) => {
    const [showComments, setShowComments] = useState(true);
     const users = useSelector(state => state.usersReducer.users)  // oneallusers
  const [isLoading, setIsLoading] = useState(true);

     const dispatch = useDispatch()
    
     useEffect(() => {
      dispatch(getAllUsers())
      !isEmpty(users) && setIsLoading(false);
    }, [dispatch])


    return (
        <>

 {/* {isLoading ?  
                    (<Spinner animation="border" variant="danger" style={{width:'200px'}} />) 
                    :
                    <h1>logique</h1> } */}
     

        <div className='card-container' key={post._id}>
                
               

        
        
                    
                    <div className="img_Name">
                                        <div className ="card-left">
                                            {/* //post home maroon */}
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
                                            {/* //name */}
                                                {users.map(user => {
                                                    if (user._id === post.posterId) return user.name;
                                                    else return null;
                                                })
                                                }
                                            </div>
                    </div>  
        
        
        
                <div className="message">
                    <strong> {post.message}</strong>
                </div>
        
                <div className="picturePost">
                   {post.picture && (
                      <img src={post.picture} alt="card-Picture" className="cardPicture" />
                    )}
                </div>
                          
                            {/* footer_Like-Message */}
                    <div className='footerCard'>
                     
                       <div className='card-comment'>
        
        
        
        
        
                           {/* //comments */}
                             <i className="far fa-comment-dots" 
                             onClick={()=> setShowComments(!showComments)}
                             />
        
                             <span> {post.comments.length}</span>
                       </div>
                       
                       <LikeBtn post={post} />
                       <span> {post.likers.length}</span>
                    </div>
                        {showComments && <CardComment post={post} /> }
                    

        </div>
        
</>
    )
}
export default Card
