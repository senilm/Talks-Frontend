import { Box } from "@mui/material";
import {styled} from "@mui/system"


const FlexBetween = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})

export default FlexBetween

// styled(Box): This part is creating a styled component based on the Box component from Material-UI. It means that the FlexBetween component will inherit all the properties and features of the Box component, while adding custom styles defined in the following object.