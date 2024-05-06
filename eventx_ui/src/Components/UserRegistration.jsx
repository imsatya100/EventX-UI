import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { Alert, Button } from 'react-bootstrap';
import axios from 'axios';
import { forwardMessage } from '../redux/actions';
import { useDispatch } from 'react-redux';
const UserRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:'',
  });
  const  [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here (e.g., check if fields are not empty, valid email format, etc.)
    setErrorMsg('');
    setShowAlert(true);
    setMessage("User created successfully...");
    dispatch(forwardMessage(message));
    navigate('/login');
    
    if (!formData.firstName) {
      setErrorMsg('First Name is required');
      return;
    }
    if (!formData.lastName) {
      setErrorMsg('Last Name is required');
      return;
    }
    if (!formData.email) {
      setErrorMsg('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg('Email is invalid');
      return;
    }
    if (!formData.password) {
      setErrorMsg('Password is required');
      return;
    } else if (formData.password.length < 8) {
      setErrorMsg('Password must be at least 8 characters long');
      return;
    }
    if (!formData.confirmPassword) {
      setErrorMsg('Please re-enter your password');
      return;
    } else if (formData.password !== formData.confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }
    // You can also submit the form data to the server here
    setShowAlert(false);
    console.log('Form Submitted:', formData);
      try {
        // Make POST request to your local URL
        const response = axios.post('http://localhost:8040/api/v1/users', formData);
        // Handle success
        setMessage(response.data.message);
      } catch (error) {
        error.preventDefault = true;
        // Handle error
        setMessage(error.response.data.error);
      }
      dispatch(forwardMessage(message));
  };

   return (
    <MDBContainer fluid>
    <MDBRow>
      <MDBCol sm='6'>
        <div className='d-flex flex-row ps-5 pt-5'>
          <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
        </div>
      <form onSubmit={handleSubmit}> 
        {showAlert && <Alert variant="danger">{errorMsg}</Alert>}
        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
          <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Register</h3>
          <MDBInput
            wrapperClass='mb-4 mx-5 w-100'
            placeholder='First Name'
            id='firstName'
            name='firstName'
            type='text'
            size="lg"
            value={formData.firstName}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass='mb-4 mx-5 w-100'
            placeholder='Last Name'
            id='lastName'
            name='lastName'
            type='text'
            size="lg"
            value={formData.lastName}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass='mb-4 mx-5 w-100'
            placeholder='Email address'
            id='email'
            name='email'
            type='text'
            size="lg"
            value={formData.email}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass='mb-4 mx-5 w-100'
            placeholder='Password'
            id='password'
            name='password'
            type='password'
            size="lg"
            value={formData.password}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass='mb-4 mx-5 w-100'
            placeholder='Confirm Password'
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            size="lg"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button
            className="mb-4 px-5 mx-5 w-100"
            color='info'
            size='lg'
            type='submit'
          >
            Register
          </Button>
          <p className='ms-5'>Already have an account? <a href="/login" className="link-info">Login here</a></p>
        </div>
      </form>          
      </MDBCol>
      <MDBCol sm='6' className='d-none d-sm-block px-0'>
        <img
          src="images/notebook-with-list.jpg"
          alt="Register"
          className="w-100 h-100"
          style={{ objectFit: 'cover', objectPosition: 'left', marginTop:'40px' }}
        />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default UserRegistration;
