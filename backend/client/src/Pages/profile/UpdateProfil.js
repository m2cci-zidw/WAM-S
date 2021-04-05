import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateBio} from "../../JS/actions/user";


const UpdateProfil = () => {
        const [bio, setBio] = useState("");
        const [updateForm, setUpdateForm] = useState(false);
        const user = useSelector((state) => state.userReducer.user);
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
             <h3>Bio</h3>
              {updateForm === false && (
                <div>
                    <p onClick={() => setUpdateForm(!updateForm)}>{bio && user.bio}</p>
                    <button onClick={() => setUpdateForm(!updateForm)}>
                    Modifier bio
                    </button>
                </div>
                )}
                {updateForm && (
                <div>
                    <textarea
                    type="text"
                    defaultValue={user.bio}
                    onChange={(e) => setBio(e.target.value)}
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
