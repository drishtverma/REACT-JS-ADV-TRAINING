import { Delete, Edit } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';

const ShowStudent = () => {
  const navigate = useNavigate();
  const { data, showStudent, deleteStudent } = useContext(StudentContext);
  useEffect(() => {
    return () => {
      showStudent();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (data) => {
    navigate('/', { state: data });
  };
  const handleDelete = (id) => {
    deleteStudent(id).then(() => showStudent());
  };
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
              <CardActions>
                <IconButton onClick={() => handleEdit(res)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(res.id)}>
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default ShowStudent;
