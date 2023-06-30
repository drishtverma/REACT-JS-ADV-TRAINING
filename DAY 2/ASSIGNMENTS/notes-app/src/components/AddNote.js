import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Notes from './Notes';

const AddNote = (props) => {
  const [input, setInput] = useState({ title: '' });

  const handleInput = (e) => {
    setInput({ title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNotes(input);
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
            Add Notes
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
          <Notes />
        </Box>
      </Grid>
    </Grid>
  );
};
const MapDispatchToProps = (dispatch) => ({
  addNotes: (item) => dispatch({ type: 'ADD_NOTES', payload: item }),
});
export default connect(null, MapDispatchToProps)(AddNote);
