import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      {isLoading ? (
        <Skeleton height={120} />
      ) : (
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="https://talks-hrgs.onrender.com/assets/travel.jpg"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
          loading="lazy"
        />
      )}
      <FlexBetween>
        <Typography color={main}>Travel Planner</Typography>
        <Typography color={medium}>travelplanner.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Plan your trip with us to know what a good trip is
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
