import React from 'react'
import './Profile.css'

const Card = ({post}) => {
    return (
        <div className="ContainerPostProfil">
            <div className="postProfil">
            <h4> {post.message}</h4>
            
                            <img src={ post.picture }
                                alt="poster-pic"
                                className="imgPostProfil"
                                /> 
                                
                    
            
        </div>

        </div>
        
    )
}

export default Card
