import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const HomePage = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [flag, setFlag] = useState(1);
    const animationText = 'Manage Your Events';

    useEffect(() => {
        changeText(animationText, index, flag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeText = (text, index, flag) => {
        if (index === text.length + 1 || index === -1) {
            setFlag(-flag);
            setIndex(index - flag);
        } else {
            setText(text.substring(0, index));
            setTimeout(() => changeText(text, index + flag, flag), 150);
        }
    };

  return (
    <Container style={{ padding: '80px 0' }}>
      <Row>
        <h1 className="display-2 text-center animated fadeInDown">
        <span className="animated">{text}<span className="animating-cursor" style={{ fontWeight: 100 }}>|</span></span>
        </h1>
        <div className="text-center">
            <span className="display-6" style={{ color: '#000' }}>
                EventX: Your Ultimate Event List!
            </span>
        </div>
        <p className="lead mx-auto text-center py-md-4 description px-4 py-sm-2">
            Welcome to <strong>"EventX"</strong> where organizing your event becomes a breeze! 
            Whether you're arranging a birthday bash, a corporate conference, or a wedding extravaganza, we've got you covered. 
            Dive into our interactive event to-do list and make planning your next big event a stress-free experience!
        </p> 
        <div className="text-center">
          <span className="badge" style={{ background: '#EEE', color: '#666' }}>v1.0.0 / 26 April, 2024</span>
        </div>
      </Row>
    </Container>
  );
};

export default HomePage;
