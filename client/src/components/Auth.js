import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Input from './Input';

import { GoogleLogin } from '@react-oauth/google';
import { Grid } from '@mui/material';

const Auth = () => {
  const [isUser, setIsUser] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleClick = () => setIsUser((prevIsUser) => !prevIsUser)

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isUser ? 'Sign In' : 'Sign Up'}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

            {!isUser && (
              <Input id='name' name='name' label='Name' type='text' onChange={handleChange} autoComplete='given-name' />
              )
            }

            <Input id='email' name='email' label='Email Adress' type='email' onChange={handleChange} autoComplete='email' /> 
            <Input id='password' name='password' label='Password' type={showPassword ? 'text' : 'password'}  autoComplete={isUser ? 'current-password' : 'new-password'} onChange={handleChange} handleShowPassword={handleShowPassword}/>

            {!isUser && (
              <Input id='confirmPassword' name='confirmPassword' label='Confirm password' type='password' onChange={handleChange} autoComplete='new-password' />
              )
            }

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 328, alignSelf: 'center' }}
            >
              {isUser ? 'Sign In' : 'Sign Up'}
            </Button>

            <GoogleLogin 
                  onSuccess={(response) => console.log(response)}
                  onError={() => console.log('Error')}
                  size='medium'
                  text={isUser ? 'signin_with' : 'signup_with'}
                  width='328'
                />
            

            <Grid sx={{ mt: 2 }} container>
              <Grid item xs>
                <Link onClick={handleClick} href="#" variant="body2">
                  {isUser ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  )
}

export default Auth