import { Box } from "@mui/material";
import BankCard from "./BankCard";
import ResponsiveAppBar from "./ResponsiveAppBar";


export default function OnePage () {
    
    return <Box sx={{
        margin: "auto",
        maxWidth: 800,
        flexGrow: 1,
        }}>

        <ResponsiveAppBar/>
        <BankCard/>
    </Box>
}

