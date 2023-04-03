import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../assets/logo192.png';
import { bankNameState, bankListState, bankState } from '../util/state';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { bankT } from '../util/bankTypes';


const pumasTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0C2453',
        },
    },
});


export default function ResponsiveAppBar () {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const bankNameList: string[] = useRecoilValue<string[]>(bankNameState);

    const bankList: bankT[] = useRecoilValue<bankT[]>(bankListState);

    const setBank = useSetRecoilState(bankState);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    function setBankCard (bankName: string): void {
        const bank = bankList.find(bank => bank.bankName === bankName);
        if (bank && "bankName" in bank) setBank(bank);
    }

    return (
        <ThemeProvider theme={pumasTheme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={logo} alt="logo react" width="25"/>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit">
                            
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}>

                                {bankNameList.map((bank) => (
                                    <MenuItem key={bank} onClick={event => setBankCard(bank)}>
                                        <Typography>
                                            {bank}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {bankNameList.map((bank) => (
                                <Button
                                    key={bank}
                                    onClick={event => setBankCard(bank)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}>
                                    
                                    {bank}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};