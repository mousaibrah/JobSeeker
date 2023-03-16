import axios from "axios";
import { MDBCardImage } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostBox from "../Feed/PostBox";
import PersonalInfo, { PersonalBox } from "../profile/PersonalInfo";
import ProfileSkills from "../profile/ProfileSkills";
import { Box } from "../styled/Box.Styled";
import { Container } from "../styled/Container.Styled";
import ViewProfileNav from "./ViewProfileNav";

const ViewProfile = () => {
  const { userId } = useParams();
  const [profileInfo, setProfileInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const {
    UserName,
    email,
    location,
    mobile,
    userImg,
    skills,
    expertise,
    about,
    education,
  } = profileInfo;
  useEffect(() => {
    getProfileInfo();
  }, []);
  const getProfileInfo = async () => {
    try {
      const profile = await axios.get(
        `http://localhost:5000/profile/${userId}`
      );
      const post = await axios.get(
        `http://localhost:5000/posts/author/${userId}`
      );
      setPosts(post?.data?.post);
      setProfileInfo(profile.data.data);
    } catch (error) {
      console.log("error.message :>> ", error.message);
    }
  };
  return (
    <>
      <ViewProfileNav />
      <Container className="Profile">
        <div className="Profile-Col">
          <Box gb={"30px"}>
            <div className="top-box">
              <MDBCardImage
                src={userImg}
                className="rounded-circle"
                style={{ width: "150px" }}
                fluid
              />
            </div>
            <PersonalBox
              info={{ text: "Aria Of EXPERTISE :", value: expertise }}
            />
            <PersonalBox info={{ text: "EDUCATION :", value: education }} />
          </Box>
          <Box>
            <div className="Skill-header">
              <p>Skills</p>
            </div>
            <div className="skill-box">
              {skills?.length ? <ProfileSkills data={skills} /> : ""}
            </div>
          </Box>
        </div>
        <div className="Profile-Col">
          <Box className="profile-info-about">
            <PersonalInfo info={{ text: "Full Name", item: UserName }} />
            <hr />
            <PersonalInfo info={{ text: "Email", item: email }} />
            <hr />
            <PersonalInfo info={{ text: "Mobile", item: mobile }} />
            <hr />
            <PersonalInfo info={{ text: "About", item: about }} />
          </Box>
          <PostBox postsData={{ posts }} />
        </div>
      </Container>
    </>
  );
};

export default ViewProfile;
