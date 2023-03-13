import React, { useContext } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Button } from "../../styled/Button.Styled";
import { AddJobContext } from "../AddPost";
import { v4 } from "uuid";
const Modal03 = () => {
  const { modal03, setModal03, setModal02, setSubmitModal } =
    useContext(AddJobContext);
  return (
    <>
      <Modal show={modal03} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">
            Your Post Will Look Like This
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="postCenter">
            <h2 className="text-dark">{'title'}</h2>
            <span className="postText text-dark">{'description'}</span>
            {/* {responsibility?.map((elem) => (
              <li className="text-dark" key={v4()}>
                {elem}
              </li>
            ))} */}
            <img className="postImg" src={'picturePath'} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
                setModal02(true);
                setModal03(false);
            }}
          >
            Back
          </Button>
          <Button
            variant="primary"
            onClick={() => {
            //   sharePost();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal03;
