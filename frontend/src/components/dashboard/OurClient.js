import React from "react";
import {
  MDBCard,
  MDBListGroupItem,
  MDBCol,
  MDBRow,
  MDBCardImage,
} from "mdb-react-ui-kit";

const OurClient = () => {
  return (
    <>
      <MDBCard>
        <MDBCol lg="2"></MDBCol>
        <MDBCol lg="10">
          <MDBRow>
            <MDBCol lg='3'></MDBCol>
            <MDBCol>
            <MDBListGroupItem style={{ fontSize: "22px", fontWeight: "500" }}>
              OUR CLIENT
            </MDBListGroupItem>
            </MDBCol>
          </MDBRow>
          <hr/>
          <MDBRow>
            <MDBCol>
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                className="rounded-circle"
                style={{ width: "35px" }}
                fluid
              />
            </MDBCol>
            <MDBCol>
              <MDBListGroupItem className="catagories">
                Doctor's
              </MDBListGroupItem>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBCard>
    </>
  );
};

export default OurClient;
