import { Box } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import InfoContainer from "./InfoContainer";


export default function OnePage () {
    
    return <Box sx={{
        margin: "auto",
        maxWidth: 800,
        flexGrow: 1,
        }}>

        <ResponsiveAppBar/>
        <InfoContainer/>
    </Box>
}

