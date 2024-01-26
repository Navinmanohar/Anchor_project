import React from "react";
import ProfileLeft from "../../component/ProfileLeft/ProfileLeft";
import "./profile.css"
import ProfileCard from "../../component/ProfileCard/ProfileCard";
import PostSide from "../../component/postSide/PostSide";
import RightSide from "../../component/RighSide/RightSide";

const Profile=()=>{
    return <>
     <div className="profile"><ProfileLeft/>
     <div className="Profile-center">
        <ProfileCard location="ProfileCard"/>
        <PostSide/>
     </div>
     <RightSide/>
     </div>
    </>
}

export default Profile;