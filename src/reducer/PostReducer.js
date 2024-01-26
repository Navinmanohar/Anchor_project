
const postReducer = ( state = { posts:null, loading: false, error: false, uploading: false }, action) =>
 {
   
   
    switch (action.type) {
        case "UPLOAD_START":
             return { ...state, uploading: true, error: false }
        case "UPLOAD_SUCCESS":
             return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false }
        case "UPLOAD_FAIL":
             return { ...state, uploading: false, error: true }
        case "FOLLOW_USER":
          console.log(state?.authData)
          return {...state,authData:{...state.authData,user:{...state.authData.user,following:[...state?.authData?.user.following,action.data]}}}
          case "UNFOLLOW_USER":
                    return {...state,authData:{...state.authData,user:{...state.authData.user,following:[...state?.authData.user.following.filter((personId)=>personId!==action.data)]}}}
          case "RETREIVING_START":
                         return { ...state, loading: true, error: false };
          case "RETREIVING_SUCCESS":
                         return { ...state, posts: action.data, loading: false, error: false };
           case "RETREIVING_FAIL":
                         return { ...state, loading: false, error: true };
                                  
            
          default:
            return state;
    }
}

export default postReducer;