import React, { useContext } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { Button } from '../../styled/Button.Styled';
import { AddJobContext } from '../AddPost';
import Modal03 from './Modal03';

const Modal02 = () => {
    const { setModal03, modal02, setModal02, setModal01 } =
    useContext(AddJobContext);
  return (
    <>
      <Modal
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
          <Row>
            <Col>
              <Form>
                <Row>
                  <Form.Group type="text" />
                </Row>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
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
      <Modal03  />
    </>
  )
}

export default Modal02