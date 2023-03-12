import React from "react";
import { Input } from "../styled/Input.Styled";

import { Modal } from "react-bootstrap";
import axios from "axios";

const UploadImg = ({ toggle }) => {
  const { profilePicModal, setProfilePicModal } = toggle;

  const userId = localStorage.getItem("userId");
  const updateProfileImg = async (url) => {
    try {
      const data = await axios.put(
        `http://localhost:5000/profile/${JSON.parse(userId)}/img`,
        { userImg: url }
      );
      console.log("data :>> ", data);
      setProfilePicModal(false);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const processFile = async (e) => {
    var YOUR_CLOUD_NAME = "dvgnuchjw";
    var YOUR_UNSIGNED_UPLOAD_PRESET = "ym3yv62c";
    var FETCH_URL =
      "https://api.cloudinary.com/v1_1/" + YOUR_CLOUD_NAME + "/auto/upload";

    const files = document.querySelector("[type=file]").files;

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      var DATA = new FormData();

      DATA.append("file", file);
      DATA.append("cloud_name", YOUR_CLOUD_NAME);
      DATA.append("upload_preset", YOUR_UNSIGNED_UPLOAD_PRESET);

      let res = await fetch(FETCH_URL, {
        method: "post",
        mode: "cors",
        body: DATA,
      });

      let json = await res.json();
      //   setUrl(JSON.stringify(json.url));
      console.log("url :>> ", JSON.stringify(json.url));
      updateProfileImg(json.url);
    }
  };
  return (
    <Modal
      centered
      show={profilePicModal}
      onHide={() => setProfilePicModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">Update Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input type="file" onChange={processFile} />
      </Modal.Body>
    </Modal>
  );
};

export default UploadImg;
