import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Button } from "../../styled/Button.Styled";
import { AddJobContext } from "../AddPost";
import Modal03 from "./Modal03";
import ReactQuill from "react-quill";
const Modal02 = () => {
  const { setModal03, modal02, setModal02, setModal01, newPost, setNewPost } =
    useContext(AddJobContext);
  const [convertedText, setConvertedText] = useState("");


  useEffect(() => {
    setNewPost({ ...newPost, description: convertedText });
  }, [convertedText]);
  return (
    <>
      <Modal
        size="lg"
        show={modal02}
        onHide={() => setModal02(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">
            Create Job opportunity02
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <ReactQuill
            value={convertedText}
            onChange={setConvertedText}
            className="text-dark"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setModal02(false);
              setModal01(true);
            }}
          >
            Back
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setModal02(false);
              setModal03(true);
            }}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal03 />
    </>
  );
};

export default Modal02;
