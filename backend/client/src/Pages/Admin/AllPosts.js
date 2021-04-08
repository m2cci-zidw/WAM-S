import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {  getPosts } from '../../JS/actions/actionsPost'

import CardPosteOneUser from './CardPosteOneUser'
// import Card from './Post/Card'

const AllPosts = () => {

    const posts = useSelector(state => state.postReducer.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div>
            <div className="contentPostCard">
                {posts.map(post=> 
                   <CardPosteOneUser post={post} key={post._id} /> 
                    )}
            </div>
            
        </div>
    )
}

export default AllPosts





