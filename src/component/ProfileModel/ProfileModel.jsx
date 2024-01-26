
import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../action/uploadAction';
import { updateUSer } from '../../action/UserAction';

function ProfileModel({ modelOpen, setModelOpen, data }) {
 
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [fromData, setformData] = useState(other)
  const [profilePicture, setProfilePicture] = useState(null)
  const [coverPicture, setCoverPicture] = useState(null);
  const dispatch = useDispatch();
  const params = useParams()
  const { user } = useSelector(state => state.authReducer.authData)


  const handelChange = (e) => {
    setformData({ ...fromData, [e.target.name]: e.target.value })
    
  }


  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profileImage" ? setProfilePicture(img) : setCoverPicture(img);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = fromData;
    if (profilePicture) {
      const data = new FormData(); // <-- Corrected here
      const fileName = Date.now() + profilePicture.name;
      data.append("name", fileName)
      data.append("file", profilePicture)
      UserData.profilePicture = fileName;
    
      try {
        dispatch(uploadImage(data))
      }
      catch (e) {
        console.log(e);
      }

      if (coverPicture) {
        const data = new FormData(); // <-- Corrected here
        const fileName = Date.now() + coverPicture.name
        data.append("name", fileName)
        data.append("file", coverPicture)
        UserData.coverPicture = fileName;

        try {
          dispatch(uploadImage(data))
        }
        catch (e) {
          console.log(e);
        }
      }
    }

    dispatch(updateUSer(params.id,UserData))
    setModelOpen(false)
}



  return (
    <>
      <Modal
        opened={modelOpen}
        onClose={() => setModelOpen(false)}
        title="Authentication"
        size='65%'
        overlayProps={{

          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,

        }}
      >
        <form className='infoForm'>
          <h3>Your are info</h3>
          <div >

            <input type="text" placeholder="First nmae"
              className="infoInput" name="firstname" onChange={handelChange} value={fromData.firstname} />

            <input type="text" placeholder="Last nmae"
              className="infoInput" name="lastname" onChange={handelChange} value={fromData.lastname} />
          </div>
          <div>


            <input type="text" placeholder="Work At"
              className="infoInput" name="workAt" onChange={handelChange} value={fromData.workAt} />


          </div>
          <div >

            <input type="text" placeholder="Lives In"
              className="infoInput" name="livesIn" onChange={handelChange} value={fromData.livesIn} />

            <input type="text" placeholder="
          country"
              className="infoInput" name="Country" onChange={handelChange} value={fromData.country} />
          </div>
          <div >

            <input type="text" placeholder="RelationShip Status"
              className="infoInput" name="relationship" onChange={handelChange} value={fromData.relationship} />


          </div>
          <div >
            <label htmlFor="profileImage" >Profile image</label>
            <input type="file" name="profilePicture" id='profileImage' onChange={onImageChange} />
            <label htmlFor="CoverImage" >Cover Image</label>
            <input type="file" name='coverPicture' id='CoverImage' onChange={onImageChange}/>
          </div>
          <button className='button infoButton' onClick={handleSubmit}>Update</button>
        </form>
        {/* Modal content */}
      </Modal>


    </>
  );
}

export default ProfileModel;