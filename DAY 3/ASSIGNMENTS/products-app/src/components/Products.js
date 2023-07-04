import { Delete } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { connect, useSelector } from 'react-redux';

const Products = ({ data }) => {
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
                  Products : {res.title}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Products;
