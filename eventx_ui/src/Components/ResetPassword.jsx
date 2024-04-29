import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
const ResetPassword = () => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (show) {
        }
    }, [show]);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Open Forgot Password Dialog</button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="commonResultAppendDiv" dangerouslySetInnerHTML={{ __html: content }}></div>
        </Modal.Body>
      </Modal>
    </>
   );
  }
  
  export default ResetPassword;