import { useRecoilValue } from 'recoil';
import { infoState } from '../util/state';
import { Box, Stack } from '@mui/material';
import BankCard from './BankCard';
import HistoryView from './HistoryView';
import HistoryButton from './HistoryButton';


export default function InfoContainer () {

    const info: string = useRecoilValue<string>(infoState);
    let TheContent;

    switch (info) {
        case 'info-bank' : TheContent = BankCard; break;
        case 'info-history' : TheContent = HistoryView; break;
        default: TheContent = HistoryView;
    }

    return <Box sx={{
        margin: "auto",
        maxWidth: 800,
        flexGrow: 1
        }}>

        <Stack spacing={2}>
            <TheContent/>
            <HistoryButton/>
        </Stack>
    </Box>;
}