import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'


import { isEmpty } from "../Utiles/Utiles";

const NewPost = () => {
    const users = useSelector(state => state.usersReducer.users)


    
    const [isLoading, setisLoading] = useState(true)
    const [message, setMessage] = useState("")
    const [postPicture, setPostPicture] = useState(null)
    const [file, setFile] = useState()

    const handlPicture =()=>{}


useEffect(() => {
    if(!isEmpty(users)) setisLoading(false)  //ken wsalni l users isLoading=>'false'
   
}, [users])

    return (
        <div className='postContainer'>
            {isLoading?
            (<i className ='fas fa-spinner fa-pulse' /> )   
                :
                (<>
                                 {/* img-User */}
                        <NavLink exact to='/profil'>
                        <div className='userInfo'>
                            <img  src={users.picture}  alt='img-user'/>     
                        </div>
                         </NavLink>

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
                                        onChange={(e) => handlPicture(e)}
                                        />
                                        </div> 
                                </div>
                          </div>
                        


                </>)
        }
        </div>
    )
}

export default NewPost
