import React, { useState } from 'react';
import './style.scss';
import AiesecImg from '../../../assets/images/aiesec.png';
import TravelImg from '../../../assets/images/Earth.png';
import {
  validateEmail,
  validatePassword
} from '../../../HelperFunctions/validation.js';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../Home/state/actions';
const Home = props => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: false, password: false });
  const onSubmit = () => {
    props.login(user);
    // if (validateEmail(user.email) && validatePassword(user.password)) {
    //   setError({ email: false, password: false });
    //   props.login(user);
    // }
    // if (!validateEmail(user.email)) {
    //   setError({ ...error, email: true });
    // }
    // if (!validatePassword(user.password)) {
    //   setError({ ...error, email: true });
    // }
  };

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div className='home'>
      <div className='blue'>
        <img className='img' src={TravelImg} alt='travel' />
      </div>
      <div className='white'>
        <div className='login'>
          <div className='container'>
            <div className='base-container'>
              <div className='content'>
                <div className='image'>
                  <img src={AiesecImg} alt='logo' />
                </div>
                <label className='headLabel'>AIN SHAMS UNIVERSITY</label>
                <h3 className='loginLabel'> Login </h3>
                <div className='form'>
                  <div className='form-group'>
                    <TextField
                      error={error.email}
                      required
                      onChange={handleChange}
                      id='outlined-email-input'
                      label='Email'
                      type='email'
                      name='email'
                      autoComplete='email'
                      margin='normal'
                      variant='outlined'
                    />
                  </div>
                  <div className='form-group'>
                    <TextField
                      required
                      onChange={handleChange}
                      id='outlined-password-input'
                      name='password'
                      label='Password'
                      type='password'
                      margin='normal'
                      variant='outlined'
                    />
                  </div>
                </div>
              </div>
              <div className='footer'>
                <Button
                  onClick={onSubmit}
                  variant='outline-primary'
                  style={{ width: '100px' }}
                >
                  LOGIN
                </Button>
              </div>
            </div>
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
)(Home);
