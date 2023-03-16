import axios from "axios";
import "./Style.css";
import React, { useEffect, useContext, useState } from "react";
import { v4 } from "uuid";
import AddPost from "./AddPost";
import LeftNav from "./LeftNav";
import OurClient from "./OurClient";
import PostBox from "./PostBox";
import { AppContext } from "../State/AppState";
import { Container } from "../styled/Container.Styled";
import FeedNav from "./FeedNav";
import FilterAndSearch from "./FilterAndSearch";
import { Col } from "../styled/Column.Styled";
import { Pagination } from "react-bootstrap";
const Feed = () => {
  const { posts, setPosts } = useContext(AppContext);
  const [pageActive, setPageActive] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [numOfPosts, setNumOfPosts] = useState(5);
  const role = JSON.parse(localStorage.getItem("role"));

  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const data = await axios.get(
        `http://localhost:5000/posts/page/${numOfPosts}`
      );
      setPosts(data.data.data);
      setPageNum(data.data.length / 5);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const nextPage = (num) => {
    setPageActive(num);
    setNumOfPosts(num * 5);
    getPosts();
  };

  let items = [];
  for (let number = 1; number <= pageNum; number++) {
    items.push(
      <Pagination.Item
        key={v4()}
        className="Pagination-btn"
        onClick={(e) => {
          e.preventDefault();
          nextPage(number);
        }}
        active={number === pageActive}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <FeedNav />
      <Container className="Feed" id="Feed">
        <Col className="Feed-Col" id="left-col">
          <LeftNav />
        </Col>
        <Col className="Feed-Col posts-aria">
          <FilterAndSearch />
          {(role === "COMPANY" || role === "ADMIN") && <AddPost />}
          <PostBox postsData={{ posts }} key={v4()} />
          <Pagination>{items}</Pagination>
        </Col>
        <Col className="Feed-Col Our-Client">
          <OurClient />
        </Col>
      </Container>
    </>
  );
};

export default Feed;
