import Products from './Products';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { connect } from 'react-redux';

let product = [];
const AddProduct = (props) => {
  const [input, setInput] = useState({ title: '' });

  const handleInput = (e) => {
    setInput({ title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    product.push(input);
    localStorage.setItem('products', JSON.stringify(product));
    setInput({ title: '' });
  };

  return (
    <Grid container spacing={2} component='main'>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Add Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <TextField
                margin='normal'
                required
                fullWidth
                label='Name'
                name='name'
                value={input.title}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type={'submit'} variant={'contained'} fullWidth>
                Add
              </Button>
            </Grid>
          </form>
          <Products
            data={
              localStorage.getItem('products') !== null &&
              JSON.parse(localStorage.getItem('products')).length > 0
                ? JSON.parse(localStorage.getItem('products'))
                : []
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
