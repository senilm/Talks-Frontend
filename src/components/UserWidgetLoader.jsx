import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";
import WidgetWrapper from "./WidgetWrapper";
import FlexBetween from "./FlexBetween";

const UserWidgetLoader = () => {
  return (
    <WidgetWrapper>
      {/* Skeleton loader for user information */}
      <Box p="0 0 1rem 0">


        {/* Use FlexBetween to align image skeleton and text */}
        <FlexBetween gap="1rem" alignItems="center">
          <Skeleton height={60} width={60} circle />
          <Box>
            <Skeleton height={24} width={180} />     
          </Box>
        </FlexBetween>
      </Box>

      <Divider />

      {/* Skeleton loader for location and occupation */}
      <Box p="1rem 0">
        <Skeleton height={24} />
        <Skeleton height={24} />
      </Box>

      <Divider />

      {/* Skeleton loader for viewed profile and impressions */}
      <Box p="1rem 0">
        <Skeleton height={24} />
        <Skeleton height={24} />
      </Box>

      <Divider />

      {/* Skeleton loader for social profiles */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <Skeleton height={30} />

        <Skeleton height={30} />
      </Box>
    </WidgetWrapper>
  );
}

export default UserWidgetLoader;
