import React from 'react'

const Card = ({post}) => {
    return (
        <div>
            <h1> {post._id}</h1>
            <div className ="card-left">
                            <img src={ post.picture }
                                alt="poster-pic"
                                // className="imgUser"
                                /> 
                                
                    </div>
            
        </div>
    )
}

export default Card
