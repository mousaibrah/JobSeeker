import "./Style.css";
import axios from "axios";
import { MDBCardBody, MDBCardText, MDBListGroupItem } from "mdb-react-ui-kit";

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { v4 } from "uuid";
import AdminNav from "./AdminNav";
import { useNavigate } from "react-router-dom";
import { Container } from "../styled/Container.Styled";
import { Col } from "../styled/Column.Styled";
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
      >
        <MDBCardText className="box-text">{item}</MDBCardText>
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
      {" "}
      <AdminNav />
      <Container className="DashBoard">
        <Col className="DashBoard-Nav">
          <MDBCardBody className="Card-Body">{CardItem}</MDBCardBody>
        </Col>
        <Col className="table-col">
          <p className="DashBoard-Heading">Users</p>
          <div className="table-responsive">
            <Table bordered hover className="Table">
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
          </div>
        </Col>
      </Container>
    </>
  );
};

export default DashBoard;
