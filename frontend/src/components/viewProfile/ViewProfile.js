import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostBox from "../Feed/PostBox";
import PersonalInfo, { PersonalBox } from "../profile/PersonalInfo";
import ProfileSkills from "../profile/ProfileSkills";
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
      <MDBContainer className="py-5">
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
                  <PersonalBox info={{ text: "Location :", value: location }} />
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
      </MDBContainer>
    </>
  );
};

export default ViewProfile;
