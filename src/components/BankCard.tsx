import { useRecoilValue, useRecoilState } from 'recoil';
import { historyState } from '../util/state';
import { bankState } from '../util/state';
import { bankT } from '../util/bankTypes';
import { Card, CardContent,  CardMedia } from '@mui/material';
import { Box, Typography }  from '@mui/material';
import { useEffect } from 'react';


export default function BankCard () {

    const bank: bankT = useRecoilValue<bankT>(bankState);

    const [history, setHistory] = useRecoilState(historyState);

    useEffect (() => {
        if (bank && bank.bankName) {
            setHistory([bank.bankName, ...history]);
        }
    }, [bank.bankName]);

    return <Box sx={{
            pt: 2,
        }}>

        <Card>
            <CardMedia component="img"
                image={bank.url}
                alt={bank.bankName}
                height="400"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {bank.bankName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {bank.description}
                </Typography>
                <Typography variant="caption" display="block" color="text.secondary">
                    Age: {bank.age}
                </Typography>
            </CardContent>
        </Card>
    </Box>
}