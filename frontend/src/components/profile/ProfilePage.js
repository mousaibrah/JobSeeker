import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
} from "mdb-react-ui-kit";
import ProfileNav from "./ProfileNav";
import ProfileInput from "./ProfileInput";
import { userContext } from "../../App";
import ProfileSkills from "./ProfileSkills";
export default function ProfilePage() {
  const { userId } = useContext(userContext);

  const [profileData, setProfileData] = useState({
    userImg: "",
    // https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png
    UserName: "",
    // Mousa Ibrahim
    Email: "",
    // Admin@job.com
    mobile: "",
    // 07886037753
    about: "",
    expertise: "",
    // Full-Stack Dev
    skills: [],
    // "mongoDB", "Node Js", "React", "Express"
    education: "",
    // Meraki Academy BootCamp
    userId,
  });
  const {
    userImg,
    UserName,
    about,
    expertise,
    skills,
    education,
    Email,
    mobile,
  } = profileData;
  useEffect(() => {
    getProfileInfo();
  }, []);
  const getProfileInfo = async () => {
    const keyName = ["userImg", "about", "expertise", "skills", "education"];
    try {
      const result = await axios.get(
        `http://localhost:5000/profile/${JSON.parse(userId)}`
      );
      const { userImg, about, expertise, skills, education } = result.data.data;
      const { firstName, lastName, email, phoneNumber } = result.data.userData;
      setProfileData({
        ...profileData,
        userImg,
        UserName: `${firstName} ${lastName}`,
        Email: email,
        mobile: phoneNumber,
        about,
        expertise,
        skills,
        education,
      });

      setTimeout(() => {
        console.log("profileData :>> ", profileData);
      }, 3000);
    } catch (error) {
      console.log("error :>> ", error);
    }
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

                  <MDBBtn>Edit</MDBBtn>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText className="text-dark">Skills</MDBCardText>

                    <MDBBtn size="md">Add</MDBBtn>
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
                    <MDBCardText className="text-muted">{Email}</MDBCardText>
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
