import React from "react";
import './followersCard.css'
import {Followers} from "../../Data/FollowersData"
import User from "../../User/User";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux"

import { getAllUser } from "../../Api/userRequest";
import FollowersModal from "../FollowModel/FollowModel";
// import USer from "../"

const FollowersCard=()=>{
    const [persons,setPersons]=useState([]);
    const [modalOpened, setModalOpened] = useState(false);
    const {user}=useSelector(state=>state.authReducer.authData);
useEffect(()=>{
    const fetchPerson=async()=>{
        const {data}=await getAllUser()
        setPersons(data)
    }
    fetchPerson()
},[])

    return<>
    <div className="followerCard">
<h3>
    People you may know
</h3>
{
    persons.map((person,id)=>{
        if(person._id!==user._id)
        return <><User person={person} key={id}/></>
    })
}
         <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />  
    </div>
    </>
}


export default FollowersCard