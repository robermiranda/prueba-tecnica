/*
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
*/
import { useRecoilValue } from 'recoil';
import { /*bankListState,*/ bankState } from '../util/state';
import { bankT } from '../util/bankTypes';
import { Card, CardContent,  CardMedia } from '@mui/material';
import { Box, Typography }  from '@mui/material';


export default function BankCard () {

    /*
    const { id } = useParams();
    const bankList = useRecoilValue(bankListState);
    const [bank, setBank] = useState<bankT>();
    

    
    useEffect(() => {
        const bank = bankList.find(bank => bank.id === id);
        setBank(bank);
    }, [id, bankList]);*/

    const bank: bankT = useRecoilValue<bankT>(bankState);

    return <Box sx={{
            p:2,
            margin: "auto",
            maxWidth: 800,
            flexGrow: 1,
            backgroundColor: (theme) => 
                theme.palette.mode === 'dark' ? '#1A2027' : theme.palette.grey[50]
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