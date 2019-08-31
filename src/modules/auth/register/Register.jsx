import React, { useState } from 'react';
import AiesecImg from '../../../assets/images/aiesec.png';
import './style.scss';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { register } from './state/actions';
const Register = props => {
  const [userName, setUsername] = useState('');

  const handleClick = () => {
    props.register(userName);
    props.history.push('/login');
  };
  const handleChange = event => {
    setUsername(event.target.value);
  };
  return (
    <div className='register'>
      <div className='container'>
        <div className='base-container'>
          <div className='header' />
          <div className='content'>
            <div className='image'>
              <img src={AiesecImg} alt='logo' />
            </div>
            <label className='headLabel'>Register</label>
            <div className='form'>
              <div className='form-group'>
                <TextField
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
            <Button variant='contained' color='primary' onClick={handleClick}>
              REGISTER
            </Button>
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
