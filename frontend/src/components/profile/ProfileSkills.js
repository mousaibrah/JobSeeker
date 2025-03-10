import { v4 } from "uuid";
import React from "react";

const ProfileSkills = ({ data }) => {
  const skills = data.map((skill) => {
    return (
      <div key={v4()}>
        <p key={v4()}>{skill}</p>
        <hr />
      </div>
    );
  });
  return <>{skills}</>;
};

export default ProfileSkills;
