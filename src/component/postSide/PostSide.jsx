import React from "react";
import "./postSide.css"
import PostShare from "../PostShare/PostShare"
import Posts from "../posts/Posts";


const PostSide=()=>{
     return <>
  <div className="postside">
    <PostShare/>
    <Posts/>
    </div>   
   </>
}


export default PostSide