import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined } from "@mui/icons-material"
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material"
import FlexBetween from "components/FlexBetween"
import Friend from 'components/Friend'
import WidgetWrapper from "components/WidgetWrapper"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPost } from "state"
import AddComment from "components/AddComment"
import DisplayEachComment from "components/DisplayEachComment"
const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  postPicture,
  userPicture,
  likes,
  comments,
}) => {
  const [isComments, setIsComments] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();

  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = async () => {
    const response = await fetch(`https://talks-hrgs.onrender.com/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const AddComments = async (commentContent) => {
    const response = await fetch(
      `https://talks-hrgs.onrender.com/posts/${postId}/comment`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({userId: loggedInUserId, commentContent}),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  const DeleteComment = async (commentId) => {
    const response = await fetch(
      `https://talks-hrgs.onrender.com/posts/${postId}/comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({userId: loggedInUserId}),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicture={userPicture}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {postPicture && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={postPicture.url}
          loading="lazy"
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography> {likeCount} </Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography> {comments.length} </Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      {isComments && (
        <>
          <AddComment AddComments={AddComments} />
          <Box mt="0.5rem">
            {comments.map((comment, i) => (
              <DisplayEachComment {...comment} key={i} DeleteComment={DeleteComment} postUserId={postUserId}/>
            ))}
            
          </Box>
        </>
      )}
    </WidgetWrapper>
  );
}

export default PostWidget