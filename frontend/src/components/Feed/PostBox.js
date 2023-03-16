import React, { useContext } from "react";
import { Button } from "../styled/Button.Styled";
import { v4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../State/AppState";
import { Box } from "../styled/Box.Styled";

const PostBox = ({ postsData }) => {
  const { posts, setPosts } = useContext(AppContext);
  const navigate = useNavigate();

  const { posts: dashBoardPosts } = postsData;
  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.log("error postBox 13 :>> ", error);
    }
  };
  if (!dashBoardPosts) {
    return <h2>Sorry There Must Be Something Wrong Please Come Back Later</h2>;
  }
  let Post = [];
  for (let index = 0; index < dashBoardPosts?.length; index++) {
    const element = dashBoardPosts[index];
    Post.push(
      <Box key={v4()}>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                alt="user-img"
                src={element?.userPicturePath}
              />
              <span
                className="postUsername"
                onClick={() => navigate(`/profile/${element?.userId}`)}
              >
                {element?.company}
              </span>
              <span className="postDate">
                {element?.createdAt?.slice(0, 10)}
              </span>
            </div>
            <div className="postTopCenter">
              <span className="postDate">{element?.location}</span>
            </div>
            {/* <div className="postTopRight" >
              Delete Post
            </div> */}
          </div>
          <div className="postCenter">
            <h5>{element?.jobTitle}</h5>
          </div>
          <Button onClick={() => navigate(`/feed/${element._id}`)}>
            More Details
          </Button>
        </div>
      </Box>
    );
  }
  return <>{Post}</>;
};

export default PostBox;
