import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Spinner } from 'bootstrap-react'


import { getPosts } from '../JS/actions/actionsPost'
import Card from './Post/Card'
import { isEmpty } from './Utiles/Utiles'

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