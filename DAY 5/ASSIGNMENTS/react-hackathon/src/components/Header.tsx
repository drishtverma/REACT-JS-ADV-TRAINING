import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FriendContextType, FriendsContext } from '../context/FriendsContex';
const Header: React.FC = () => {
  const { localData, localStorageData } = useContext(
    FriendsContext
  ) as FriendContextType;
  
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Friends Book
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign='center'>
                <Link
                  to={'/'}
                  onClick={() => {
                    localStorageData({ auth: false });
                    localStorage.clear();
                  }}
                >
                  {localData.auth ? 'SignOut' : 'SignIn'}
                </Link>
              </Typography>
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign='center'>
                <Link to={'/dashboard'}>Home</Link>
              </Typography>
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Typography textAlign='center'>
                <Link to={'/friend-list'}>My Friends</Link>
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
