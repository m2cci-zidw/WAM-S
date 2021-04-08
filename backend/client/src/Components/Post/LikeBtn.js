import React,{useEffect,useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { currentUser } from '../../JS/actions/user'

import './Card.css'


const LikeBtn = ({post}) => {
  
    // const [like, setLike] = useState(post.likers.lenght) //3likes

    const [isLiked, setisLiked] = useState(false)

 

    const user = useSelector(state => state.userReducer.user)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(currentUser())
        if(isAuth){

              if(post.likers.includes(user._id))
             setisLiked(true)
        }
     
        
    }, [])

    return (
        <div>
             {/* <i className="far fa-heart"  onClick={dispatch(toggleLike())} /> */}
             <i  
            className={ isLiked ? "far fa-heart" : "fas fa-heartbeat" } 
             onClick={()=>setisLiked(!isLiked)} 
             />
 
        </div>
    )
}

export default LikeBtn
