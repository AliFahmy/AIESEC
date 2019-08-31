import React, { useState } from 'react';
import AiesecImg from '../../../assets/images/aiesec.png';
import './style.scss';
import { connect } from 'react-redux';
import { login } from './state/actions';
import { Button, TextField } from '@material-ui/core';

const Login = props => {
  const [user, setUser] = useState({ email: '', password: '' });
  const onSubmit = () => {
    props.login(user);
  };
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div className='login'>
      <div className='container'>
        <div className='base-container'>
          <div className='header' />
          <div className='content'>
            <div className='image'>
              <img src={AiesecImg} alt='logo' />
            </div>
            <label className='headLabel'>Login</label>
            <div className='form'>
              <div className='form-group'>
                <TextField
                  id='outlined-email-input'
                  label='Email'
                  type='email'
                  name='email'
                  autoComplete='email'
                  margin='normal'
                  variant='outlined'
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <TextField
                  id='outlined-password-input'
                  name='password'
                  label='Password'
                  type='password'
                  margin='normal'
                  variant='outlined'
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className='footer'>
            <Button variant='contained' color='primary' onClick={onSubmit}>
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);
