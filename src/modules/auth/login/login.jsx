import React from "react";
import AiesecImg from "../../../aiesec.png";
import  "./style.scss"
import {connect} from 'react-redux'
import { changeEmail, changePassword,login } from "./state/actions";
import {Button,TextField} from '@material-ui/core';



const Login = (props) => {


const onSubmit = () => {

const user = {
  username: props.email,
  password: props.password
}

props.login(user)

}

    return (
        <div className="login">
          <div className="container" >
      <div className="base-container" >
        <div className="header">
            
          </div>
        <div className="content">
        <div className="image">
            <img src={AiesecImg} alt="logo" />
          </div>
        <label className="headLabel">Login</label>
          <div className="form">
            <div className="form-group">
              <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        onChange={props.changeEmail}
      />
     
            </div>
            <div className="form-group">
              <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        margin="normal"
        variant="outlined"
        onChange={props.changePassword}
      />
            </div>
          </div>
        </div>
        <div className="footer">
        <Button variant="contained" color="primary" onClick={onSubmit} >
            LOGIN
         </Button>
        </div>
      </div>
      </div>
      </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        email: state.email,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeEmail: (event) => dispatch(changeEmail(event.target.value)),
        changePassword: (event) => dispatch(changePassword(event.target.value)),
        login: (user) => dispatch(login(user))
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)