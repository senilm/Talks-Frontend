import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import FlexBetween from "./FlexBetween";
import { useState } from "react";
import UserImage from "./UserImage";
import { Box, Typography,Divider } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DisplayEachComment = ({ userId, commentContent,commentId,DeleteComment,postUserId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.token);
  const {_id} = useSelector((state) => state.user);
  const getUser = async () => {
    const response = await fetch(`https://talks-backend.vercel.app/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setIsLoading(false);
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <Box sx={{display:"flex"}} my="0.75rem" gap={2}>
            <Skeleton circle width={50} height={50} />
            <Skeleton width={200} height={24} />
          </Box>
        </>
      ) : (
        <>
          <FlexBetween mt="0.75rem">
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
              p="0.1rem"
              gap={2}
            >
              <UserImage image={user.picture.url} size="50" />
              <Box>
                <Typography mt="0.2rem" variant="h5" fontWeight="450">
                  {user.firstName} {user.lastName}
                </Typography>
                <Box>{commentContent}</Box>
              </Box>
            </Box>
            {(_id ===  postUserId || _id === userId )&&
            <IconButton aria-label="delete" onClick={()=>DeleteComment(commentId)}>
              <DeleteIcon />
            </IconButton>}
          </FlexBetween>
          
        </>
      )}
    </>
  );
};

export default DisplayEachComment;
