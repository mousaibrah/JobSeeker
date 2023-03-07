import React from "react";
import { MDBCardImage, MDBCardText } from "mdb-react-ui-kit";

const LeftNav = () => {
  return (
    <div className="Left-Nav">
      <div className="first-row">
        <div className="first-col">
          <div className="user-img">
            <img
              className="user-img-sidebar"
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            />
          </div>

          <div className="first-box">
            <MDBCardText variant="dark">UserName</MDBCardText>
          </div>
        </div>
      </div>

      <hr />

      <div className="second-row-box">
        <div className="box">Location:</div>
        <div className="box">Experience:</div>
      </div>
      <hr />

      <div className="third-row-box">
        <div className="box">Years Of Experience</div>
      </div>
      <hr />

      <div className="fourth-row">
        <h3>Social Accounts</h3>
        <hr />
        <p>facebook</p>
        <p>github</p>
        <p></p>
      </div>
    </div>
  );
};

export default LeftNav;
