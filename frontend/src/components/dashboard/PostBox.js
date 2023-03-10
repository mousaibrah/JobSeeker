import React, { useState } from "react";
import { Button } from "../styled/Button.Styled";
import { v4 } from "uuid";

const PostBox = ({ postsData }) => {
  const [maxLength, setMaxLength] = useState(250);
  const [isCollapse, setIsCollapse] = useState(false);
  console.log("postsData :>> ", postsData);
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
            <div className="postTopRight"></div>
          </div>
          <div className="postCenter">
            <span className="postText">{post.description}</span>
            {post.responsibility
              ? post.responsibility.map((elem) => <li>{elem}</li>)
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
