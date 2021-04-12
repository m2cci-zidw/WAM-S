import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector} from 'react-redux'
import './Card.css'

import edit from "../../assets/edit.png";
import delt from "../../assets/delete.png";
import { deleteComment } from '../../JS/actions/actionsPost';

const CardComment = ({post}) => {
    const dispatch = useDispatch()
    
    // const handleComment = (e) => { e.preventDefault();}
        const [text, setText] = useState("");
        const curentUser = useSelector(state => state.userReducer.user)
        const users = useSelector(state => state.usersReducer.users)  // oneallusers
        
        // useEffect(() => {
        //     dispatch(post)
        // }, [])
        
    return (
        <div className='WrapperComments'>
            
           {post.comments.map(comment =>{
                return (
                    <div className ={comment.commenterId === users._id ? 
                        //if commentContainer  color =orange
                        "commentClient" : 'commentContainer'} 
                         key = {comment._id}> 

                        <div className='com-NAmeAndPic'>
                                    <img className="imgUser"  src={
                                        users.map(user => {
                                            if (user._id === comment.commenterId) return user.picture ;
                                            else return null;
                                        }).join("")  }alt="commenPicture"/> 
                                    {/* commenterPseudo */}
                                    {/* <div className='commenterName'> */}
                                    <strong>    {curentUser.name} </strong>
                                    {/* </div>    */}

                                    <div className='EditDeleteImg'>
                                    <p>{comment.text} </p>  
                                        <div className='BtnEditDelete'> 
                                          <img src={edit} className='BtnPost' alt='imgEdit' style={{width:"30px"}} />
                                      
                                         { (curentUser._id === comment.commenterId)?
                                      
                                              <img src={delt} className='BtnPost'  onClick={()=>dispatch(deleteComment(post._id,comment._id))} alt='imgDelete' style={{width:"30px"}} />
                                              :
                                              null}
                                        </div>
                                          
                                      
                                   </div>  
                                  
                        </div>
{/* stoped hhhhhhhhhhhhhhhheeeerrre ! */}
                        {users._id && (
                            <form action="" 
                            //  onSubmit={handleComment}
                             className="comment-form">
                                <input 
                                    type="text"
                                    name="text"
                                    placeholder="Leave us a message.."
                                    onChange={(e) => setText(e.target.value)}
                                    value={text}
                                />
                                <br />
                                <input type="submit" value="Envoyer" />
                            </form>
                        )}                   

                    </div>
                )
            } )}
            
                 <input type="text" placeholder="Leave your comments.. " />
            
          
        </div>
    )
}
export default CardComment