import { Form, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { RegisterContext } from "../Context/Context";
import { Label } from "../../styled/Label.Styled";
const Role = () => {
  const { registerInfo, setRegisterInfo } = useContext(RegisterContext);
  // const [toggle, setToggle] = useState(false);
  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id="button-tooltip-2">
            <p>Role Determine How You Wanna Use Our App</p>
            <p> *Company's:Post Job Offers</p>
            <p> *User's:Can Apply On Job Offers </p>
          </Tooltip>
        }
      >
        {({ ref, ...triggerHandler }) => (
          <p
            variant="light"
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
            <Image
              ref={ref}
              roundedCircle
              src="https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941_960_720.png"
              width={"15px"}
            />
          </p>
        )}
      </OverlayTrigger>
      <Label>Role</Label>
      <div>
        <Form.Check
          inline
          value="COMPANY"
          label="Company"
          name="group1"
          onChange={(e) => {
            setRegisterInfo({ ...registerInfo, role: e.target.value });
            // setToggle((prev) => !prev);
          }}
          type="radio"
          id={`inline-$'radio'-1`}
        />
        <Form.Check
          inline
          value="USER"
          label="User"
          name="group1"
          onChange={(e) => {
            setRegisterInfo({ ...registerInfo, role: e.target.value });
            // setToggle((prev) => !prev);
          }}
          type="radio"
          id={`inline-$'radio'-2`}
        />
      </div>
    </>
  );
};

export default Role;
