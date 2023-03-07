import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import {Container} from 'react-bootstrap'
import Catagories from "../catagories/Catagories";
import AddPost from "./AddPost";
import DashboardNav from "./DashboardNav";
import OurClient from "./OurClient";
import PostBox from "./PostBox";
const DashBoard = () => {
  
  return  (
    <>
    <DashboardNav/>
    <Container fluid>
      <MDBRow>
        <MDBCol lg='2'>
          <Catagories/>
        </MDBCol>
        <MDBCol lg='8' className="posts-page">
          
          <AddPost/>
          
        <PostBox/>
        </MDBCol>

    
    <MDBCol lg='2'>
      <OurClient/>
    </MDBCol>

    </MDBRow>
</Container>
</>
    )
};

export default DashBoard;
