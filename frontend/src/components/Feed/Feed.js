import axios from "axios";
import "./Style.css";
import React, { useEffect, useContext } from "react";
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
const Feed = () => {
  const { posts, setPosts } = useContext(AppContext);
  const role = JSON.parse(localStorage.getItem("role"));
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const data = await axios.get("http://localhost:5000/posts");
      setPosts(data.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <>
      <FeedNav />
      <Container className="DashBoard">
        <Col className="Col">
          <LeftNav />
        </Col>
        <Col className="Col posts-aria">
          <FilterAndSearch />
          {(role === "COMPANY" || role === "ADMIN") && <AddPost />}
          <PostBox postsData={{ posts }} key={v4()} />
        </Col>
        <Col className="Col">
          <OurClient />
        </Col>
      </Container>
    </>
  );
};

export default Feed;
