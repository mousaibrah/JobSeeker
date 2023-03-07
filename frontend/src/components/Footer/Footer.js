import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
const phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={phantom}>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted fixed-bottom footer"
      >
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="http://localhost:3000/">
            JobSeeker
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
