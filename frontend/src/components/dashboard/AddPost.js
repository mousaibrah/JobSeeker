import { MDBInput, MDBCol, MDBRow, MDBCardText, MDBTextArea } from "mdb-react-ui-kit";
import React from "react";
import { Button } from "react-bootstrap";

const AddPost = () => {
  return (
    <div className="Add-post" style={{border:'2px solid black',position:'relative'}}>
       <MDBRow>
        <MDBCardText>Some Label :</MDBCardText>
      </MDBRow>
      <MDBRow>
        <MDBCol lg="1"></MDBCol>
        <MDBCol lg="6">
          <MDBInput />
        </MDBCol>
        <MDBCol lg="5"></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCardText>Some Label :</MDBCardText>
      </MDBRow>
      <MDBRow>
        <MDBCol lg="1"></MDBCol>
        <MDBCol lg="6">
          <MDBInput />
        </MDBCol>
        <MDBCol lg="5"></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCardText>Some Label :</MDBCardText>
      </MDBRow>
      <MDBRow>
        <MDBCol lg="1"></MDBCol>
        <MDBCol lg="6">
          <MDBTextArea/>
        </MDBCol>
        <MDBCol lg="5"></MDBCol>
      </MDBRow>
      <Button style={{position:'absolute',bottom:'10px' , right:'10px'}}>Add Post</Button>
    </div>
  );
};

export default AddPost;
