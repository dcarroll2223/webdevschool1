import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function QuestionsScreen() {
  return (
    <div>
      <section className="p-5">
        <Helmet>
          <title>Questions</title>
        </Helmet>
        <Container>
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Where exactly are you located?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How much does it cost to attend?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What do I need to know?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
      <section className="p-5 bg-primary">
        <Container>
          <h2 className="text-center text-white">Our Instructors</h2>
          <p className="lead text-center text-white mb-5">
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="bg-light">
                <Card.Body className="text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <Card.Title className="mb-3">John Doe</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    doloremque libero iste porro, maxime doloribus.
                  </Card.Text>
                  <a href="/">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="bg-light">
                <Card.Body className="text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <Card.Title className="mb-3">Jane Doe</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    doloremque libero iste porro, maxime doloribus.
                  </Card.Text>
                  <a href="/">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="bg-light">
                <Card.Body className="text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <Card.Title className="mb-3">Jim Smith</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    doloremque libero iste porro, maxime doloribus.
                  </Card.Text>
                  <a href="/">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="bg-light">
                <Card.Body className="text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <Card.Title className="mb-3">Sara Smith</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    doloremque libero iste porro, maxime doloribus.
                  </Card.Text>
                  <a href="/">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="/">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
