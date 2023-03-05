import React, { useState, useContext } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { userContext } from "../../App";
import {MDBCard,MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBInput, MDBRow} from 'mdb-react-ui-kit'
import ModalRow from "./ModalRow";
const UpdateProfile = ({modalFunctions}) => {
  const { userId } = useContext(userContext);
 const {modalShow, setModalShow} = modalFunctions
  return (
    <>

      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Edit
          </Modal.Title>
        </Modal.Header>
        <MDBCard>
        <Modal.Body>
        <MDBCardImage
                  src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
                  className="rounded-circle"
                  style={{ width: "100px" }}
                  fluid
                />
                <hr/>
         <ModalRow text={'Aria Of EXPERTISE :'}/>
<hr/>
         <ModalRow text={'EDUCATION :'}/>
<hr/>
         <ModalRow text={'Full Name'}/>
<hr/>
         <ModalRow text={'Email'}/>
<hr/>
         <ModalRow text={'Mobile'}/>
<hr/>
         <ModalRow text={'About'}/>
        
        </Modal.Body>
        </MDBCard>
        <Modal.Footer>
          <Button
            onClick={() => {
              setModalShow(false)

            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateProfile;
