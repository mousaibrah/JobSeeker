import React, { useContext, useState } from "react";
import { Col, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { Button } from "../../styled/Button.Styled";
import { AddJobContext } from "../AddPost";
import Modal02 from "./Modal02";

const Modal01 = () => {
  const { setModal02, modal01, setModal01, newPost, setNewPost } =
    useContext(AddJobContext);
  const { jobTitle, company, type, location } = newPost;
  return (
    <>
      <Modal
        show={modal01}
        onHide={() => setModal01(false)}
        dialogClassName="modal-90w"
        className="text-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">
            Create Job opportunity01
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>jobTitle</Form.Label>
            <Form.Control
              type="text"
              value={jobTitle}
              onChange={(e) =>
                setNewPost({ ...newPost, jobTitle: e.target.value })
              }
            />
            <Form.Label>company</Form.Label>
            <Form.Control
              type="text"
              value={company}
              onChange={(e) =>
                setNewPost({ ...newPost, company: e.target.value })
              }
            />
            <Form.Label>type</Form.Label>
            <Form.Control
              type="text"
              value={type}
              onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
            />
            <Form.Label>location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) =>
                setNewPost({ ...newPost, location: e.target.value })
              }
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setModal01(false);
              setModal02(true);
            }}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal02 />
    </>
  );
};

export default Modal01;
