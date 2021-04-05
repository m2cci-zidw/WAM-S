import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateBio} from "../../JS/actions/user";

import './Profile.css'


const UpdateProfil = () => {
    const [updateForm, setUpdateForm] = useState(false);
    const user = useSelector((state) => state.userReducer.user);
    const [bio, setBio] = useState(user);
        const dispatch = useDispatch();
        const handleUpdate = () => {
                    // dispatch(updateBio(user._id, bio));
                    dispatch(updateBio(user._id,bio))
                    console.log(user._id)
                    setUpdateForm(false);}


    
    return (
        <div>
            <div>
            <div className="bio-update">
              {updateForm === false && (
                <div className="FormBio">
                    <p onClick={() => setUpdateForm(!updateForm)}>{bio && user.bio}</p>
                    <button onClick={() => setUpdateForm(!updateForm)}>
                    Modifier bio
                    </button>
                </div>
                )}
                {updateForm && (
                <div className="FormBio">
                    <textarea className="TextBio"
                    type="text"
                    value={bio.bio}
                    onChange={(e) => setBio({...bio,bio:e.target.value})}
                    ></textarea>
                    <button onClick={handleUpdate}>Valider modifications</button>
                </div>
                )}
            </div>
            </div>
            
        </div>
    )
}

export default UpdateProfil
