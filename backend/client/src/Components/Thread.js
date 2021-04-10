import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { Spinner } from 'bootstrap-react'


import { getPosts } from '../JS/actions/actionsPost'



import Card from './Post/Card'
import { isEmpty } from './Utiles/Utiles'

const Thread = ({inputSearch}) => {
    const posts = useSelector(state => state.postReducer.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())

    }, [dispatch])

    return (
        <div>
            
           <div>
                {posts
                
                .filter(post=> post && 
                    post.message.toLowerCase().includes(inputSearch.toLowerCase())
                    )       


                .map(post=> 
                   <Card post={post} key={post._id} /> 
                    )}
            </div>
        </div>
    )
}
export default Thread