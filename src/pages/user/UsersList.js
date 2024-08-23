import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { List } from "react-content-loader";
import { toast } from "react-toastify";

import Layout from "../../components/layout/Layout";
import * as userService from "../../services/user.service";
import UserCard from "../../components/user/UserCard";

const UsersList = () => {
  const [users, setUsers] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchusers = async () => {
    try {
      setIsLoading(true);
      const response = await userService.retrieveAllUsers();
      setUsers(response);
    } catch (error) {
      const retrieveErrorMessage = () => {
        const errMessage = error?.response?.data?.message;
        //Coalescing Operator : The first operand is evaluated , If it is not null then the second operator is evaluated
        return errMessage ?? "Error connecting to the Server";
      };
      //We are not destructring the message because there wont be any message if the API is down and hence we are using optional chaining
      setErrorMessage(retrieveErrorMessage());
      toast.warn(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchusers();
  }, []);

  return (
    <Layout>
      {errorMessage ? (
        <p className="h4 text-center text-danger fw-bold mt-5">
          {errorMessage}
        </p>
      ) : (
        <>
          <h3 className="text-center mb-3">Users</h3>
          {isLoading && (
            <div className="text-center mt-5">
              <List />
            </div>
          )}
          <Row className="justify-content-center">
            {Object.values(users).map((user) => (
              <Col key={user.id} lg={4}>
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Layout>
  );
};

export default UsersList;
