import React, { useState, useContext } from "react";
import axios from "axios";
import { userContext } from "../../App";
const Profile = () => {
  const { userId } = useContext(userContext);
  const [profileData, setProfileData] = useState({
    userImg: "",
    UserName: "",
    about: "",
    expertise: "",
    skills: "",
    education: "",
    userId,
  });
  const { userImg, UserName, about, expertise, skills, education } =
    profileData;
  return (
    <div>
      <div className="user-img">
        <input
          type="text"
          value={userImg}
          onChange={(e) =>
            setProfileData({ ...profileData, userImg: e.target.value })
          }
        />
      </div>
      <div className="user-name">
        <input
          type="text"
          value={UserName}
          onChange={(e) =>
            setProfileData({ ...profileData, UserName: e.target.value })
          }
        />
      </div>
      <div className="about-user">
        <input
          type="text"
          value={about}
          onChange={(e) =>
            setProfileData({ ...profileData, about: e.target.value })
          }
        />
      </div>
      <div className="user-edu">
        <input
          type="text"
          value={expertise}
          onChange={(e) =>
            setProfileData({ ...profileData, expertise: e.target.value })
          }
        />
      </div>
      <div className="user-exp">
        <input
          type="text"
          value={skills}
          onChange={(e) =>
            setProfileData({ ...profileData, skills: e.target.value })
          }
        />
      </div>
      <div className="user-skill">
        <input
          type="text"
          value={education}
          onChange={(e) =>
            setProfileData({ ...profileData, education: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Profile;
