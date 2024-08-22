import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Layout from "../layout/Layout";

import * as userService from "../../services/user.service";
import { capitalizeText } from "../../helpers/string.helper";

const CreateUser = () => {
  const DELAY_BEFORE_REDIRECTION = 1000;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      country,
      city,
    };
    try {
      const response = await userService.createUser(payload);
      //Optional Chaining
      if (response?.status) {
        const getUserId = () => response?.user?.id;
        toast.success(`User ${getUserId()} successfully created!`);
        //Clear States
        setName("");
        setEmail("");
        setCountry("");
        setCity("");
        setTimeout(() => {
          window.location.href = "/";
        }, DELAY_BEFORE_REDIRECTION);
      } else {
        toast.warn("The user could'nt be created");
        setTimeout(() => {
          window.location.href = "/";
        }, DELAY_BEFORE_REDIRECTION);
      }
    } catch (error) {
      const getErrorMessage = () => {
        const {
          response: {
            data: {
              errors: { body },
            },
          },
        } = error;
        /*Without nested destructuring
      const { body } = error.response.data.errors;*/
        const errMessage = body[0]?.message;
        return capitalizeText(errMessage);
      };

      toast.error(getErrorMessage());
    }
  };

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add User
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default CreateUser;
