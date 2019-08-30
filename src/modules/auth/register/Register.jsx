import React from 'react';
import AiesecImg from '../../../assets/images/aiesec.png';
import './style.scss';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import { register, changeUsername } from './state/actions';
const Register = props => {
  const handleClick = () => {
    props.register(props.userName);
    props.history.push('/login');
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
                  onChange={props.changeUsername}
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
const mapStateToProps = state => {
  return {
    userName: state.register.userName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeUsername: event => dispatch(changeUsername(event.target.value)),
    register: userName => dispatch(register(userName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
