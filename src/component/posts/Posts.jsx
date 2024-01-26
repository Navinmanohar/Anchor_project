import React, { useEffect } from "react";
import "./posts.css"
import Post from "../post/Post"
import { useDispatch, useSelector } from "react-redux";
import { getTimeLinePosts } from "../../action/postaction";
import { useParams } from "react-router-dom";



const Posts=()=>{
    const dispatch=useDispatch()
    const {user}=useSelector(state=>state.authReducer.authData)
    let {posts,uploading}=useSelector(state=>state.postReducer);
    console.log("this posts",posts,uploading);
    // loading=false
    const params=useParams()
    useEffect(()=>{
        dispatch(getTimeLinePosts(user?._id))
    },[])
    if(!posts) return "No Posts";
    if(params.id)
    posts=posts.filter(posts=>posts.userId===params.id)
    return <>
        <div className="posts">
            {uploading?"Fetching posts...":
              posts.map((posts,id)=>{
                return <><Post data={posts} key={id}/></>
            }
        )}

        </div>
    </>
}

export default Posts;