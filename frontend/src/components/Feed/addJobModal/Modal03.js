import React, { useContext } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Button } from "../../styled/Button.Styled";
import { AddJobContext } from "../AddPost";
import { v4 } from "uuid";
const Modal03 = () => {
  const {
    modal03,
    setModal03,
    setModal02,
    setSubmitModal,
    sharePost,
    newPost,
  } = useContext(AddJobContext);
  const date = new Date();
  const dd = date.getDate();
  const mm = date.getUTCMonth() + 1;
  const yy = date.getFullYear();
console.log('newPost :>> ', newPost);
  return (
    <>
      <Modal
        show={modal03}
        onHide={() => setModal03(false)}
        size="xl"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">
            Your Post Will Look Like This
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="post" key={v4()}>
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <img
                    className="postProfileImg"
                    src={newPost?.userPicturePath}
                  />
                  <span className="postUsername">{newPost?.company}</span>

                  <span className="postDate">{`${yy}/ ${mm} /${dd}  `}</span>
                </div>
                <div className="postTopCenter">
                  <span className="postDate">{newPost?.location}</span>
                </div>
                <div className="postTopRight"></div>
              </div>
              <div className="postCenter">
                <h3 className="text-primary" style={{ textAlign: "center" }}>
                  {newPost.title}
                </h3>
                
                <div
                  className="postText" 
                  
                  dangerouslySetInnerHTML={{ __html: newPost?.description }}
                ></div>
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <Button onClick={() => console.log("test")}>APPLY</Button>
                </div>
                <div className="postBottomRight">
                  <span className="postLikeCounter">
                    {" "}
                    People Applied ...{newPost?.applied}
                  </span>
                </div>
              </div>
            </div>
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
              sharePost();
              setSubmitModal(true);
              setModal03(false);
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
