import {   FAIL_POSTS, GET_POSTS_LOAD, GET_POSTS_SUCCESS, UPDATE_POST
// , TOGGLE_LIKE,TOGGLE_UNLIKE 
} from "../actionTypes/user"
const initState ={
    posts:[],
    isLoading:false,
    errors:[],
    isLiked:false

}
//get allPosts 
export const postReducer =(state=initState ,{type,payload}) => {
    switch (type) {
        case GET_POSTS_LOAD:
             return {...state, isLoading:true};
        case GET_POSTS_SUCCESS: 
                return {...state,isLoading:false, posts:payload };
        case FAIL_POSTS: 
                return {...state,isLoading:false, errors:payload};


                case UPDATE_POST:
                    return{
                      ...state,
                      message:payload,
                    }

                
        default:
            return state;
    }
}
