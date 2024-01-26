import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../action/UserAction';
import { useState } from 'react';
import { UnfollowUser } from '../Api/userRequest';

export default function User({person,id}) {
    const  serverPublic=process.env.REACT_APP_PUBLIC_FOLDER;
const {user}=useSelector(state=>state.authReducer.authData)
const [following,setFollowing]=useState(person.followers.includes(user._id))    

const dispatch=useDispatch();
    const handleFollow=()=>{
        following?
        dispatch(UnfollowUser(person._id,user)):
        dispatch(followUser(person._id,user))
      setFollowing((prev)=>!prev)
      console.log(user);
}
  return (
    <div  key={id} className="follower">
            <div>
                <img src={person.profilePicture?serverPublic+person.profilePicture:serverPublic+"defaultProfile.jpg"} className="followerImage"/>
                <div className="name">
                    <span>{person.firstname}</span>
                    <span>@{person.username}</span>
                </div>
            </div>
            <button className={following?"button fc-button unfollow":"button fc-button"} onClick={handleFollow}>{following?"Unfollow":"follow"}</button>
        </div>
  )
}
