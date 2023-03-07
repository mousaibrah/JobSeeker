import React from "react";
import { MDBCard, MDBListGroupItem } from "mdb-react-ui-kit";
import { Col, Row } from "react-bootstrap";
const Catagories = () => {
  return (
    <>
      <MDBCard>
        <MDBListGroupItem style={{ fontSize: "22px", fontWeight: "500" }}>
          Catagories
        </MDBListGroupItem>
        <Row>
          <Col lg="2"></Col>
          <Col lg="10">
            <hr />
            <MDBListGroupItem className="catagories">Doctor's</MDBListGroupItem>
            <hr />
            <MDBListGroupItem className="catagories">
              Engineer's
            </MDBListGroupItem>
            <hr />
            <MDBListGroupItem className="catagories">Nurse's</MDBListGroupItem>
            <hr />
            <MDBListGroupItem className="catagories">Lawyer's</MDBListGroupItem>
            <hr />
            <MDBListGroupItem className="catagories">
              Builder's
            </MDBListGroupItem>
            <hr />
          </Col>
        </Row>
      </MDBCard>
    </>
  );
};

export default Catagories;
