import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { v4 } from "uuid";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
const PostBox = ({ postsData }) => {
  const [maxLength, setMaxLength] = useState(250);
  const [isCollapse, setIsCollapse] = useState(false);
  const Post = postsData.map((post) => {
    return (
      <MDBCard key={post._id}>
        <MDBRow>
          <MDBCol lg="1">
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              className="rounded-circle"
              style={{ width: "35px" }}
              fluid
            />
          </MDBCol>
          <MDBCol lg="11">
            <MDBCardTitle>{post.company}</MDBCardTitle>
          </MDBCol>
        </MDBRow>
        <MDBCardBody>
          <h2>{post.title}</h2>
          {post.description.length <= maxLength
            ? post.description
            : post.description.substring(0, maxLength)}
          <Nav.Link
            onClick={() => {
              if (isCollapse) {
                setMaxLength(250);
              } else {
                setMaxLength(post.description.length);
              }
              setIsCollapse(!isCollapse);
            }}
            className="text-muted"
          >
            Show {isCollapse ? "Less" : "More"}
          </Nav.Link>
        </MDBCardBody>
        <MDBCardFooter>
          <Button>Apply</Button>
        </MDBCardFooter>
      </MDBCard>
    );
  });
  return <>{Post}</>;
};

export default PostBox;
