import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import ResetPassword from './ResetPassword';
import ModalDialougePopUP from './ModalDialougePopUP';
import { Alert, Button } from 'react-bootstrap';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const message = '';
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    setShowAlert(false);
    setError('');
    // Validation
    if (!email) {
      setError('Email address is required');
      setShowAlert(true);
      return;
    }
    if (!password) {
      setError('Password is required');
      setShowAlert(true);
      return;
    }
    // If there are no errors, proceed with login
    
  };
  
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
          </div>
        <form onSubmit={handleLogin}> 

        {showAlert && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="info">{message}</Alert>}
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
            <MDBInput
              wrapperClass='mb-4 mx-5 w-100'
              placeholder='Email'
              id='email'
              name='email'
              type='text'
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4 mx-5 w-100'
              placeholder='Password'
              id='password'
              name='password'
              type='password'
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="mb-4 px-5 mx-5 w-100"
              color='info'
              size='lg'
              type='submit'
            >
              Login
            </Button>
            
            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!" onClick={openModal}>Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="/register" className="link-info">Register here</a></p>
          </div>
          <ModalDialougePopUP 
            show={showModal} 
            onClose={closeModal} 
            title="Reset Password" 
            bodyContent={<ResetPassword />} 
          />
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
