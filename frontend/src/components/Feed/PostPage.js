import React, { useEffect, useState } from "react";
import FeedNav from "./FeedNav";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { v4 } from "uuid";
import { Button } from "../styled/Button.Styled";
import { Container } from "react-bootstrap";
const PostPage = () => {
  const { id } = useParams();
  const userId = JSON.parse(localStorage.getItem("userId"));
  const Role = JSON.parse(localStorage.getItem("role"));
  const [post, setPost] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getPostById();
  }, []);
  const getPostById = async () => {
    try {
      const postData = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(postData.data.post);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <>
      <FeedNav />

      <Container>
        <Button onClick={() => navigate(-1)}>Back</Button>
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

                <span className="postDate">
                  {post?.createdAt?.slice(0, 10)}
                </span>
              </div>
              <div className="postTopCenter">
                <span className="postDate">{post?.location}</span>
              </div>
              <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
              <h3 className="text-primary" style={{ textAlign: "center" }}>
                {post.title}
              </h3>
              <div
                className="postText"
                dangerouslySetInnerHTML={{ __html: post?.description }}
              ></div>

              {post.responsibility
                ? post.responsibility.map((elem) => <li key={v4()}>{elem}</li>)
                : ""}
              <img className="postImg" src={post?.picturePath} />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                {Role === "USER" && (
                  <Button onClick={() => console.log("test")}>APPLY</Button>
                )}
              </div>
              {/* <div className="postBottomRight">
                
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PostPage;
