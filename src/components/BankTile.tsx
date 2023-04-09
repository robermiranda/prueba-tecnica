import { Box, Link, Typography } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { bankT } from '../util/bankTypes';

type propsT = {
    bank: bankT;
}


export default function BankTile ({bank}: propsT) {
    return <Card sx={{
        p:1,
        backgroundColor: (theme) => 
            theme.palette.mode === 'dark' ? '#1A2027' : bank.color
        }}>
        
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardMedia component="img"
                sx={{ width: 60 }}
                image={require(`../assets/${bank.logo}`)}
                alt={bank.bankName}/>
            <CardContent>
                <Typography variant="body1" align="center">
                    <Link component={RouterLink}
                        to={`/bank/${bank.id}`}
                        sx={{
                            textDecoration:"underline",
                            color: "white",
                        }}>
                    
                        {bank.bankName}
                    </Link>
                </Typography>
            </CardContent>
        </Box>
    </Card>
}