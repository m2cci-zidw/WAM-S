import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getPosts,  } from '../JS/actions/actionsPost'
import Card from './Post/Card'

const Thread = () => {
    const posts = useSelector(state => state.postReducer.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <div>
            <div>
                {posts.map(post=> 
                   <Card post={post} key={post._id} /> 
                    )}
            </div>
        </div>
    )
}
export default Thread