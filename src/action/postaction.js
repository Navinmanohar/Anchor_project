import * as PostApi from "../Api/PostRequist"


export const getTimeLinePosts=(id)=>async(dispatch)=>{
    dispatch({type:"RETREIVING_START"})
    try{
        const {data}=await PostApi.getTimeLinePosts(id)
        dispatch({type:"RETREVING_SUCCESS",data:data})
    }catch(e){
        dispatch({type:"RETREVING_FAIL"})
        console.log(e)
    }
}