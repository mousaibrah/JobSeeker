import { MDBInput } from "mdb-react-ui-kit";
import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { profileContext } from "./ProfilePage";
import ProfileSkills from "./ProfileSkills";
const SkillsModal = () => {
  const { skillModal, setSkillModal, profileData, setProfileData, addSkills } =
    useContext(profileContext);
  const { skills } = profileData;
  const [skill, setSkill] = useState("");

  return (
    <Modal centered show={skillModal} onHide={() => setSkillModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {skills.length ? <ProfileSkills data={skills} /> : ""}
        <MDBInput
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
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
