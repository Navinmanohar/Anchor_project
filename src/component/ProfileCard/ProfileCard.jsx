import react from 'react';
import cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg';
import './profileCard.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileCard = ({ location }) => {
    // const profilepage=false;
    const { user } = useSelector(state => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    // console.log(user)
    const posts = useSelector(state => state.postReducer.posts)
    // console.log(posts)
    return <>
        <div className='profileCard'>
            <div className="profileImage">  
                 <img src={user.coverPicture ?serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt='cover'/> 
               
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.jpg"} alt="profile" /> 
            </div>
            <div className='profileName'>
                <span>{user?.firstname} {user?.lastname}</span>
                <span>{user?.wrokAt ? user.workAt : "write about yourself"}</span>

            </div>
            <div className='followStatus'>
                <hr />
                <div>
                    <div className='follow'>
                        <span>{user?.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    <div className='veticalline'></div>
                        
                        <div className='follow'>
                            <span>{user?.following.length}</span>
                            <span>Following</span>
                            </div>
                    
                    {
                        location === "ProfileCard" && (
                            <>
                                <div className="veticalline"
                                ></div>
                                <div className='follow'>
                                    <span>{posts.filter((post) => post.userId === user._id).length}</span>
                                    <span>posts</span>
                                </div>{" "}


                            </>)
                    }
                </div>
                <hr />
            </div >
            {

                location === "ProfileCard" ? " " : <span>
                    <Link to={`/profile/${user?._id}`} style={{ textDecoration: "none", color: "inherit" }}>My profile</Link>
                </span>
            }


        </div>
    </>
}
export default ProfileCard