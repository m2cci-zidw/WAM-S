import axios from "axios";
import { 
    FAIL_POSTS, 
    GET_POSTS_LOAD, 
    GET_POSTS_SUCCESS 
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