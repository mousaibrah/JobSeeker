import React, { useState, useContext } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from "../styled/Button.Styled";

import { MDBCard, MDBCardText, MDBCol, MDBRow } from "mdb-react-ui-kit";

import { profileContext } from "./ProfilePage";
import ProfileInput from "./input/ProfileInput";
const UpdateProfile = () => {
  const {
    modalShow,
    setModalShow,
    updateProfile,
    profileData,
    setProfileData,
  } = useContext(profileContext);
  const { UserName, email, mobile, about, expertise, education } = profileData;
  const setEmail = (value) => {
    setProfileData({ ...profileData, email: value });
  };
  const setUserName = (value) => {
    setProfileData({ ...profileData, userName: value });
  };
  const setMobile = (value) => {
    setProfileData({ ...profileData, mobile: value });
  };
  const setAbout = (value) => {
    setProfileData({ ...profileData, about: value });
  };
  const setEducation = (value) => {
    setProfileData({ ...profileData, education: value });
  };
  const setExpertise = (value) => {
    setProfileData({ ...profileData, expertise: value });
  };
  return (
    <>
      <Modal
        onHide={() => {
          setModalShow(false);
        }}
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="update-text"
          >
            Edit
          </Modal.Title>
        </Modal.Header>
        <MDBCard>
          <Modal.Body>
            <ProfileInput
              onFunction={setUserName}
              input={{
                title: "UserName",
                initValue: UserName,
                isDisable: false,
              }}
            />
            <hr />
            <ProfileInput
              onFunction={setEmail}
              input={{ title: "Email", initValue: email, isDisable: true }}
            />
            <hr />
            <ProfileInput
              onFunction={setMobile}
              input={{ title: "Mobile", initValue: mobile, isDisable: false }}
            />
            <hr />
            <ProfileInput
              onFunction={setEducation}
              input={{
                title: "Education",
                initValue: education,
                isDisable: false,
              }}
            />
            <hr />
            <ProfileInput
              onFunction={setExpertise}
              input={{
                title: "Expertise",
                initValue: expertise,
                isDisable: false,
              }}
            />
            <hr />
            <MDBRow>
              <MDBCol col="6">
                <MDBCardText className="update-text">About</MDBCardText>
              </MDBCol>
              <MDBCol col="6">
                <Form.Control
                  id="about-form"
                  as="textarea"
                  onChange={(e) =>
                    setProfileData({ ...profileData, about: e.target.value })
                  }
                  rows={3}
                  
                />
              </MDBCol>
            </MDBRow>

            {/* <ProfileInput
              onFunction={setAbout}
              input={{ title: "About", initValue: about, isDisable: false }}
            /> */}
          </Modal.Body>
        </MDBCard>
        <Modal.Footer>
          <Button
            onClick={() => {
              setModalShow(false);
              updateProfile();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateProfile;
