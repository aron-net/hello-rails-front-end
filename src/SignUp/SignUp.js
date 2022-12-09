import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postSignUp } from '../reducers/registration';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(postSignUp(user));
    navigate('/sign-in');
  };

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
          />

          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
          />

          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => { setPasswordConfirmation(e.target.value); }}
          />

          <input type="submit" value="Sing Up" />

          <div>
            <Link to="/greetings">Sign In</Link>
          </div>

        </form>

      </div>

    </div>

  );
};

export default SignUp;
