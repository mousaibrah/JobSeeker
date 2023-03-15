import { v4 } from "uuid";
import React from "react";

const ProfileSkills = ({ data }) => {
  const skills = data.map((skill) => {
    return (
      <>
        <p key={v4()}>{skill}</p>
        <hr />
      </>
    );
  });
  return <>{skills}</>;
};

export default ProfileSkills;
