import React from 'react'
// import { useState } from 'react-redux'
const Card = ({post}) => {
    //    const [isLoading, setIsLoading] = useState(true)
    return (
        <div>
            {/* <h1>{post._id} </h1>
            <h1>{post.likers} </h1>
            <h1>{post.posterID} </h1> */}
            <h1>{post.message} </h1>
        </div>
    )
}
export default Card