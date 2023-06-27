import { Grid, Card, CardContent, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

const ShowStudent = () => {
  const [data, setData] = useState([]);
  const { showStudent } = useContext(StudentContext);
  useEffect(() => {
    return () => {
      showStudent().then((res) => setData(res.data));
    };
  }, [showStudent]);
  return (
    <Grid
      container
      spacing={2}
      paddingRight={2}
      mt={0}
      sx={{ backgroundColor: 'white' }}
      component='main'
    >
      {data.length > 0 &&
        data.map((res, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Student Id : {res.id}
                  <br />
                  {res.name}
                </Typography>
                <Typography sx={{ mb: 0 }} color='text.secondary'>
                  {res.gender}
                  <br /> {res.dob}
                </Typography>
                <Typography variant='body2'>
                  {res.address}
                  <br />
                  {res.number}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default ShowStudent;
