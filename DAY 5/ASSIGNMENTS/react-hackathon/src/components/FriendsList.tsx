import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FriendContextType, FriendsContext } from '../context/FriendsContex';

const FriendsList: React.FC = () => {
  const navigate = useNavigate();
  const { friendList, friendsList, friendDetails, removeFriend } = useContext(
    FriendsContext
  ) as FriendContextType;
  useEffect(() => {
    friendList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seeProfile = (id: String) => {
    friendDetails(id).then((res: any) => {
      if (!res) navigate(`/profile-details/${id}`);
    });
  };

  const removeFrnd = (id: String) => {
    removeFriend(id).then((res: any) => {
      friendList();
    });
  };

  return (
    <Grid
      container
      spacing={2}
      paddingRight={2}
      mt={0}
      sx={{ backgroundColor: 'whitesmoke' }}
      component='main'
    >
      {friendsList.length > 0 &&
        friendsList.map((res: any, index: number) => (
          <Grid item xs={6} md={4} key={index}>
            <Card>
              <CardContent>
                <img src={res.picture} alt='profilepic' width={'40%'} />
                <Typography variant='h5' component='div'>
                  Name : {res.title + ' ' + res.firstName + ' ' + res.lastName}
                  <br />
                  {res.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' onClick={() => seeProfile(res.id)}>
                  See Profile
                </Button>
                <Button variant='outlined' onClick={() => removeFrnd(res.id)}>
                  Remove Friend
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default FriendsList;
