import { Link, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { bankT } from '../util/bankTypes';

type propsT = {
    bank: bankT;
}

export default function BankTile ({ bank }: propsT) {
    return <Paper sx={{
        p:2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) => 
            theme.palette.mode === 'dark' ? '#1A2027' : bank.color
        }}>
        
        <Typography variant="body1" align="center">
            
            <Link component={RouterLink} to={`/bank/${bank.id}`}
                sx={{
                    textDecoration:"none",
                    color: "white",
                    variant:"body1"
                }}>
            
                {bank.bankName}
            </Link>
        </Typography>
    </Paper>
}