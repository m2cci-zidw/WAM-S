import React  from 'react'
import { useSelector} from 'react-redux'
import './Card.css'

import edit from "../../assets/edit.png";
import delt from "../../assets/delete.png";

const CardComment = ({post}) => {
    // const handleComment = (e) => { e.preventDefault();}
        // const [text, setText] = useState("");
        const users = useSelector(state => state.usersReducer.users)  // oneallusers
        // const dispatch = useDispatch()
        
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
                                    <strong>    {comment.commenterName} </strong>
                                    {/* </div>    */}
                                    <div className='EditDeleteImg'>
                                    <p>{comment.text} </p>  
                                      <img src={edit} alt='imgEdit' style={{width:"30px"}} />
                                      <img src={delt} alt='imgDelete' style={{width:"30px"}} />
                                   </div>  
                                  
                        </div>
{/* stoped hhhhhhhhhhhhhhhheeeerrre ! */}
                        {/* {users._id && (
                            <form action="" onSubmit={handleComment}
                             className="comment-form">
                            <input type="text"name="text"
                                placeholder="Leave us a message.."
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            />
                            <br />
                            <input type="submit" value="Envoyer" />
                            </form>
                        )}                   
 */}
                    </div>
                )
            } )}
            
                 <input type="text" placeholder="Leave your comments.. " />
            
          
        </div>
    )
}
export default CardComment