import React, { useState, useRef, useEffect } from "react";
import profileimage from "../../img/profileImg.jpg";
import "./postShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../action/uploadAction";
import { uploadPost } from "../../action/uploadAction";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const uploading = useSelector((state) => state.postReducer.uploding);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const desc = useRef();

  const OnImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      setImage(img);
      console.log("this is imge",img)
    }
  };
  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };
  const handleshare =async (e) =>{
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;

      try {
        dispatch(uploadImage(data));
        console.log(data)
      } catch (e) {
        console.log(e);
      }
    }
    dispatch(uploadPost(newPost));
    console.log("this is new posts",newPost)
    reset();
  };
let objectUrl="";
  useEffect(() => {
    if (image) {
      // Create object URL after state update
     objectUrl = URL.createObjectURL(image);
      console.log("Object URL:", objectUrl);
      console.log("Object setimage:", image);
    }
  }, [image]);

  return (
    <>
      <div className="postShare">
        <img
          src={
            user?.profilePicture
              ? serverPublic + user?.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt="profile"
        />

        <div>
          <input
            type="text"
            placeholder="what's happening"
            ref={desc}
            required
          />

          <div className="postOption">
            <div
              className="option"
              style={{ color: "var(--photo)" }}
              onClick={() => {
                imageRef.current.click();
              }}
            >
              <UilScenery />
              Photo
            </div>
            <div className="option" style={{ color: "var(--video)" }}>
              <UilPlayCircle />
              video
            </div>
            <div className="option" style={{ color: "var(--location" }}>
              <UilLocationPoint />
              Location
            </div>
            <div className="option" style={{ color: "var(--shedule)" }}>
              <UilSchedule />
              Schedule
            </div>
            <button
              className="button ps-button"
              disabled={uploading}
              onClick={handleshare}
            >
              {uploading ? "uploding..." : "Share"}
            </button>

            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={OnImageChange}
              />
            </div>
          </div>

          {image && (
            <div className="previewImage">
              <UilTimes
                onClick={() => {
                  setImage(null);
                }}
              />
              <img src={objectUrl} alt="preview" />
            </div>
          ) }
        </div>
      </div>
    </>
  );
};

export default PostShare;
