import React from "react";
import { Link } from "../styled/Links";
import { Row } from "../styled/Row.Styled";
import { Footer as FooterComponent } from "../styled/Footer.Styled";

const Footer = () => {
  return (
    <FooterComponent>
      <Row>© 2023 Copyright:</Row>
      <Link href="http://localhost:3000/">JOB SEEKER</Link>
    </FooterComponent>
  );
};

export default Footer;
