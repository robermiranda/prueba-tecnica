import { Link, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

type propsT = {
    bankName: string;
    id?: string;
}

export default function BankTile (props: propsT) {
    return <Paper sx={{
        p:2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) => 
            theme.palette.mode === 'dark' ? '#1A2027' : theme.palette.grey[50]
        }}>
        
        <Typography variant="body1" align="center">
            
            <Link component={RouterLink} to={`/bank/${props.id}`}
                sx={{
                    textDecoration:"none",
                    color:"inherit",
                    variant:"body1"
                }}>
            
                {props.bankName}
            </Link>
        </Typography>
    </Paper>
}