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
import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorHandler from './ErrorHandler';
let nameValidation = RegExp(/^([a-zA-Z_. -])*$/);
let numberValidation = RegExp(/^([0-9])*$/);
const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    dob: '',
    address: '',
    number: '',
    gender: 'female',
  });
  const [error, setError] = useState({});
  const { addStudent, updateStudent } = useContext(StudentContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (location.state) {
        let data = location.state;
        setStudentData({
          id: data.id,
          name: data.name,
          dob: data.dob,
          address: data.address,
          number: data.number,
          gender: data.gender,
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (studentData.id)
      updateStudent(studentData.id, studentData).then((res) => {
        if (res.response && res.response.status !== 200)
          navigate('/error', {
            state: res.message + ' ' + res.response.statusText,
          });
        else navigate('/show-student');
      });
    else
      addStudent(studentData).then((res) => {
        if (res.response && res.response.status !== 200)
          navigate('/error', {
            state: res.message + ' ' + res.response.statusText,
          });
        else navigate('/show-student');
      });
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
                value={studentData.name}
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
              value={studentData.dob}
              inputProps={{
                max: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='address'
              label='Address'
              onChange={handleInput}
              value={studentData.address}
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
              value={studentData.number}
            />
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                defaultValue='female'
                name='gender'
                onChange={handleInput}
                value={studentData.gender}
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
