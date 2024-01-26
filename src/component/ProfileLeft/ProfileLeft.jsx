import React from "react";
// import "./ProfileLeft.css";
import LogoSearh from "../LogoSearch/LogoSearch";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../Infocard/InfoCard";
const ProfileLeft=()=>{
    return<>
    <div className="profileSide">
        <LogoSearh/>
        <InfoCard/>
        <FollowersCard/>
    </div>
    </>
}

export default ProfileLeft;