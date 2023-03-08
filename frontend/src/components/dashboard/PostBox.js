import React, { useState } from "react";
import { Button } from "../styled/Button.Styled";
import { v4 } from "uuid";

const PostBox = ({ postsData }) => {
  const [maxLength, setMaxLength] = useState(250);
  const [isCollapse, setIsCollapse] = useState(false);
  if (!postsData) {
    return;
  }
  const Post = postsData.map((post) => {
    return (
      <div className="post" key={v4()}>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              />
              <span className="postUsername">{post.company}</span>
              {/* <span className="postDate">{post.date}</span> */}
            </div>
            <div className="postTopRight"></div>
          </div>
          <div className="postCenter">
            <span className="postText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              nemo. Corporis vel architecto ad dignissimos. Ipsam at eius dicta
              accusantium omnis perspiciatis sequi porro reprehenderit, enim aut
              modi? Laboriosam, nulla. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. A, numquam tempora? Enim exercitationem aliquam
              est inventore facere. Odit totam aspernatur, dicta facilis, non
              rerum quo itaque porro consequatur, provident nisi! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Quibusdam porro ut
              omnis illum enim et iste doloribus exercitationem provident nobis
              rerum minima quia perferendis atque accusantium autem sapiente,
              quae necessitatibus. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur fugit architecto culpa nihil ea
              delectus eligendi, deserunt quia quo corporis, reprehenderit
              dolore eveniet earum maxime, quidem non. Nostrum, dolorum eum.
            </span>
            <img
              className="postImg"
              src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/02/Where_To_Advertise_Your_Jobs_-_article_image.jpg"
              alt=""
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <Button>APPLY</Button>
            </div>
            <div className="postBottomRight">
              <span className="postLikeCounter"> People Applied ...</span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{Post}</>;
};

export default PostBox;
