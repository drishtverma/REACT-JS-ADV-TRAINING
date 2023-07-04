import {
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { FriendContextType, FriendsContext } from '../context/FriendsContex';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {
  const navigate = useNavigate();
  const { data, friends, friendDetails, addFriends } = useContext(
    FriendsContext
  ) as FriendContextType;
  useEffect(() => {
    return () => {
      friends();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const seeProfile = (id: String) => {
    friendDetails(id).then((res: any) => {
      if (!res) navigate(`/profile-details/${id}`);
    });
  };
  const addFriend = (data: any) => {
    addFriends(data).then((res: any) => {
      if (res.data) navigate(`/friend-list`);
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
      {data.length > 0 &&
        data.map((res: any, index: number) => (
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
                <Button variant='outlined' onClick={() => addFriend(res)}>
                  Add Friend
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
