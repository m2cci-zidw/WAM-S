import React, { useState } from 'react'
import './Profile.css'
import {Button}from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { deletePost, updatePost } from '../../JS/actions/actionsPost'

const Card = ({post}) => {
    const dispatch = useDispatch()
    const [updateForm, setUpdateForm] = useState(false);
    // const user = useSelector((state) => state.userReducer.user);
    const [message, setMessage] = useState(post)
    
    
    // const [bio, setBio] = useState(user);
        const handleUpdate = () => {
                    // dispatch(updateBio(user._id, bio));
                    dispatch(updatePost(post._id,message))
                    setUpdateForm(false);}
    
    return (
        <div className="ContainerPostProfil">
            <Button variant="danger" className="BtnDeleteUpd" onClick={()=>dispatch(updatePost(post._id,message))}>Update</Button>
            
            <div className="postProfil">


                {/*  */}
                {/* <div className="bio-update">
              {updateForm === false && (
                <div className="FormBio">
                    <p onClick={() => setUpdateForm(!updateForm)}>{message && post.message}</p>
                    <button onClick={() => setUpdateForm(!updateForm)}>
                    Modifier message
                    </button>
                </div>
                )}
                {updateForm && (
                <div className="FormBio">
                    <textarea className="TextBio"
                    type="text"
                    value={message.message}
                    onChange={(e) => setMessage({...message,message:e.target.value})}
                    ></textarea>
                    <button onClick={handleUpdate}>Valider modifications</button>
                </div>
                )}
            </div> */}

            
            <h4> {post.message}</h4>
            
            
                            <img src={ post.picture }
                                alt="poster-pic"
                                className="imgPostProfil"
                                /> 
                                
                    
            
        </div>
        <Button variant="danger" className="BtnDeleteUpd" onClick={()=>dispatch(deletePost(post._id))}>Delete</Button>

        </div>
        
    )
}

export default Card
