import { MDBCardText, MDBInput, MDBListGroupItem } from "mdb-react-ui-kit";
import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { profileContext } from "./ProfilePage";
import ProfileSkills from "./ProfileSkills";
import {v4} from 'uuid';
const SkillsModal = () => {
  const { skillModal, setSkillModal, profileData, setProfileData, addSkills } =
    useContext(profileContext);
  const { skills } = profileData;
  const [skill, setSkill] = useState("");

  return (
    <Modal centered show={skillModal} onHide={() => setSkillModal(false)} >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        {skills.length ? skills.map((skill) => {
    return (
      <MDBListGroupItem
      style={{color:'#000' ,border:'1px solid black',marginTop:'3px'}}
        key={v4()}
        className="d-flex justify-content-between align-items-center p-3"
      >
        <MDBCardText style={{fontWeight:400}}>{skill}</MDBCardText>
      </MDBListGroupItem>
    );
  }) : ""}
        <MDBInput
        style={{border:'2px solid black',marginTop:'9px'}}
        placeholder=" Add More Skill"
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
            const profileClone = { ...profileData };
            profileClone.skills.push(skill);
            setProfileData({ profileData, skills: profileClone.skills });
            setSkill("");
          }}
        >
          Add
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            addSkills();

            setSkillModal(false);
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SkillsModal;
