import React, { useState, useContext } from "react";
import { Button } from "../styled/Button.Styled";
import { AppContext } from "../State/AppState";
import { Form, InputGroup } from "react-bootstrap";
import { DashBoardContext } from "./DashBoard";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { v4 } from "uuid";
const AddPost = () => {
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const { setPosts, posts } = useContext(AppContext);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    picturePath: "",
    responsibility: [],
  });
  const { title, description, picturePath, responsibility } = newPost;
  const userId = JSON.parse(localStorage.getItem("userId"));
  const { personalInfo } = useContext(DashBoardContext);
  const [show, setShow] = useState(false);
  const [showModal02, setShowModal02] = useState(false);

  const handleShow = () => setShow(true);
  const processFile = async (e) => {
    const CLOUD_NAME = "dvgnuchjw";
    const UNSIGNED_UPLOAD_PRESET = "ym3yv62c";
    const FETCH_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;

    const files = document.querySelector("[type=file]").files;

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const DATA = new FormData();

      DATA.append("file", file);
      DATA.append("cloud_name", CLOUD_NAME);
      DATA.append("upload_preset", UNSIGNED_UPLOAD_PRESET);

      let res = await fetch(FETCH_URL, {
        method: "post",
        mode: "cors",
        body: DATA,
      });

      let json = await res.json();
      setNewPost({ ...newPost, picturePath: json.url });
      console.log("url :>> ", JSON.stringify(json.url));
    }
  };
  const sharePost = async () => {
    try {
      const request = await axios.post(
        `http://localhost:5000/posts/${userId}`,
        newPost
      );
      setPosts([...posts, request.data]);
      console.log("request :>> ", request);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <>
      <div className="Create-post">
        <img className="shareProfileImg" src={personalInfo.userImg} alt="" />
        <div className="AddPost">
          <Button onClick={handleShow}>Create New Post</Button>
        </div>
      </div>
      {/* Modals */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Title.Control">
              <Form.Label className="text-dark">Title</Form.Label>
              <Form.Control
                tyoe="text"
                value={title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Desc.Control">
              <Form.Label className="text-dark">Description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) =>
                  setNewPost({ ...newPost, description: e.target.value })
                }
                rows={3}
              />
            </Form.Group>
            <Form.Label className="text-dark">responsibility</Form.Label>

            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                aria-label="responsibility"
                aria-describedby="basic-addon2"
                value={responsibilityInput}
                onChange={(e) => setResponsibilityInput(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={(e) => {
                  e.preventDefault();
                  setNewPost({
                    ...newPost,
                    responsibility: [...responsibility, responsibilityInput],
                  });
                  setResponsibilityInput("");
                }}
              >
                Add
              </Button>
            </InputGroup>
            <Form.Group className="mb-3" controlId="image.Control">
              <Form.Label className="text-dark">image</Form.Label>
              <Form.Control type="file" onChange={processFile} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              setShowModal02(true);
            }}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Edit Modal */}
      <Modal show={showModal02} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">
            Your Post Will Look Like This
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="postCenter">
            <h2 className="text-dark">{title}</h2>
            <span className="postText text-dark">{description}</span>
            {responsibility?.map((elem) => (
              <li className="text-dark" key={v4()}>
                {elem}
              </li>
            ))}
            <img className="postImg" src={picturePath} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(true);
              setShowModal02(false);
            }}
          >
            Back
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              setShowModal02(false);
              sharePost();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPost;
