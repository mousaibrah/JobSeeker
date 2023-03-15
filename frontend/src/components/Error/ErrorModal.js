import React from "react";
import { Modal } from "react-bootstrap";
import { v4 } from "uuid";
const ErrorModal = ({ data }) => {
  const { show, setShow, errorMessage } = data;
  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id={v4()} className="text-dark">
          Error
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">{errorMessage}</Modal.Body>
    </Modal>
  );
};

export default ErrorModal;
