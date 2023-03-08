import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
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
import SkillsModal from "./SkillsModal";
import PersonalInfo, { PersonalBox } from "./PersonalInfo";
import PostBox from "../dashboard/PostBox";
export const profileContext = createContext();
const ProfilePage = () => {
  const { userId, profileData, setProfileData, profilePosts, setProfilePosts } =
    useContext(AppContext);
  const [skillModal, setSkillModal] = useState(false);

  const [modalShow, setModalShow] = useState(false);
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
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const post = await axios.get(
        `http://localhost:5000/posts/${JSON.parse(userId)}`
      );

      setProfilePosts(post.data.post);
    } catch (error) {}
  };
  const updateProfile = async () => {
    try {
      const update = await axios.put(
        `http://localhost:5000/profile/${JSON.parse(userId)}`,
        profileData
      );
    } catch (error) {}
  };
  const addSkills = async () => {
    try {
      const skillAdded = await axios.put(
        `http://localhost:5000/profile/${JSON.parse(userId)}/skills`,
        { skill: skills }
      );
      // console.log('skillAdded :>> ', skillAdded);
    } catch (error) {
      // console.log('skillAdded :>> ', error);
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
  };
  return (
    <>
      <ProfileNav />
      <profileContext.Provider value={value}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard
                className="mb-4"
                style={{
                  backgroundColor: "#1e1e2a",
                  border: "2px solid #fcfeff",
                }}
              >
                <MDBCardBody className="text-center">
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
                  backgroundColor: "#1e1e2a",
                  border: "1px solid #fcfeff",
                }}
              >
                <MDBCardBody className="p-0">
                  <MDBListGroup className="rounded-3">
                    <MDBListGroupItem
                      className="d-flex justify-content-between align-items-center p-3"
                      style={{
                        backgroundColor: "#1e1e2a",
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
                    {skills.length ? <ProfileSkills data={skills} /> : ""}
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard
                className="mb-4"
                style={{
                  backgroundColor: "#1e1e2a",
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
              <PostBox postsData={profilePosts} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </profileContext.Provider>
    </>
  );
};

export default ProfilePage;
