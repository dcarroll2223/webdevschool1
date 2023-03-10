import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate('/enroll');
  };
  const learnHandler = () => {
    navigate('/learn');
  };

  return (
    <div>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <Helmet>
          <title>FullStack Courses</title>
        </Helmet>
        <Container>
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <Button onClick={submitHandler} className="btn-lg">
                Start The Enrollment
              </Button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src="img/showcase.svg"
              alt=""
            />
          </div>
        </Container>
      </section>
      <section className="p-5 navbar-dark">
        <Container>
          <Row className="text-center g-4">
            <Col md>
              <Card bg="dark" text="light">
                <Card.Body className="text-center">
                  <h1 className="mb-3">
                    <i className="bi bi-laptop"></i>
                  </h1>
                  <Card.Title className="mb-3">Virtual</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt eaque animi corrupti facilis libero in.
                  </Card.Text>
                  <Button variant="primary" onClick={learnHandler}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card bg="secondary" text="light">
                <Card.Body className="text-center">
                  <h1 className="mb-3">
                    <i className="bi bi-person-square"></i>
                  </h1>
                  <Card.Title className="mb-3">Hybrid</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt eaque animi corrupti facilis libero in.
                  </Card.Text>
                  <Button variant="dark" onClick={learnHandler}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card bg="dark" text="light">
                <Card.Body className="text-center">
                  <h1 className="mb-3">
                    <i className="bi bi-people"></i>
                  </h1>
                  <Card.Title className="mb-3">In Person</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt eaque animi corrupti facilis libero in.
                  </Card.Text>
                  <Button variant="primary" onClick={learnHandler}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
