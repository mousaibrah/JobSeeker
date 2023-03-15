import React, { useContext } from "react";
import { Button } from "../styled/Button.Styled";
import { v4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../State/AppState";

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
    return <h2>Sorry There Is No Data Come Back Later</h2>;
  }

  const Post = dashBoardPosts.map((post) => {
    return (
      <div className="post" key={v4()}>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={post?.userPicturePath} />
              <span
                className="postUsername"
                onClick={() => navigate(`/profile/${post.userId}`)}
              >
                {post?.company}
              </span>

              <span className="postDate">{post?.createdAt?.slice(0, 10)}</span>
            </div>
            <div className="postTopCenter">
              <span className="postDate">{post?.location}</span>
            </div>
          </div>
          <div className="postCenter">
            <h5>{post.jobTitle}</h5>
          </div>

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
