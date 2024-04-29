import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    // Validation
    const errors = {};
    if (!email) {
      errors.email = 'Email address is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    setErrors(errors);

    // If there are no errors, proceed with login
    if (Object.keys(errors).length === 0) {
      // Perform login logic here
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
          </div>
        <form onSubmit={handleLogin}> 
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
            <MDBInput
              wrapperClass='mb-4 mx-5 w-100'
              placeholder='Email'
              id='email'
              type='email'
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              errormessage={errors.email}
            />
            <MDBInput
              wrapperClass='mb-4 mx-5 w-100'
              placeholder='Password'
              id='password'
              type='password'
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              errormessage={errors.password}
            />
            <MDBBtn
              className="mb-4 px-5 mx-5 w-100"
              color='info'
              size='lg'
              type='button'
            >
              Login
            </MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="/forgetPassword">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="/register" className="link-info">Register here</a></p>
          </div>
        </form>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img
            src="images/notebook-with-list.jpg"
            alt="Login"
            className="w-100 h-100"
            style={{ objectFit: 'cover', objectPosition: 'left', marginTop:'40px' }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
