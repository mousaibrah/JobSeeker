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
      <MDBCard style={{ backgroundColor: "#2d2e37" }}>
        <p style={{ textAlign: "center", padding: "0px 4px" }}>
          Hope You Enjoy Our Website
        </p>
        <ul>
          <li>Please Let Us Know</li>
          <li>If You Have Any Problem</li>
          <li>Or If You See offensive</li>
          <li>Read About Our services</li>
          <li>Please Rate Our services</li>
          <li>Enjoy ❤️</li>
        </ul>
      </MDBCard>
      
    </>
  );
};

export default OurClient;
