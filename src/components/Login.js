import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

function Login({ setLoggedIn }) {
  return (
    <div className="Login">
      <h2>Login for Jokes</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => {
          axios.post('http://192.168.1.220:3300/api/auth/login', values)
            .then(res => {
              localStorage.setItem('JWT', res.data.token);
              setLoggedIn(true);
            });
        }}
      >
        <Form>
          <label>Username: </label>
          <Field type='text' name='username' />
          <br/>
          <label>Password: </label>
          <Field type='password' name='password' />
          <br/>
          <button type='submit'>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
