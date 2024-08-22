import React, { useEffect, useState } from "react";
import * as userService from "../../services/user.service";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../layout/Layout";
import { Button, Form, Col, Row } from "react-bootstrap";
import { capitalizeText } from "../../helpers/string.helper";

const EditUser = () => {
  const { userId } = useParams();
  const DELAY_BEFORE_REDIRECTION = 1000;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const preFillFields = async () => {
    try {
      const user = await userService.retrieveUser(userId);
      setName(user.name);
      setEmail(user.email);
      setCity(user.city);
      setCountry(user.country);
      setTimeout(() => {
        window.location.href = "/";
      }, DELAY_BEFORE_REDIRECTION);
    } catch (error) {
      console.error(error.message);
      toast.error(`User ${userId} could'nt be found`);
      window.location.href = "/";
    }
  };
  useEffect(() => {
    preFillFields();
  }, [userId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const DELAY_BEFORE_REDIRECTION = 1500;
    const payload = {
      name,
      email,
      country,
      city,
    };
    try {
      const response = await userService.editUser(userId, payload);
      if (response?.status) {
        const userName = response.user.name;
        toast.success(`User ${userName} details updated successfully`);
        setTimeout(() => {
          window.location.href = `/get/${userId}`;
        }, DELAY_BEFORE_REDIRECTION);
      } else {
        toast.warn("The user could'nt be updated");
      }
    } catch (error) {
      const getErrorMessage = () => {
        const {
          data: {
            errors: { body },
          },
        } = error.response;
        const errMessage = body[0].message;
        return capitalizeText(errMessage);
      };
      toast.error(getErrorMessage());
    }
  };
  return (
    <Layout>
      <h3 className="text-center">Edit User</h3>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={country}
                placeholder="Enter country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Button className="m-1" variant="primary" onClick={handleSubmit}>
              Update User
            </Button>
            <Button
              className="m-1"
              variant="danger"
              as={NavLink}
              to={`/delete/${userId}`}
            >
              Remove User
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default EditUser;
