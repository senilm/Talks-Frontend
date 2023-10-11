import { Box, TextField, Button } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const AddComment = ({ AddComments }) => {
  const [commentContent, setCommentContent] = useState("");
  return (
    <>
      <FlexBetween mt="9px">
        <TextField
          id="outlined-basic"
          label="Add a Comment"
          variant="outlined"
          style={{ borderRadius: "1rem", width: "90%" }}
          onChange={(e) => setCommentContent(e.target.value)}
          value={commentContent}
        />
        <IconButton onClick={() => 
            {AddComments(commentContent)
            setCommentContent('')}
        }>
          <SendIcon />
        </IconButton>
      </FlexBetween>
    </>
  );
};

export default AddComment;
