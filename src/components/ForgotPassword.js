import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Paper, IconButton, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: 'url(https://img.freepik.com/free-photo/side-view-woman-using-virtual-reality-headset_23-2148598108.jpg?t=st=1714648039~exp=1714651639~hmac=75165c11138577be277aa63f4fcaf3b6eb51f5e1e449690e910895d6b33c3790&w=740)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  paper: {
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: theme.spacing(4),
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: 300,
    textAlign: 'left',
    marginLeft: 20,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#2ecc71',
    '&:hover': {
      backgroundColor: '#27ae60',
    },
  },
  label: {
    color: '#555',
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('ForgotPassword component mounted');
    return () => {
      console.log('ForgotPassword component unmounted');
    };
  }, []);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgotpassword', { email });
      setMessage('Instructions to reset your password have been sent to your email.');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to send reset instructions. Please try again.');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5" align="center">
            Forgot Password
          </Typography>
          <Typography>
            Please enter your email address below, and we'll send you instructions on how to reset your password.
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Reset Password
            </Button>
          </form>
          {message && <Typography color="textSecondary">{message}</Typography>}
        </Paper>
      </Container>
    </div>
  );
};

export default ForgotPassword;
