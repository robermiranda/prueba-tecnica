import { Suspense } from 'react';
import {RecoilRoot} from 'recoil';
import { Box } from '@mui/material';
import DetailContent from './components/DetailContent';
import Page404 from './components/Page404';
import {
    BrowserRouter as Router,
    Route,
    Routes } from "react-router-dom";
import Home from './components/Home';


function App() {
    return (
        <Router>
            <Box mx={{xs: 0.2, md: 2}} mt={{xs: 2, md: 4}}>
                <RecoilRoot>
                    <Suspense fallback={<p>Loading Data . . . . .</p>}>
                        <Routes>
                            <Route path='/' element={ <Home/> }/>
                            <Route path='/bank/:id' element={ <DetailContent/> }/>
                            <Route path='*' element={ <Page404/> }/>
                        </Routes>
                    </Suspense>
                </RecoilRoot>
            </Box>
        </Router>
    );
}

export default App;
