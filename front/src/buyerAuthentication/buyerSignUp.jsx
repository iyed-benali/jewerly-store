import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';
import auth from '../config/firebase'
import { useNavigate } from 'react-router';

const BuyerSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
const naivgate = useNavigate()
  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log(user.uid)

      // Send additional user data to your backend using Axios
      await axios.post('http://localhost:3000/api/buyers', {
        uid : user.uid,
        name,
        email,
        address,
        password,
      });
     naivgate('/buyerLogin')
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className='main-main'>
       <h2 className="heading">Sign Up</h2>
       <form className="form_main">
         <div className="inputContainer">
           <label>Name:</label>
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="inputField" />
         </div>
         <div className="inputContainer">
           <label>Email:</label>
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inputField" />
         </div>
         <div className="inputContainer">
           <label>Address:</label>
           <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="inputField" />
         </div>
         <div className="inputContainer">
           <label>Password:</label>
           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="inputField" />
         </div>
         <button type="button" onClick={handleSignUp} className="button">Sign Up</button>
       </form>
    </div>
   );
};

export default BuyerSignUp;