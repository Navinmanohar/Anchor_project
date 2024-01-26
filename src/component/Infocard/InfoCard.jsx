import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons"
import ProfileModel from "../ProfileModel/ProfileModel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../Api/userRequest";
import { logOut } from "../../action/action";

const InfoCard = () => {
    const dispatch=useDispatch()
    const params=useParams()
    // const [modalOpened, setModalOpened] = useState(false);
    const profileUSerId=params.id
    const [profileUser,setProfileUSer]=useState({})
    const {user}=useSelector(state=>state.authReducer.authData)
    useEffect(()=>{
        const fetchProfileUSer=async()=>{
       if(profileUSerId===user._id)
       setProfileUSer(user)
    else{
        const profileUser=await UserApi.getUser(profileUSerId)
        setProfileUSer(profileUser)
    } 
        }
        fetchProfileUSer()
    },[user])

    const [modelOpen,setModelOpen]=useState(false)

    const handlelogout=()=>{
     dispatch(logOut())
    }
    return <>
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Profiile Info</h4>
                {
                user._id===profileUSerId?(<div><UilPen width="2rem" height="1.2rem" onClick={()=>{
                    setModelOpen(true);
                }} />
                <ProfileModel modelOpen={modelOpen} setModelOpen={setModelOpen}
                data={user}
                />
                </div>):(""
                )}
            </div>
            <div className="info">
                <span>
                    <b> Status  </b>
                    <span>{profileUser.relationship} </span>
                </span>
            </div>
            <div className="info">
                <span>
                    <b> Lives  </b>
                    <span>{profileUser?.livesIn} </span>
                </span>
            </div>
            <div className="info">
                <span>
                    <b> Works At </b>
                    <span>{profileUser?.worksAt??""}</span>
                </span>
            </div>
            <button className="button logOut-button" onClick={handlelogout}>Logout </button>
        </div>
    </>
}

export default InfoCard;