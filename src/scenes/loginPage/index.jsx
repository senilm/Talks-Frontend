import { CenterFocusWeakSharp } from "@mui/icons-material";   
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import Form from './Form'
import { useState } from "react";

const LoginPage = () => {
  const theme = useTheme();
  const [display, setDisplay] = useState(false)
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const checkDisplay = () =>{
    setDisplay(!display)
  }
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">

        <Typography
          fontWeight='bold'
          fontSize='32px'
          color="primary"
        >
          Talks
        </Typography>
      </Box>


      <Box 
        width={isNonMobileScreens?"50%":"93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{mb:"1.5rem"}}>
          Welcome to TALKS {display && <p style={{color:"#51E5FF",wordBreak:"break-word"}}>[close the tab and try again if no response received]</p>}
        </Typography>
        <Form setDisplay={setDisplay}/>

      </Box>
    </Box>
  )
}

export default LoginPage