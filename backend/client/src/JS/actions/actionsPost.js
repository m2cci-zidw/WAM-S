import axios from "axios";
import { 
  ADD_POST,
  DELETE_POST,
    FAIL_POSTS, 
    GET_POSTS_LOAD, 
    GET_POSTS_SUCCESS,
    LIKE_POST,
    UNLIKE_POST,
    UPDATE_POST, 
 
//  TOGGLE_LIKE,
//  TOGGLE_UNLIKE
 
    
} 
from "../actionTypes/user";
//get posts
export const getPosts = () =>async(dispatch)=> {
  dispatch({ type: GET_POSTS_LOAD});
    try {
      let res = await axios.get("/api/post/");
      dispatch({ type: GET_POSTS_SUCCESS, payload: res.data.post });
    } catch (error) {
      dispatch({ type: FAIL_POSTS, payload: error.response.data });
      console.log(error);
    }
  };

export const addPost=(data)=>async(dispatch)=>{
  try {
    await axios.post(`api/post/`, data)
    dispatch({type:ADD_POST})
    dispatch(getPosts())
    
  } catch (error) {
    dispatch({ type: FAIL_POSTS, payload: error.response.data });
    
  }
}

export const deletePost=(postId)=>async(dispatch)=>{
  try {
    await axios.delete(`api/post/${postId}`)
    dispatch({type:DELETE_POST})
    dispatch(getPosts())
  } catch (error) {
    dispatch({ type: FAIL_POSTS, payload: error.response.data });
    
  }
}




export const updatePost=(id,message)=> async(dispatch) =>{
  try {
     await axios.put(`/api/post/${id}`,message)
     dispatch({ type: UPDATE_POST, payload: { message} });
     dispatch(getPosts())
    
  } catch (error) {
    dispatch({  payload: error.response.data });

    
  }

}







export const likePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `api/post/like-post/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        
        dispatch({ type: LIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const unlikePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `api/post/unlike-post/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        
        dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};











  

  // //like unliked
  // export const toggleUnLike = ()=>{
  //   return {
  //     type : TOGGLE_UNLIKE
  //   }
  // }

  // export const toggleLike = ()=>{
  //   return {
  //     type : TOGGLE_LIKE
  //   }
  // }