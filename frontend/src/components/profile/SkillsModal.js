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
  const deleteSkill = (skillName) => {
    setProfileData({
      ...profileData,
      skills: skills.filter((skill) => skill !== skillName),
    });
  };
  return (
    <Modal centered show={skillModal} onHide={() => setSkillModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">Skills</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="skills-in-skill-modal">
          {skills?.length
            ? skills.map((skill) => {
                return (
                  <div key={v4()} className="skill-in-skill-modal">
                    <li className="text-dark">{skill}</li>
                    <p
                      className=" delete-btn-skill-modal"
                      onClick={() => deleteSkill(skill)}
                    >
                      x
                    </p>
                  </div>
                );
              })
            : ""}
        </div>

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
