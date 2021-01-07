import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {AppContext} from '../context/app-context'

export const Login = () => {
  const appContext = useContext(AppContext);
  // let token = appContext.accessToken;

  // hooks
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('NqYvP2s6jXSQgsqB');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  // useEffect(() => {
  //   console.log(token)
  // }, [token]);

  const onChangeEmail = (event) => {
    setValidEmail(event.target.validity.valid);
    setEmail(event.target.value);
  }

  const onChangePassword = (event) => {
    setValidPassword(event.target.validity.valid);
    setPassword(event.target.value);
  }

  const onLogin = () => {
    const data = {
      'username': email,
      'password': password
    }
    axios.post('https://vertex-ideaapp.azurewebsites.net/api/Auth/Login', data).then(res => {
      let access_token = res.data.data.access_token;
      appContext.login(access_token);
    }).catch(err => {
      console.error(err);
    })
  }

  return (
    <div>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1'
               className='form-label'>
          Email Address
        </label>
        <input type='email'
               className='form-control'
               id='exampleFormControlInput1'
               placeholder='name@example.com'
               value={email}
               onChange={onChangeEmail}
               required/>
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput2'
               className='form-label'>
          Password
        </label>
        <input type='password'
               className='form-control'
               id='exampleFormControlInput1'
               placeholder='***********'
               value={password}
               onChange={onChangePassword}
               minLength={3}
               required/>
      </div>
      <button type='button'
              className='btn btn-primary'
              disabled={!validPassword || !validEmail}
              onClick={onLogin}>
        Submit
      </button>
    </div>
  );
};
