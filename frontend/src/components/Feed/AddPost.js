import React, { useState, useContext, createContext } from "react";
import { Button } from "../styled/Button.Styled";
import { AppContext } from "../State/AppState";
import axios from "axios";
import Modal01 from "./addJobModal/Modal01";
import { useNavigate } from "react-router-dom";
export const AddJobContext = createContext();
const AddPost = () => {
  const navigate = useNavigate();
  const [responsibilityInput, setResponsibilityInput] = useState("");
  const { setPosts, posts } = useContext(AppContext);
  const [newPost, setNewPost] = useState({
    jobTitle: "",
    company: "",
    type: "",
    location: "",
    description: "",
  });

  const userId = JSON.parse(localStorage.getItem("userId"));

  const [modal01, setModal01] = useState(false);
  const [modal02, setModal02] = useState(false);
  const [modal03, setModal03] = useState(false);

  const handleShow = () => setModal01(true);

  const sharePost = async () => {
    try {
      const request = await axios.post(
        `http://localhost:5000/posts/${userId}`,
        newPost
      );
      setPosts([request.data, ...posts]);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const value = {
    modal03,
    setModal03,
    modal02,
    setModal02,
    modal01,
    setModal01,
    sharePost,
    newPost,
    setNewPost,
  };
  return (
    <AddJobContext.Provider value={value}>
      <div className="AddPost">
        <Button className="create-post-job" onClick={handleShow}>
          Post New Job
        </Button>
      </div>

      <Modal01 />
    </AddJobContext.Provider>
  );
};

export default AddPost;
