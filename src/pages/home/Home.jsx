import react from 'react';
import "./Home.css"
import ProfileSide from '../../component/profileSide/ProfileSide';
import PostSide from '../../component/postSide/PostSide';
import RightSide from '../../component/RighSide/RightSide';
const Home=()=>{
return<>
<div className='Home'>
    <ProfileSide/>
  <PostSide/>
    <RightSide/>
</div>
</>
}
export default Home;