import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../JS/actions/actionsPost'
import CardPosteOneUser from './CardPosteOneUser'


const PosteOneUser = (props) => {
    const posts = useSelector(state => state.postReducer.posts)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])
    return (
        <div>
            
             {
                ( posts) ?
            posts.filter(post=>post.posterId===props.location.user._id).map(post=> <CardPosteOneUser post={post}/>  )
            :
            null
            }
        </div>
    )
}

export default PosteOneUser
