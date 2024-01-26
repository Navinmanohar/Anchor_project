import * as UserApi from '../Api/userRequest'
export const updateUSer=(id,formData)=>async(dispatch)=>{
       dispatch({type:"UPDATING_START"})
       try{
        const {data}=await UserApi.updateUSer(id,formData);
        dispatch({type:"UPDATING_SUCCESS",data:data})

       }
       catch(error)
       {
        dispatch({type:"UPDATING_FAIL"})
       }
}

export const followUser=(id,data)=>async(dispatch)=>{
    dispatch({type:"FOLLOW_USER",data: id})
    UserApi.followUser(id,data);
}
export const UnfollowUser=(id,data)=>async(dispatch)=>{
    dispatch({type:"UNFOLLOW_USER",data: id})
    UserApi.UnfollowUser(id,data);
}