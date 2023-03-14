import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBListGroup,
} from "mdb-react-ui-kit";
import { PersonalBox } from "../profile/PersonalInfo";
import { Link } from "../styled/Links";
import Swal from "sweetalert2";
import { AppContext } from "../State/AppState";

const LeftNav = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [personalInfo, setPersonalInfo] = useState({});
  const Role = JSON.parse(localStorage.getItem("role"));
  const { setRole } = useContext(AppContext);
  const { userImg, UserName, education, location } = personalInfo;
  useEffect(() => {
    getPersonalInfo();
  }, []);
  const getPersonalInfo = async () => {
    try {
      const personalInfo = await axios.get(
        `http://localhost:5000/profile/${userId}`
      );
      const { userImg, UserName, education, location } = personalInfo.data.data;
      setPersonalInfo({ userImg, UserName, education, location });
    } catch (error) {
      console.log("error LN 21:>> ", error);
    }
  };
  const upgradeRole = async () => {
    try {
      const sendRequest = await axios.get(
        `http://localhost:5000/users/role/${userId}`
      );
      if (sendRequest.data) {
        setRole("COMPANY");
        localStorage.setItem("role", JSON.stringify("COMPANY"));
      }
    } catch (error) {
      console.log("error.message :>> ", error.message);
    }
  };
  const upgradeRoleModal = () => {
    Swal.fire({
      title: `When You Upgrade Your Role
      1.You Can Create Job Offers (Post)
      2.You Can Upgrade Your Profile 
      3.!You Can't Apply For Job's No More
      
      Are You Sure You Want To Proceed
      `,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        upgradeRole();
      }
    });
  };
  return (
    <MDBCard
      className="mb-4"
      style={{ backgroundColor: "#2d2e37", border: "2px solid #fcfeff" }}
    >
      <MDBCardBody className="text-center">
        <MDBCardImage
          src={userImg}
          className="rounded-circle"
          style={{ width: "150px" }}
          fluid
        />
        <MDBListGroup className="rounded-3">
          <PersonalBox info={{ text: "Name :", value: UserName }} />
          <PersonalBox info={{ text: "Education :", value: education }} />
          <PersonalBox info={{ text: "Location :", value: location }} />
          {Role === "USER" && (
            <>
              <hr />
              <p className="upgrade-btn" onClick={upgradeRoleModal}>
                Upgrade To Company Account
              </p>
              <hr />
            </>
          )}
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
};

export default LeftNav;
