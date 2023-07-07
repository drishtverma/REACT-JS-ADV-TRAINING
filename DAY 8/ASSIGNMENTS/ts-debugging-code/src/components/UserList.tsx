import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { UserContext, UserContextType } from '../context/UserContext';

const UserList: React.FC = () => {
  debugger;
  //   const [data, setData] = React.useState([]);
  const { users, data } = React.useContext(UserContext) as UserContextType;
  React.useEffect(() => {
    debugger;
    return () => {
        debugger
      users();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      <Typography gutterBottom variant='body2' color='orange' component='span'>
        Home
      </Typography>{' '}
      <Typography
        gutterBottom
        variant='body2'
        color='text.secondary'
        component='span'
      >
        | User List
      </Typography>{' '}
      <Typography
        gutterBottom
        variant='body2'
        color='text.secondary'
        component='div'
      >
        Showing 1-30 of 100
      </Typography>
      <Grid
        container
        spacing={2}
        paddingRight={2}
        sx={{ backgroundColor: 'white' }}
        component='main'
      >
        {data.length > 0 &&
          data.map((res: any, index: number) => (
            <Grid item xs={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='140'
                  image={res.image}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {res.firstName + ' ' + res.lastName}
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    Email: {res.email}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    BithDate: {res.birthDate} | BloodGroup: {res.bloodGroup}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Address:{' '}
                    {res.address.address +
                      ' ' +
                      res.address.city +
                      ' ' +
                      res.address.state +
                      ' ' +
                      res.address.postalCode}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Gender : {res.gender}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Add User</Button>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
export default UserList;
