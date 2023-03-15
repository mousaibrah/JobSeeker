import { MDBCardText, MDBInput, MDBListGroupItem } from "mdb-react-ui-kit";
import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { profileContext } from "./ProfilePage";
import ProfileSkills from "./ProfileSkills";
import { v4 } from "uuid";
const SkillsModal = () => {
  const { skillModal, setSkillModal, profileData, setProfileData, addSkills } =
    useContext(profileContext);
  const { skills } = profileData;
  const [skill, setSkill] = useState("");

  return (
    <Modal centered show={skillModal} onHide={() => setSkillModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {skills?.length
          ? skills.map((skill) => {
              return <li className="text-dark">{skill}</li>;
            })
          : ""}
        <MDBInput
          style={{ marginTop: "15px" }}
          placeholder=" Add More Skill"
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        />
      </Modal.Body>
      <div className="skill-modal-footer">
        <div>
          <ul>
            <li className="text-dark">Input Your Skill Then Press Add</li>
            <li className="text-dark">When You Done Adding Press Save</li>
          </ul>
        </div>
        <div className="skill-modal-btns">
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
        </div>
      </div>
    </Modal>
  );
};

export default SkillsModal;
