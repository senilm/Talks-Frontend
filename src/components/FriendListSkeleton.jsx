import WidgetWrapper from "./WidgetWrapper"
import Skeleton from "react-loading-skeleton"
import FlexBetween from "./FlexBetween"
import { Typography } from "@mui/material"
import {Box} from "@mui/material"

const FriendListSkeleton = () => {
  return (
    <WidgetWrapper>
            <Typography
                
                variant="h5"
                fontWeight="500"
                sx={{ mb: "1.5rem" }}
            >
                Friend List
            </Typography>
            <FlexBetween>
                <Skeleton circle width={55} height={55}/>
                <Box>
                <Skeleton width={130} height={18}/>
                <Skeleton width={80} height={14}/>
                </Box>
                <Skeleton circle width={40} height={40}/>
            </FlexBetween>
        </WidgetWrapper>
  )
}

export default FriendListSkeleton