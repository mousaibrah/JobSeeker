import React, { useState } from "react";
import { Accordion, Form } from "react-bootstrap";

const FilterAndSearch = () => {
  return (
    <Accordion className="Filter" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {" "}
          Filter{" "}
          <svg
            fill="#000000"
            version="1.1"
            id="Capa_1"
            width="18px"
            height="18px"
            viewBox="0 0 971.986 971.986"
          >
            <g>
              <path d="M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3   c16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.8-40.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873   c-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z" />
            </g>
          </svg>
        </Accordion.Header>
        <Accordion.Body>
          <Form>
            <Form.Check
              inline
              value="Full-Stack"
              label="Full-Stack"
              name="group1"
              type="radio"
              id={`Full-Stack`}
            />
            <Form.Check
              inline
              value="Back-End"
              label="Back-End"
              name="group1"
              type="radio"
              id={`Back-End`}
            />
            <Form.Check
              inline
              value="Front-End"
              label="Front-End"
              name="group1"
              type="radio"
              id={`Front-End`}
            />
            <Form.Control type="search" placeholder="Search" size="sm" />
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FilterAndSearch;
