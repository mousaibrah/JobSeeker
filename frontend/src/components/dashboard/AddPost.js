import React, { useState, useContext } from "react";
import { Button } from "../styled/Button.Styled";
import { Input } from "../styled/Input.Styled";
import { AppContext } from "../State/AppState";
import { Form } from "react-bootstrap";
import { DashBoardContext } from "./DashBoard";

const AddPost = () => {
  const [desc, setDesc] = useState("");
  // const [responsibility, setResponsibility] = useState('')
  const { posts, setPosts } = useContext(AppContext);
  const { personalInfo } = useContext(DashBoardContext);

  const sharePost = async () => {};
  return (
    <div className="share" style={{ backgroundColor: "#2d2e37" }}>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={personalInfo.userImg} alt="" />
          <Input
            mx={"300px"}
            placeholder="You Have A Job Opining ..."
            className="shareInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="shareOptionText">Photo</span>
            </div>
          </div>
          <div className="share-btn">
            <Button onClick={sharePost}>Share</Button>
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
