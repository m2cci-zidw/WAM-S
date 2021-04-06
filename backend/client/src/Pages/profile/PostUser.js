import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPosts } from '../../JS/actions/actionsPost'
import Card from './Card'


const PostUser = ({user}) => {
    const posts = useSelector(state => state.postReducer.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <div>
            {posts.filter(post=>post.posterId===user._id).map(post=> <Card post={post} key={post._id}/> )}
        </div>
    )
}

export default PostUser