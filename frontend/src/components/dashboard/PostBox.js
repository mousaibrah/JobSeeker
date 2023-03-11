import React, { useContext, useState } from "react";
import { Button } from "../styled/Button.Styled";
import { v4 } from "uuid";
import axios from "axios";
import { AppContext } from "../State/AppState";
const PostBox = ({ postsData }) => {
  const { posts, setPosts } = useContext(AppContext);
const userId =JSON.parse(localStorage.getItem('userId'))
  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.log("error postBox 13 :>> ", error);
    }
  };
  if (!postsData) {
    return;
  }
  const Post = postsData.map((post) => {
    return (
      <div className="post" key={v4()}>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={post.userPicturePath} />
              <span className="postUsername">{post.company}</span>

              <span className="postDate">{post.createdAt.slice(0, 10)}</span>
            </div>
            <div className="postTopCenter">
              <span className="postDate">{post.location}</span>
            </div>
            <div className="postTopRight">
              {post.userId === userId && (
                <span
                  className="deleteBtn"
                  id={`${post._id}`}
                  onClick={(e) => deletePost(e.target.id)}
                  title="DELETE POST"
                >
                  ❌
                </span>
              )}
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post.description}</span>
            {post.responsibility
              ? post.responsibility.map((elem) => <li key={v4()}>{elem}</li>)
              : ""}
            <img className="postImg" src={post?.picturePath} />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <Button>APPLY</Button>
            </div>
            <div className="postBottomRight">
              <span className="postLikeCounter">
                {" "}
                People Applied ...{post.applied}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{Post}</>;
};

export default PostBox;
