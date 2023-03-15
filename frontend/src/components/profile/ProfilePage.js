import React, { useState, useEffect, createContext } from "react";
import { BsFillPatchPlusFill, BsPencilSquare } from "react-icons/bs";
import axios from "axios";
import "./Style.css";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import ProfileNav from "./ProfileNav";
import { AppContext } from "../State/AppState";
import ProfileSkills from "./ProfileSkills";
import UpdateProfile from "./UpdateProfile";
import { Button } from "../styled/Button.Styled";
import { Box } from "../styled/Box.Styled";
import SkillsModal from "./SkillsModal";
import PersonalInfo, { PersonalBox } from "./PersonalInfo";
import PostBox from "../Feed/PostBox";
import Swal from "sweetalert2";
import UploadImg from "./UploadImg";
import { Container } from "../styled/Container.Styled";
export const profileContext = createContext();
const ProfilePage = () => {
  const userId = localStorage.getItem("userId");
  const [skillModal, setSkillModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [profilePicModal, setProfilePicModal] = useState(false);
  const {
    userImg,
    UserName,
    about,
    expertise,
    skills,
    education,
    email,
    mobile,
  } = profileData;
  useEffect(() => {
    getProfileInfo();
  }, []);
  const getProfileInfo = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/profile/${JSON.parse(userId)}`
      );
      const post = await axios.get(
        `http://localhost:5000/posts/author/${JSON.parse(userId)}`
      );
      setPosts(post?.data?.post);
      setProfileData(result.data.data);
    } catch (error) {
      console.log("error PP 57:>> ", error);
    }
  };

  const updateProfile = async () => {
    try {
      const update = await axios.put(
        `http://localhost:5000/profile/${JSON.parse(userId)}`,
        profileData
      );
      console.log("update :>> ", update);
    } catch (error) {
      console.log("error PP 68 :>> ", error);
    }
  };
  const addSkills = async () => {
    try {
      const skillAdded = await axios.put(
        `http://localhost:5000/profile/${JSON.parse(userId)}/skills`,
        { skill: skills }
      );
      setProfileData(skillAdded.data);
    } catch (error) {
      console.log("error PP 79:>> ", error);
    }
  };
  const value = {
    modalShow,
    setModalShow,
    updateProfile,
    profileData,
    setProfileData,
    skillModal,
    setSkillModal,
    addSkills,
    profilePicModal,
    setProfilePicModal,
  };

  return (
    <>
      <ProfileNav />
      <profileContext.Provider value={value}>
        <UploadImg />
        <Container className="Container">
          <div className="Col">
            <Box gb={"30px"}>
              <div className="top-box">
                <BsPencilSquare
                  className="edit-img-btn icon"
                  onClick={() => {
                    setProfilePicModal(true);
                  }}
                />
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
                <BsFillPatchPlusFill
                  className="add-skill-btn icon"
                  onClick={() => {
                    setSkillModal(true);
                  }}
                />
              </div>
              <SkillsModal />
              <div className="skill-box">
                {skills?.length ? <ProfileSkills data={skills} /> : ""}
              </div>
            </Box>
          </div>
          <div className="Col">
            <Box className="profile-info-about">
              <BsPencilSquare
                className="edit-profile-btn icon"
                onClick={() => {
                  setModalShow(true);
                }}
              />

              {modalShow && <UpdateProfile />}
             
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
      </profileContext.Provider>
    </>
  );
};

export default ProfilePage;
/*  <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard
                className="mb-4"
                style={{
                  backgroundColor: "#2d2e37",
                  border: "2px solid #fcfeff",
                }}
              >
                <MDBCardBody className="text-center">
                  <BsPencilSquare
                    className="edit-img-btn"
                    onClick={() => {
                      setProfilePicModal(true);
                    }}
                  />

                  <MDBCardImage
                    src={userImg}
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />

                  <MDBListGroup className="rounded-3">
                    <PersonalBox
                      info={{ text: "Aria Of EXPERTISE :", value: expertise }}
                    />
                    <PersonalBox
                      info={{ text: "EDUCATION :", value: education }}
                    />
                    <Button onClick={() => setModalShow(true)}>Edit</Button>
                    {modalShow && <UpdateProfile />}
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="mb-4 mb-lg-0"
                style={{
                  backgroundColor: "#2d2e37",
                  border: "1px solid #fcfeff",
                }}
              >
                <MDBCardBody className="p-0">
                  <MDBListGroup className="rounded-3">
                    <MDBListGroupItem
                      className="d-flex justify-content-between align-items-center p-3"
                      style={{
                        backgroundColor: "#2d2e37",
                        border: "1px solid #fcfeff",
                      }}
                    >
                      <MDBCardText style={{ color: "#fcfeff" }}>
                        Skills
                      </MDBCardText>
                      <Button
                        onClick={() => {
                          setSkillModal(true);
                        }}
                        size="md"
                      >
                        Add
                      </Button>
                      <SkillsModal />
                    </MDBListGroupItem>
                    {skills?.length ? <ProfileSkills data={skills} /> : ""}
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard
                className="mb-4"
                style={{
                  backgroundColor: "#2d2e37",
                  border: "1px solid #fcfeff",
                }}
              >
                <MDBCardBody>
                  <PersonalInfo info={{ text: "Full Name", item: UserName }} />
                  <hr />
                  <PersonalInfo info={{ text: "Email", item: email }} />
                  <hr />
                  <PersonalInfo info={{ text: "Mobile", item: mobile }} />
                  <hr />
                  <PersonalInfo info={{ text: "About", item: about }} />
                </MDBCardBody>
              </MDBCard>
              <PostBox postsData={{ posts }} />
            </MDBCol>
          </MDBRow>
        </MDBContainer> */
