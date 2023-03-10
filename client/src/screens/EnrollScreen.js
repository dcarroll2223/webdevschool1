import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EnrollScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', {
        firstName,
        lastName,
      });
      navigate('/students');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img src="img/programming.svg" className="img-fluid" alt="" />
        </Col>
        <Col md={6}>
          <Helmet>
            <title>Enroll</title>
          </Helmet>
          <h1>Enroll Today</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
            <div className="mb-3">
              <Button type="submit">Sign Up</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
