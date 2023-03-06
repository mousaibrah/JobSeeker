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
import { userContext } from "../../App";
import ProfileSkills from "./ProfileSkills";
import UpdateProfile from "./UpdateProfile";
import { Button } from "react-bootstrap";
export const profileContext = createContext();
export default function ProfilePage() {
  const { userId } = useContext(userContext);
  const [profileData, setProfileData] = useState({
    userImg: "",
    UserName: "",
    email: "",
    mobile: "",
    about: "",
    expertise: "",
    skills: [],
    education: "",
    userId,
  });
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
    getProfileInfo();
  }, []);
  const getProfileInfo = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/profile/${JSON.parse(userId)}`
      );
      const {
        userImg,
        UserName,
        about,
        expertise,
        skills,
        education,
        email,
        mobile,
      } = result.data.data;

      setProfileData({
        ...profileData,
        userImg,
        UserName,
        email,
        mobile,
        about,
        expertise,
        skills,
        education,
      });
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const updateProfile = async () => {};
  const value = {
    modalShow,
    setModalShow,
    updateProfile,
    profileData,
    setProfileData,
  };
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <ProfileNav />

      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={userImg}
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText className="text-dark">
                      Aria Of EXPERTISE :
                    </MDBCardText>
                    <MDBCardText>{expertise}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText className="text-dark">EDUCATION :</MDBCardText>
                    <MDBCardText>{education}</MDBCardText>
                  </MDBListGroupItem>

                  <Button onClick={() => setModalShow(true)}>Edit</Button>
                  <profileContext.Provider value={value}>
                    {modalShow && <UpdateProfile />}
                  </profileContext.Provider>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText className="text-dark">Skills</MDBCardText>

                    <Button size="md">Add</Button>
                  </MDBListGroupItem>
                  {skills.length ? <ProfileSkills data={skills} /> : ""}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-dark">Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{UserName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-dark">Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-dark">Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{mobile}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-dark">About</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{about}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            {/* <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-dark">Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{UserName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-dark">Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{Email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-dark">Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{Mobile}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-dark">About</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{about}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
