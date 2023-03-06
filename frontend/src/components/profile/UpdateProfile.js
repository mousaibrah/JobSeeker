import React, { useState, useContext } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { userContext } from "../../App";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import ModalRow from "./ModalRow";
import { profileContext } from "./ProfilePage";
const UpdateProfile = () => {
  const { userId } = useContext(userContext);
  const {
    modalShow,
    setModalShow,
    updateProfile,
    profileData,
    setProfileData,
  } = useContext(profileContext);
  const { userImg, UserName,email,mobile,about,expertise,skills,education,} = profileData;
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
          <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
        </Modal.Header>
        <MDBCard>
          <Modal.Body>
            {/* <MDBCardImage
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              className="rounded-circle"
              style={{ width: "100px" }}
              fluid
            /> */}
            <MDBRow>
              <MDBCol col="6">
                <MDBCardText>UserName</MDBCardText>
              </MDBCol>
              <MDBCol col="6">
                <MDBInput
                  className="border-primary border border-3"
                  id="formControlDisabled"
                  value={UserName}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      userName: e.target.value,
                    });
                  }}
                  type="text"
                  disabled={false}
                />
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol col="6">
                <MDBCardText>email</MDBCardText>
              </MDBCol>
              <MDBCol col="6">
                <MDBInput
                  className="border-primary border border-3"
                  id="formControlDisabled"
                  value={email}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      email: e.target.value,
                    });
                  }}
                  type="text"
                  disabled={true}
                />
              </MDBCol>
            </MDBRow>
            <hr />

            <MDBRow>
              <MDBCol col="6">
                <MDBCardText>mobile</MDBCardText>
              </MDBCol>
              <MDBCol col="6">
                <MDBInput
                  className="border-primary border border-3"
                  id="formControlDisabled"
                  value={mobile}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      mobile: e.target.value,
                    });
                  }}
                  type="text"
                  disabled={false}
                />
              </MDBCol>
            </MDBRow>
            <hr />

            <MDBRow>
              <MDBCol col="6">
                <MDBCardText>education</MDBCardText>
              </MDBCol>
              <MDBCol col="6">
                <MDBInput
                  className="border-primary border border-3"
                  id="formControlDisabled"
                  value={education}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      education: e.target.value,
                    });
                  }}
                  type="text"
                  disabled={false}
                />
              </MDBCol>
            </MDBRow>
            <hr />

            <MDBRow>
              <MDBCol col="6">
                <MDBCardText>expertise</MDBCardText>
              </MDBCol>
              <MDBCol col="6">
                <MDBInput
                  className="border-primary border border-3"
                  id="formControlDisabled"
                  value={expertise}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      expertise: e.target.value,
                    });
                  }}
                  type="text"
                  disabled={false}
                />
              </MDBCol>
            </MDBRow>
            <hr />

            <MDBRow>
              <MDBCol col="6">
                <MDBCardText>about</MDBCardText>
              </MDBCol>
              <MDBCol col="6">
                <MDBInput
                  className="border-primary border border-3"
                  id="formControlDisabled"
                  value={about}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      about: e.target.value,
                    });
                  }}
                  type="text"
                  disabled={false}
                />
              </MDBCol>
            </MDBRow>
            {/* <hr />
            <ModalRow text={"Aria Of EXPERTISE :"}/>
            <hr />
            <ModalRow text={"EDUCATION :"} input={''}/>
            <hr />
            <ModalRow text={"Full Name"} input={''}/>
            <hr />
            <ModalRow text={"Email"} input={''}/>
            <hr />
            <ModalRow text={"Mobile"} input={''}/>
            <hr />
            <ModalRow text={"About"} input={''}/> */}
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
