import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';
let nameValidation = RegExp(/^([a-zA-Z_. -])*$/);
let numberValidation = RegExp(/^([0-9])*$/);
const AddStudent = () => {
  const [studentData, setStudentData] = useState({gender:'female'});
  const [error, setError] = useState({});
  const { addStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
    switch (name) {
      case 'name': {
        if (!nameValidation.test(value)) {
          setError({
            ...error,
            name: true,
            nameMsg: 'Name must be alphabetic.',
          });
          return;
        } else {
          delete error.name;
          delete error.nameMsg;
        }
        break;
      }
      case 'number': {
        if (!numberValidation.test(value)) {
          setError({
            ...error,
            num: true,
            numMsg: 'Mobile Number must be numeric.',
          });
          return;
        } else {
          delete error.num;
          delete error.numMsg;
        }
        break;
      }
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addStudent(studentData).then((res) => navigate('/show-student'));
  };

  return (
    <Grid container component='main'>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Add Student
          </Typography>
          <form onSubmit={submitHandler}>
            <Grid item xs={12}>
              <TextField
                margin='normal'
                required
                fullWidth
                label='Name'
                name='name'
                onChange={handleInput}
                error={error.name}
                helperText={error.nameMsg}
              />
            </Grid>

            <TextField
              margin='normal'
              required
              fullWidth
              type='date'
              name='dob'
              label='Birth Date'
              onChange={handleInput}
              InputLabelProps={{ shrink: true }}
              nputProps={{max:new Date()}}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='address'
              label='Address'
              onChange={handleInput}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='number'
              label='Mobile Number'
              onChange={handleInput}
              error={error.num}
              helperText={error.numMsg}
            />
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                defaultValue='female'
                name='gender'
                onChange={handleInput}
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
              </RadioGroup>
            </FormControl>

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disabled={Object.entries(error).length !== 0}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddStudent;
