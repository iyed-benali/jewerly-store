import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const BuyerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      
      
      await signInWithEmailAndPassword(auth, email, password);
      
      
      console.log('Logged in with email/password');

    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      
      
      const provider = new GoogleAuthProvider();

      
      await signInWithPopup(auth, provider);
      
      
      console.log('Logged in with Google');

    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button" onClick={handleGoogleLogin}>Login with Google</button>
      </form>
    </div>
  );
};

export default BuyerLogin;
