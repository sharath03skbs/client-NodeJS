import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Layout from "../layout/Layout";

import * as userService from "../../services/user.service";
import { NavLink } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState({});
  const fetchusers = async () => {
    const response = await userService.retrieveAllUsers();
    setUsers(response);
  };

  useEffect(() => {
    fetchusers();
  }, []);

  return (
    <Layout>
      <h3 className="text-center mb-3">Users</h3>
      {Object.values(users).map((user) => (
        <Row key={user.id} className="justify-content-center">
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                {user.city && user.country && (
                  <p>
                    {user.city}-{user.country}
                  </p>
                )}
                <Button
                className="mx-4"
                  variant="secondary"
                  as={NavLink}
                  to={`/edit/${user.id}`}
                >
                  Edit User
                </Button>
                <Button
                  className="mx-4"
                  variant="danger"
                  as={NavLink}
                  to={`/delete/${user.id}`}
                >
                  Remove User
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Layout>
  );
};

export default UsersList;
