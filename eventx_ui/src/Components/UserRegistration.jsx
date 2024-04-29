import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:'',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const errors = useState('');
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
    setFormSubmitted(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here (e.g., check if fields are not empty, valid email format, etc.)
    // Validation
    
    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please re-enter your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // If there are no errors, submit the form
      setFormSubmitted(true);
    } else {
      setFormErrors(errors);
    }
    // You can also submit the form data to the server here
    console.log('Form submitted:', formData);
    if(formSubmitted){
      try {
        // Make POST request to your local URL
        const response = axios.post('http://localhost:8040/api/v1/users', formData);
        // Handle success
        setMessage(response.data.message);
        // Redirect to login page after successful registration
        
      } catch (error) {
        // Handle error
        setMessage(error.response.data.error);
      }
      navigate('/login',{ message: message});
    }
  };

  

  return (
    <MDBContainer fluid>
    <MDBRow>
      <MDBCol sm='6'>
        <div className='d-flex flex-row ps-5 pt-5'>
          <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
        </div>
      <form onSubmit={handleSubmit}> 
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
            errormessage={errors.firstName}
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
            errormessage={errors.lastName}
          />
          <MDBInput
            wrapperClass='mb-4 mx-5 w-100'
            placeholder='Email address'
            id='email'
            name='email'
            type='email'
            size="lg"
            value={formData.email}
            onChange={handleChange}
            errormessage={errors.email}
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
            errormessage={errors.password}
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
            errormessage={errors.confirmPassword}
          />
          <MDBBtn
            className="mb-4 px-5 mx-5 w-100"
            color='info'
            size='lg'
            type='submit'
          >
            Register
          </MDBBtn>
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
