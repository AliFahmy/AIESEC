import React, { useState } from 'react';
import AiesecImg from '../../../assets/images/aiesec.png';
import './style.scss';
import { connect } from 'react-redux';
import WalkAlone from '../../../assets/images/boy.png';
import { validateEmail } from '../../../HelperFunctions/validation.js';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { register } from './state/actions';
const Register = props => {
  const [userName, setUsername] = useState('');
  const [emailError, setEmailError] = useState(false);
  const handleClick = () => {
    if (validateEmail(userName)) {
      setEmailError(false);
      props.register(userName);
      return;
    } else {
      console.log('error');
      setEmailError(true);
    }
  };
  const handleChange = event => {
    setUsername(event.target.value);
  };
  return (
    <div className='registerhome'>
      <div className='blue'>
        <h1 className='Title'>Register New Aiesec Member</h1>
        <img src={WalkAlone} alt='logo' />
      </div>
      <div className='white'>
        <div className='register'>
          <div className='register-container'>
            <div className='register-base-container'>
              <div className='register-header' />
              <div className='register-content'>
                <div className='image'>
                  <img src={AiesecImg} alt='logo' />
                </div>
                <label className='headLabel'>Register</label>
                <div className='form'>
                  <div className='form-group'>
                    <TextField
                      error={emailError}
                      label='Email'
                      type='email'
                      name='email'
                      autoComplete='email'
                      margin='normal'
                      variant='outlined'
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className='footer'>
                <Button
                  onClick={handleClick}
                  variant='outline-primary'
                  style={{ width: '100px' }}
                >
                  REGISTER
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
    register: userName => dispatch(register(userName))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Register);
