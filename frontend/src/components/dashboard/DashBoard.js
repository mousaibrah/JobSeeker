import axios from "axios";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {v4} from 'uuid'
import Catagories from "../catagories/Catagories";
import AddPost from "./AddPost";
import DashboardNav from "./DashboardNav";
import OurClient from "./OurClient";
import PostBox from "./PostBox";
const DashBoard = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const data = await axios.get("http://localhost:5000/posts");
      setPosts(data.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <>
      <DashboardNav />
      <Container fluid>
        <MDBRow>
          <MDBCol lg="2">
            <Catagories />
          </MDBCol>
          <MDBCol lg="8" className="posts-page">
            <AddPost />

            <PostBox postsData={posts} key={v4()} />
          </MDBCol>

          <MDBCol lg="2">
            <OurClient />
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
};

export default DashBoard;
