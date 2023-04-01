import { Suspense } from 'react';
import {RecoilRoot} from 'recoil';
import BankList from './components/BankList';
import { Box } from '@mui/material';
import BankCard from './components/BankCard';
import Home from './components/Home';
import Page404 from './components/Page404';
import {
    BrowserRouter as Router,
    Route,
    Routes } from "react-router-dom";


function App() {
    return (
        <Router>
            <Box mx={2} mt={3}>
            <RecoilRoot>
            <Suspense fallback={<p>Loading Data . . . . .</p>}>
                <Routes>
                    <Route path='/' element={ <Home/> }/>
                    <Route path='/bankList' element={ <BankList/> }/>
                    <Route path='/bank/:id' element={ <BankCard/> }/>
                    <Route path='*' element={ <Page404/> }/>
                </Routes>
            </Suspense>
            </RecoilRoot>
            </Box>
        </Router>
    );
}

export default App;
