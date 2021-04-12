import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPosts } from '../../JS/actions/actionsPost'
import Card from './Card'


const PostUser = ({user,inputSearch}) => {

    const posts = useSelector(state => state.postReducer.posts)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    
    return (
        <div className="Container-Post-User">
             {
                user?
            posts.filter(post=>post.posterId===user._id)
            
            .filter(post=> post && 
                post.message.toLowerCase().includes(inputSearch.toLowerCase()))

            .map(post=> <Card post={post} key={post._id}/> )
            
            :
            null
            }
        </div>
    )
}

export default PostUser
