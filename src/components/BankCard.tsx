import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { bankListState, historyState } from '../util/state';
import { bankT } from '../util/bankTypes';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Typography }  from '@mui/material';


export default function BankCard () {

    const { id } = useParams();
    const bankList = useRecoilValue(bankListState);
    const [bank, setBank] = useState<bankT>();
    const [historyView, setHistoryView] = useRecoilState(historyState);

    useEffect(() => {
        const bank = bankList.find(bank => bank.id === id);
        setBank(bank);
    }, [id, bankList]);

    useEffect(() => {
        if (bank) {
            const hv = [...historyView, bank.bankName];
            setHistoryView(hv);
        }
    }, [bank]);

    return <>
        { ! bank ? null :
        <Card>
            <CardMedia component="img"
                image={bank?.url}
                alt={bank?.bankName}
                height="400"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {bank?.bankName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {bank?.description}
                </Typography>
                <Typography variant="caption" display="block" color="text.secondary">
                    Age: {bank?.age}
                </Typography>
            </CardContent>
        </Card>
        }
    </>
}