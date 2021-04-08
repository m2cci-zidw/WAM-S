import React from 'react'

const CardAdmin = ({user}) => {
    return (
        <div>
            <h1>Hello admin</h1>
            {console.log(user)}
            <h1>{user.name}</h1>
        </div>
    )
}

export default CardAdmin
