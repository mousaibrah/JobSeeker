import React from "react";
import { MDBCardImage, MDBCardText } from "mdb-react-ui-kit";

import { Box } from "../styled/Box.Styled";
import { Row } from "../styled/Row.Styled";
import { Col } from "../styled/Column.Styled";
const LeftNav = () => {
  return (
    <Box>
      <Row>
        <Col>
          <img
            className="user-img-sidebar"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          />
        </Col>
        <Col>
          <MDBCardText variant="dark">UserName</MDBCardText>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>Location :</Col>
        <Col>Experience :</Col>
      </Row>
      <hr />
      <Row>
        <Row>Years Of Experience</Row>
      </Row>
      <Row>
        <h3>Social Accounts</h3>
        <hr />
        <p>facebook</p>
        <p>github</p>
      </Row>
    </Box>
  );
};

export default LeftNav;
