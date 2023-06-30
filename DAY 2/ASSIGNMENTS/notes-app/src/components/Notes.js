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
import { notesActions } from '../redux/action';
const Notes = (props) => {
  const data = useSelector((state) => state);

  return (
    <Grid
      container
      spacing={2}
      paddingRight={2}
      mt={0}
      sx={{ backgroundColor: 'white' }}
      component='main'
    >
      {data.notesList.length > 0 &&
        data.notesList.map((res, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Notes : {res.title}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => props.deleteToDo(index)}>
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
const mapStateToProps = (notesList) => ({ notesList: notesList });
const MapDispatchToProps = (dispatch) => ({
  deleteToDo: (idx) => dispatch({ type: 'DELETE_NOTES', payload: idx }),
});
export default connect(mapStateToProps, MapDispatchToProps)(Notes);
