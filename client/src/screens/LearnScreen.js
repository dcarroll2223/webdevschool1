import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function LearnScreen() {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate('/enroll');
  };

  return (
    <div>
      <section className="p-5">
        <Helmet>
          <title>Coursework</title>
        </Helmet>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md>
              <img src="img/fundamentals.svg" className="img-fluid" alt="" />
            </Col>
            <Col md className="p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                dolorem quo nisi porro voluptatem dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                temporibus dolores dicta soluta dolorem consequatur sequi
                laboriosam voluptate ipsa fugit voluptatibus tenetur mollitia
                eius, illo, delectus quidem possimus nihil qui.
              </p>
              <Button variant="light" className="mt-1" onClick={submitHandler}>
                <i className="bi bi-chevron-right"></i>
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="p-5 bg-dark text-light">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md className="p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                dolorem quo nisi porro voluptatem dolor.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                temporibus dolores dicta soluta dolorem consequatur sequi
                laboriosam voluptate ipsa fugit voluptatibus tenetur mollitia
                eius, illo, delectus quidem possimus nihil qui.
              </p>
              <Button variant="light" className="mt-1" onClick={submitHandler}>
                <i className="bi bi-chevron-right"></i>
                Get Started
              </Button>
            </Col>
            <Col md>
              <img src="img/react.svg" className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
