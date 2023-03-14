import React, { useState } from "react";
import { Button } from "../../styled/Button.Styled";
import { Container, Form, Modal, Spinner } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import { Label } from "../../styled/Label.Styled";
import axios from "axios";
import Swal from "sweetalert2";
const ApplyModal = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [Url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { applyToggle, setApplyToggle, companyId } = toggle;

  const processFile = async (e) => {
    setLoading(true);
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
      setUrl(json.url);
      setLoading(false);
      console.log("url :>> ", JSON.stringify(json.url));
    }
  };

  const sendEmail = async () => {
    try {
      const emailSent = await axios.post("http://localhost:5000/email", {
        companyId,
        Url,
        email,
      });
      if (emailSent.data) {
        setApplyToggle(false);
        Swal.fire("Email Sent!", "success");
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <>
      <Modal show={applyToggle} onHide={() => setApplyToggle(false)}>
        <Modal.Header closeButton className="text-dark">
          <Modal.Title>Send Your Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="text-dark">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                  console.log("e.target.value :>> ", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>your Resume</Form.Label>
              <Form.Control type="file" onChange={processFile} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            disabled={loading}
            onClick={() => setApplyToggle(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" disabled={loading} onClick={sendEmail}>
            Save Changes
            {loading && <Spinner animation="border" variant="primary" />}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ApplyModal;
