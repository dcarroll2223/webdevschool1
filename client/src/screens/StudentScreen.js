import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, Modal, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useEffect } from 'react';

export default function StudentScreen() {
  const [students, setStudents] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://webdevschool1.herokuapp.com/api/students/${id}`,
        {
          firstName,
          lastName,
        }
      );
      window.location = '/students';
    } catch (error) {
      console.log(error.message);
    }
    setShow(false);
  };
  const handleShow = (student) => {
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setId(student.id);
    setShow(true);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://webdevschool1.herokuapp.com/api/students/${id}`
      );
      window.location = '/students';
      // navigate('/students');
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://webdevschool1.herokuapp.com/api/students'
        );
        setStudents(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="mt-5">
      <Helmet>
        <title>Students</title>
      </Helmet>
      <h2 className="my-2">Enrolled Students</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                <Button variant="warning" onClick={() => handleShow(student)}>
                  Update
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Update current information</p>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={(e) => updateStudent(e)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
