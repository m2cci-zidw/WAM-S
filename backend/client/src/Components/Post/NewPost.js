import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { addPost } from '../../JS/actions/actionsPost';
import { currentUser } from '../../JS/actions/user';
// import { isEmpty } from "../Utiles/Utiles";
// import './Card.css'

const NewPost = () => {
    const user = useSelector(state => state.userReducer.user)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    // const [isLoading, setisLoading] = useState(true)
    const [message, setMessage] = useState("")
    const [postPicture, setPostPicture] = useState(null)
    const [file, setFile] = useState()
    const dispatch = useDispatch()

    const handlePost = async () => {
        if (message || postPicture) {
          const data = new FormData();
          data.append('posterId', user._id);
          data.append('message', message);
          if (file) data.append("file", file);
          await dispatch(addPost(data));
         
        } else {
          alert("Veuillez entrer un message")
        }
      };

      const handlePicture = (e) => {
        setPostPicture(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
      }; 

      useEffect(() => {
         dispatch(currentUser())
      }, [dispatch])



    return (
        
        <div className='postContainer'>
            
          {isAuth?(
                  <>
                {/* img-User */}
       {/* <NavLink exact to='/profil'> */}
       <div className='userInfo'>
           <h2> {user.name}</h2>
          
           <br/>
           <img className="pictureOfAddPost" src={user.picture}  alt='img-user'/>     
       </div>
        {/* </NavLink> */}

                {/* Input user message */}
   <div className='inputFormeClient'>

           <textarea name="message" id='message' placeholder ="What's Up.. ?"
           onChange={(e)=>setMessage(e.target.value)} 
           value={message}
           />

                {/* post file */}
           <div className='footer-Form'>
                   <div className='icon'>
                               <i className="fas fa-file-upload fileUpload" />
                           <input className='inputForm' type="file" id='file-upload' name='file' accept=".jpg, .jpeg , .png" 
                           onChange={(e) => handlePicture(e)}
                           />
                   </div> 
           </div>
           <button onClick={()=>handlePost()} > AddPost</button>
         </div>
       


        </>
         ):null} 
         
               
                
       
        </div>
    )
}

export default NewPost
