import react from "react";
import LogoSearh from "../LogoSearch/LogoSearch";
import "../LogoSearch/logoSearch.css";
import "./profileSide.css";

import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";
const ProfileSide = () => {
  return (
    <>
      <div className="profileslide">
        <LogoSearh />
        <ProfileCard location="homepage" />
        <FollowersCard />
      </div>
    </>
  );
};
export default ProfileSide;
