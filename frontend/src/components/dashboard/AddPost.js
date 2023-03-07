import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCardText,
  MDBTextArea,
} from "mdb-react-ui-kit";
import React from "react";
import { Button } from "react-bootstrap";

const AddPost = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt=""
          />
          <input placeholder="Yoy Have A Job Opining" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="shareOptionText">Photo</span>
            </div>
          </div>
          <div className="share-btn">
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

/* 
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

*/
