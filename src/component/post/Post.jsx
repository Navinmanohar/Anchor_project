import React, { useState } from "react";
import heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"
import share from "../../img/share.png"
import comment from "../../img/comment.png"
import "./Post.css"
import { useSelector } from "react-redux";
import { likePost } from "../../Api/PostRequist";

const Post=({data})=>{

const {user}=useSelector(state=>state.authReducer.authData);
const[likes,setLikes]=useState(data.likes.length)
const [liked,setLiked]=useState(data.likes.includes(user._id))
    // console.log("this is data",data.image)
    // console.log("this is fetching image",process.env.REACT_APP_PUBLIC_FOLDER+data.image)
        const handleLike=()=>{
         setLiked(prev=>!prev)
         likePost(data._id,user._id)
         liked?setLikes(prev=>prev-1):setLikes(prev=>prev+1)
        }
            return <>
    
    <div className="post">
        <img src={data.image?process.env.REACT_APP_PUBLIC_FOLDER+data.image:"" } alt="" />
        <div className="postReact">
            <img src={liked?heart:NotLike} style={{cursor:"pointer"}}alt="" onClick={handleLike}/>
            <img src={comment} alt="" />
            <img src={share} alt="" />
           
        </div> 
        <span style={{color:"var(--gray)",fontSize:"12px"}} onClick={handleLike}>{likes} Likes</span>
        <div className="detail">
            <span>
                <b>{data.name}</b>
                <span>{data.desc}</span>
            </span>
        </div>
    </div>
    </>
}
export default Post;