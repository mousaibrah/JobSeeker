import React, { useState, useContext } from "react";
import { Button } from "../styled/Button.Styled";
import { Input } from "../styled/Input.Styled";
import { AppContext } from "../State/AppState";

const AddPost = () => {
  const [desc, setDesc] = useState("");
  const { posts, setPosts, profileData } = useContext(AppContext);

  const sharePost = async () => {};
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt=""
          />
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
