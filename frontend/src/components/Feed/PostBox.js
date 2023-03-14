import React, { useContext } from "react";
import { Button } from "../styled/Button.Styled";
import { v4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../State/AppState";
import { Link } from "../styled/Links";

const PostBox = ({ postsData }) => {
  const { posts, setPosts } = useContext(AppContext);
  const navigate = useNavigate();
  const { posts: dashBoardPosts } = postsData;
  const userId = JSON.parse(localStorage.getItem("userId"));
  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.log("error postBox 13 :>> ", error);
    }
  };
  if (!dashBoardPosts) {
    return;
  }

  const Post = dashBoardPosts.map((post) => {
    console.log("post :>> ", post);
    console.log("post :>> ", post);
    return (
      <div className="post" key={v4()}>
        <img className="shareProfileImg" src={post.userPicturePath} alt="" />
        <Link onClick={() => navigate(`/profile/${post.userId}`)}>
          {post.company}
        </Link>
        <div className="post-container">
          <p>{post.location}</p>
          <h5>{post.title}</h5>

          <Button onClick={() => navigate(`/feed/${post._id}`)}>
            More Details
          </Button>
        </div>
      </div>
    );
  });
  return <>{Post}</>;
};

export default PostBox;
