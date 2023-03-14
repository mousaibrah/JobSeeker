import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { v4 } from "uuid";
import AdminNav from "./AdminNav";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();
  const items = ["Members", "Jobs", "Alerts", "Delay"];
  const [client, setClient] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    getClient();
  }, []);
  const getClient = async () => {
    try {
      const clientData = await axios.get("http://localhost:5000/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClient(clientData.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const CardItem = items.map((item) => {
    return (
      <MDBListGroupItem
        key={v4()}
        className="d-flex justify-content-between align-items-center p-3"
        style={{
          backgroundColor: "#2d2e37",
          borderBottom: "1px solid #0275d8",
          marginBottom: "4px",
        }}
      >
        <MDBCardText className="box-text" style={{ color: "#fcfeff" }}>
          {item}
        </MDBCardText>
      </MDBListGroupItem>
    );
  });

  const sortClient = client?.map((oneClient, i) => {
    const { clientId, clientRole, clientName, createdAt } = oneClient;
    return (
      <tr key={v4()}>
        <td>{i + 1}</td>
        <td>{clientId}</td>
        <td>{clientRole}</td>
        <td>{clientName}</td>
        <td>{createdAt?.slice(0, 10)}</td>
        <td onClick={() => navigate(`/profile/${clientId}`)}>
          {`${clientName}`} Profile
        </td>
      </tr>
    );
  });

  return (
    <>
      <AdminNav />
      <div className="DashBoard">
        <Container fluid>
          <Row>
            <Col
              lg="2"
              style={{ backgroundColor: "#2d2e37", color: "#fcfeff" }}
              className="DashBoard-Nav"
            >
              <MDBCard
                className="mb-4"
                style={{
                  backgroundColor: "#2d2e37",
                }}
              >
                <MDBCardBody className="text-center">
                  <MDBListGroup className="rounded-3">{CardItem}</MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </Col>
            <Col lg="10">
              <Row className="DashBoard-Heading">users</Row>
              <Row>
                <Table bordered hover className="text-light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>CLIENT ID</th>
                      <th>CLIENT ROLE</th>
                      <th>CLIENT NAME</th>
                      <th>CLIENT JOIN DATE</th>
                      <th>VIEW PROFILE</th>
                    </tr>
                  </thead>
                  <tbody>{sortClient}</tbody>
                </Table>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DashBoard;
