import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import BankCard from './BankCard';
import HistoryView from './HistoryView';
import BankListLink from './BankListLink';


export default function DetailContent () {

    const { id } = useParams();

    const TheContent = id === 'history-view' ? HistoryView : BankCard;

    return <Box sx={{
        margin: "auto",
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) => 
            theme.palette.mode === 'dark' ? '#1A2027' : theme.palette.grey[50]
    }}>
        <Stack spacing={2}>
            <TheContent/>
            <BankListLink/>
        </Stack>
    </Box>
}