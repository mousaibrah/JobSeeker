import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Accordion, Form } from "react-bootstrap";
import ErrorModal from "../Error/ErrorModal";
import { AppContext } from "../State/AppState";

const FilterAndSearch = () => {
  const { posts, setPosts } = useContext(AppContext);
  const [text, setText] = useState("");
  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", preventRefresh, true);
  }, []);
  const preventRefresh = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const filterResult = async (type) => {
    try {
      const filteredData = await axios.get(
        `http://localhost:5000/posts/filter/?type=${type}`
      );
      setPosts(filteredData.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const getAllPosts = async () => {
    try {
      const allPosts = await axios.get("http://localhost:5000/posts");
      setPosts(allPosts.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const sortDate = async (e) => {
    try {
      const sort = await axios.get(
        `http://localhost:5000/posts/sort?date=${e.target.value}`
      );
      setPosts(sort.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const searchFilter = async () => {
    try {
      const filteredData = await axios.post(
        "http://localhost:5000/posts/search",
        { text }
      );
      setPosts(filteredData.data);
    } catch (error) {
      setErr(true);
      setShow(true);
      setErrorMessage(error.response.data.message);
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
                  filterResult(e.target.value);
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
                  filterResult(e.target.value);
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
                  filterResult(e.target.value);
                }}
                type="radio"
                id={`Front-End-Dev`}
              />
              <Form.Check
                inline
                value="All"
                label="All"
                name="group1"
                onChange={getAllPosts}
                type="radio"
                id={`All`}
              />
              <Form.Select
                aria-label="Default select example"
                className="filter-date"
                onChange={sortDate}
              >
                <option>Date</option>
                <option value="1">Oldest</option>
                <option value="-1">Newest</option>
              </Form.Select>

              <Form.Control
                type="search"
                placeholder="Search"
                className="filter-search"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <h2 onClick={searchFilter}>➡️</h2>
            </div>
          </Form>
          {err && <ErrorModal data={{ show, setShow, errorMessage }} />}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FilterAndSearch;
