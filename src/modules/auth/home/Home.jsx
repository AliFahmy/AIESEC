import React from 'react'
import "./style.scss"
import AiesecImg from '../../../assets/images/aiesec.png';
import TravelImg from '../../../assets/images/travel.png';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';


const Home = () => {
    return (
        <div className="home">
            <div className="blue">
                <img className="img" src={TravelImg} alt='travel'/>
            </div>
            <div className="white">
            <div className='login'>
      <div className='container'>
        <div className='base-container'>
          <div className='content'>
            <div className='image'>
              <img src={AiesecImg} alt='logo' />
            </div>
            <label className='headLabel'>AIN SHAMS UNIVERSITY</label>
            <div className="navButtons">
            <Button variant="outline-primary" style={{width:'100px'}}>LOGIN</Button>
            <Button variant="outline-primary" style={{width:'100px'}}>REGISTER</Button>
            </div>
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
                />
              </div>
            </div>
          </div>
          <div className='footer'>
          <Button variant="outline-primary" style={{width:'100px'}}>LOGIN</Button>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    )
}

export default Home;