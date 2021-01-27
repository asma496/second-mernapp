import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  myform: {
    margin: 'auto',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      color: 'white',
    },
  },

}));

export default function Login() {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const history = useHistory();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { email, pwd }
    console.log(user)
    axios.post('http://localhost:4000/api/users/login', user)
      .then(res => {
        console.log(res.data)
        history.push('/');
      })
      .catch(err => console.log(err, 'error'));


  }
  return (
    // <div className="bg-image">

    <div className={classes.myform}>
      <h1 >Login form</h1>
      <form className={classes.root} noValidate onSubmit={handleSubmit}>
        <TextField type='email' id="standard-basic" label="your email" onChange={(e) => setEmail(e.target.value)} /> <br />
        {/* <InputLabel htmlFor="component-simple"><b>Password</b></InputLabel> */}

        <TextField type='password' id="standard-basic" label=" password" onChange={(e) => setPwd(e.target.value)} /> <br />

        <Button type='submit' onClick={handleSubmit} variant="contained" color="primary">
          Login
      </Button>
      </form>

    </div>
    // </div>
  );
}
