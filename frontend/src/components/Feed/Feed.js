import axios from "axios";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useContext, createContext, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { v4 } from "uuid";
import AddPost from "./AddPost";
import LeftNav from "./LeftNav";
import OurClient from "./OurClient";
import PostBox from "./PostBox";
import { AppContext } from "../State/AppState";
import Swal from "sweetalert2";
import Apply from "./Apply";
import FeedNav from "./FeedNav";
export const DashBoardContext = createContext();
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

      <Container fluid className="DashBoard">
        <MDBRow>
          <MDBCol lg="3">
            <LeftNav />
          </MDBCol>
          <MDBCol lg="7" className="posts-page">
            <MDBRow>
              <p>test</p>
            </MDBRow>
            {(role === "COMPANY" || role === "ADMIN") && <AddPost />}

            <PostBox postsData={{ posts }} key={v4()} />
          </MDBCol>

          <MDBCol lg="2">
            <OurClient />
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
};

export default Feed;

/* 
<WidgetWrapper>
    //  FIRST ROW 
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      // SECOND ROW 
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      // THIRD ROW 
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Who's viewed your profile</Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      // FOURTH ROW 
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>


*/
