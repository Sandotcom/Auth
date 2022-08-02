import React from 'react'
import Auth from './components/Auth'
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="584941458703-1pkca2jjp026t6bbo9jgi0ahlh0q6lle.apps.googleusercontent.com">
        <Auth />
      </GoogleOAuthProvider>
    </>
  )
}

export default App