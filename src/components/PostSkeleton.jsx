import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import Skeleton from "react-loading-skeleton"; // You need to import your Skeleton component here
import FlexBetween from "./FlexBetween";
const PostLoader = () => {
  return (
    <WidgetWrapper m="2rem 0">
      <FlexBetween m="0 0 1rem 0 ">
        <FlexBetween gap={2}>
          <Skeleton circle width={55} height={55} />
          <Skeleton  width={120} height={24} />
        </FlexBetween>
        <Skeleton circle width={55} height={55} />
      </FlexBetween>

      <Divider />

      <Box mt="1rem">
        <Skeleton height={20} width="80%" />
        <Skeleton height={20} width="90%" />
      </Box>

      <Skeleton height={200} />
    </WidgetWrapper>
  );
};

export default PostLoader;
