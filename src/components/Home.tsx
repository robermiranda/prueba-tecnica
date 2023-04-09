import { Box, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import BankList from './BankList';


export default function Home () {
    return <Box sx={{
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
        }}>

        <BankList/>
        <Link component={RouterLink}
            to={`/bank/history-view`}
            sx={{
                textDecoration:"underline",
                color: "blue",
            }}>
        
            History View
        </Link>
    </Box>
}