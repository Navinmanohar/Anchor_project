import React, { useState } from "react";
  import Home from "../../img/home.png";
  import noti from '../../img/noti.png' ;
  import comment from '../../img/comment.png';
  import {UilSetting} from '@iconscout/react-unicons'
  import "./rightSide.css"
  import TrendCard from "../TrendCard/TrendCard";
import ShareModel from "../ShareModel/ShareModel";
import { Link } from "react-router-dom";
import NavIcons from "../NavIcons/NavIcons";

const RightSide=()=>{
    const [modelOPen,setModelOpen]=useState(false)
    return <>
    <div className="RightSide">
        <NavIcons/>
        <TrendCard/>
        <button className="button r-button" onClick={()=>setModelOpen(true)} >Share</button>
        <ShareModel modelOpen={modelOPen} setModelOpen={setModelOpen}/>

    </div>
</>
}
export default RightSide;