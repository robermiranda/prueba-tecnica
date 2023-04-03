import { Suspense } from 'react';
import {RecoilRoot} from 'recoil';
import { Box } from '@mui/material';
import OnePage from './components/OnePage';

export default function App() {
    return <Box mx={2} mt={3}>
        <RecoilRoot>
            <Suspense fallback={<p>Loading Data . . . . .</p>}>
                <OnePage/>
            </Suspense>
        </RecoilRoot>
    </Box>
}
