import { InfinitySpin } from "react-loader-spinner";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const styledBox =styled(Box)({
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
})
const ButtonLoader = () => {
  return (
    <styledBox >
      <InfinitySpin width="200" color="#51E5FF" />
    </styledBox>
  );
};

export default ButtonLoader;
