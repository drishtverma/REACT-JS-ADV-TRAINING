import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { FriendContextType, FriendsContext } from '../context/FriendsContex';

const Profile: React.FC = () => {
  const { profileData } = useContext(FriendsContext) as FriendContextType;
  console.log(profileData,'oo');

  return (
    <Grid
      container
      spacing={2}
      paddingRight={2}
      mt={0}
      sx={{ backgroundColor: 'whitesmoke' }}
      component='main'
    >
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant='h5' component='div'>
              Name :{' '}
              {profileData.title +
                ' ' +
                profileData.firstName +
                ' ' +
                profileData.lastName}
              <br />
            </Typography>
            <Typography sx={{ mb: 0 }} color='text.secondary'>
              {profileData.gender}
              <br /> {profileData.dateOfBirth}
            </Typography>
            <Typography variant='body2'>
              {profileData.location.street +
                ' ' +
                profileData.location.city +
                ' ' +
                profileData.location.profileData +
                ' ' +
                profileData.location.country}
              <br />
              {profileData.phone}
            </Typography>
            <img src={profileData.picture} alt='profilepic' width={'40%'} />
         
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
