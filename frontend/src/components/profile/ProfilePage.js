import React, { useContext, useState, useEffect, createContext } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { Input } from "../styled/Input.Styled";
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
import Swal from "sweetalert2";
import UploadImg from "./UploadImg";
export const profileContext = createContext();
const ProfilePage = () => {
  const userId = localStorage.getItem("userId");
  const [skillModal, setSkillModal] = useState(false);
  const [profilePosts, setProfilePosts] = useState([]);
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
        `http://localhost:5000/posts/${JSON.parse(userId)}`
      );
      setProfilePosts(post.data.post);
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
  };

  // const updateImg = async () => {
  //   const { value: file } = await Swal.fire({
  //     title: "Select image",
  //     input: "file",

  //   });

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = async (e) => {
  //       setImage(file);
  //       const data = new FormData();
  //       data.append("file", image);
  //       data.append("upload_preset", "ym3yv62c");
  //       try {
  //         const result = await axios.post(
  //           "https://api.cloudinary.com/v1_1/dvgnuchjw/upload",
  //           data
  //         );
  //         setUrl(result.data.url);
  //         setProfileData({...profileData,userImg:result.data.url})

  //       } catch (error) {
  //         console.log("error :>> ", error);
  //       }

  //       Swal.fire({
  //         title: "Your uploaded picture",
  //         imageUrl: e.target.result,
  //         imageAlt: "The uploaded picture",

  //       });
  //     };
  //     reader.readAsDataURL(file);
  //     setTimeout(() => {
  //       updateProfile()
  //     }, 5000);
  //   }
  // };

  return (
    <>
      <ProfileNav />
      <profileContext.Provider value={value}>
        <UploadImg toggle={{ profilePicModal, setProfilePicModal }} />
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
                    {skills?.length ? <ProfileSkills data={skills} /> : ""}
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
