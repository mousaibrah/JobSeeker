import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
const PostBox = () => {
  const [description, setDescription] = useState(
    "s nostrum? Lorem ipsum dolor sit amet, consectetur adipisicingelit. Assumenda nisi culpa sunt voluptate aperiam facilis, aspernatur exlibero earum ab quos rerum, officia corrupti quisquam iusto mollitia et vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error numquam! Deleniti quidem autem odit, facere sit repellendus amet sequiexcepturi? Quod, praesentium? lorem orrupti quisquam iusto mollitia et vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error numquam! Deleniti quidem autem odit, facere sit repellendus amet sequiexcepturi? Quod, praesentium? loremorrupti quisquam iusto mollitia et vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error numquam! Deleniti quidem autem odit, facere sit repellendus amet sequiexcepturi? Quod, praesentium? loremorrupti quisquam iusto mollitia et vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error numquam! Deleniti quidem autem odit, facere sit repellendus amet sequiexcepturi? Quod, praesentium? loremorrupti quisquam iusto mollitia et vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error numquam! Deleniti quidem autem odit, facere sit repellendus amet sequiexcepturi? Quod, praesentium? loremorrupti quisquam iusto mollitia et vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error numquam! Deleniti quidem autem odit, facere sit repellendus amet sequiexcepturi? Quod, praesentium? loremorrupti quisquam iusto mollitia et vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error numquam! Deleniti quidem autem odit, facere sit repellendus amet sequiexcepturi? Quod, praesentium? loremorrupti quisquam iusto mollitia et vero vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit.Doloremque suscipit neque distinctio ullam? Omnis veniam ipsa error numquam! Deleniti quidem autem odit, facere sit repellendus amet sequiexcepturi? Quod, praesentium? lorem"
  );
  const [maxLength, setMaxLength] = useState(250);
  const [isCollaps, setIsCollaps] = useState(false);
  return (
    <MDBCard>
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
          <MDBCardTitle>Post</MDBCardTitle>
        </MDBCol>
      </MDBRow>
      <MDBCardBody>
        {description.length <= maxLength
          ? description
          : description.substring(0, maxLength)}
        <Nav.Link
          onClick={() => {
            if (isCollaps) {
              setMaxLength(250);
            } else {
              setMaxLength(description.length);
            }
            setIsCollaps(!isCollaps);
          }}
          className="text-muted"
        >
          Show {isCollaps ? "Less" : "More"}
        </Nav.Link>
      </MDBCardBody>
      <MDBCardFooter>
        <Button>Apply</Button>
      </MDBCardFooter>
    </MDBCard>
  );
};

export default PostBox;
