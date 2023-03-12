import React, { useState, useContext } from "react";
import { Button } from "../styled/Button.Styled";
import { AppContext } from "../State/AppState";
import { Form, InputGroup } from "react-bootstrap";
import { DashBoardContext } from "./DashBoard";
import { Modal } from "react-bootstrap";

const AddPost = () => {
  const [desc, setDesc] = useState("");
  const [responsibility, setResponsibility] = useState([]);
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const { posts, setPosts } = useContext(AppContext);
  const { personalInfo } = useContext(DashBoardContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sharePost = async () => {};
  return (
    <>
      <div className="Create-post">
        <img className="shareProfileImg" src={personalInfo.userImg} alt="" />
        <div className="AddPost">
          <Button onClick={handleShow}>Create New Post</Button>
        </div>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {responsibility?.map((e) => (
            <li className="text-dark">{e}</li>
          ))}
          <Form>
            <Form.Group className="mb-3" controlId="Desc.Control">
              <Form.Label className="text-dark">Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
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
                onClick={(e) =>{
                  e.preventDefault()
                  setResponsibility([...responsibility, responsibilityInput])
                }}
              >
                Add
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPost;
