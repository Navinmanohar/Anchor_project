import React from "react";
import "./TrendCard.css";
import {TrendData} from "../../Data/TrendData";
const TrendCard=()=>{
    return<>
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {
            TrendData.map((trand,index)=>{
                return<>
                <div className="trend"> 
                    <span>#{trand.name} key={index}</span>
                    <span>{trand.shares} shares key={index}</span>
                    </div>
                    </>
            })
        }
    TrendCard
    </div>
    </>
}
export default TrendCard;