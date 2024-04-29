import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <Container fluid className="footerlog">
      <Row>
        <Col>
            <img src="images/EventCalender.svg" className="footer-img" alt="Eventx Logo" />
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>©</span> 2024 Eventx · All Rights Reserved · v1.0.0
        </Col>
     </Row>
    </Container>
  );
};

export default FooterComponent