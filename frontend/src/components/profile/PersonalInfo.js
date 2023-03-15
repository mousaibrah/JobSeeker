import React from "react";
export const PersonalBox = ({ info }) => {
  return (
    <div className="box">
      <p className="box-text">{info.text}</p>
      <p className="text-muted">{info.value}</p>
    </div>
  );
};
const PersonalInfo = ({ info }) => {
  const { text, item } = info;
  return (
    <div className="box">
      <div>
        <p className="box-text">{text}</p>
      </div>
      <div>
        <p className="text-muted">{item}</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
