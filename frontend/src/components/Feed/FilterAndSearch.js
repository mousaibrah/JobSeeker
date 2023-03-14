import axios from "axios";
import React, { useContext, useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import { AppContext } from "../State/AppState";

const FilterAndSearch = () => {
  const [filterType, setFilterType] = useState("");
  const { posts, setPosts } = useContext(AppContext);
  const filterResult = async () => {
    try {
      const filteredData = await axios.get(
        `http://localhost:5000/posts/filter/?type=${filterType}`
      );
      console.log("filteredData :>> ", filteredData);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <Accordion className="Filter">
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
            <div className="filter-inputs">
              <Form.Check
                inline
                value="Full-Stack-Dev"
                label="Full-Stack-Dev"
                onChange={(e) => {
                  setFilterType(e.target.value);
                  filterResult();
                }}
                name="group1"
                type="radio"
                id={`Full-Stack-Dev`}
              />
              <Form.Check
                inline
                value="Back-End-Dev"
                label="Back-End-Dev"
                name="group1"
                onChange={(e) => {
                  setFilterType(e.target.value);
                  filterResult();
                }}
                type="radio"
                id={`Back-End-Dev`}
              />
              <Form.Check
                inline
                value="Front-End-Dev"
                label="Front-End-Dev"
                name="group1"
                onChange={(e) => {
                  setFilterType(e.target.value);
                  filterResult();
                }}
                type="radio"
                id={`Front-End-Dev`}
              />
              <Form.Select
                aria-label="Default select example"
                className="filter-date"
              >
                <option>Date</option>
                <option value="Oldest">Oldest</option>
                <option value="newest">Newest</option>
              </Form.Select>

              <Form.Control
                type="search"
                placeholder="Search"
                className="filter-search"
              />
            </div>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FilterAndSearch;
