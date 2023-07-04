import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FriendContextType, FriendsContext } from '../context/FriendsContex';

const defaultTheme = createTheme();

interface FormType {
  email: any;
  password: any;
  auth: boolean;
}

const Login: React.FC = () => {
  const [formData, setFormdata] = React.useState<FormType>({
    email: '',
    password: '',
    auth: false,
  });
  const navigate = useNavigate();
  const { localStorageData } = useContext(FriendsContext) as FriendContextType;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setFormdata({
      email: data.get('email'),
      password: data.get('password'),
      auth: true,
    });
    localStorage.setItem('email', formData.email);
    localStorageData({ auth: true });
    navigate('/dashboard');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
