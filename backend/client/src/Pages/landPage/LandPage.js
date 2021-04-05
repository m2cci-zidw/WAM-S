import React from 'react'
import './LandPage.css'
import Thread from '../../Components/Thread'
import Dashboord from '../../Components/Dashboord/Dashboord'
const LandPage = () => {
    return (
        <div className='container-profil'>
            <Dashboord/>
            <div className='wrapper-thread'>
                <Thread/>
            </div>
        </div>
    )
}
export default LandPage