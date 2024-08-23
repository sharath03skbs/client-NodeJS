import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";

import * as userService from "../../services/user.service";

const RetrieveUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await userService.retrieveUser(userId);
      setUser(response);
    } catch (error) {
      setUser(null);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [userId]);
  return (
    <>
      {user ? (
        <Layout>
          <h3 className="text-center mb-3">User</h3>
          <Row className="justify-content-center" key={user.id}>
            <Col lg={4}>
              <Card className="text-center">
                <Card.Body>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                  {user.city && user.country && (
                    <p>
                      {user.city}-{user.country}
                    </p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Layout>
      ) : (
        <p className="text-center text-danger fw-bold h3 ">
          User cannot be found
        </p>
      )}
    </>
  );
};

export default RetrieveUser;
