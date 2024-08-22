import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import * as userService from "../../services/user.service";
import { toast } from "react-toastify";

const RemoveUser = () => {
  const { userId } = useParams();
  const [userName, setUserName] = useState("");
  const getUserName = async (userId) => {
    try {
      const response = await userService.retrieveUser(userId);
      setUserName(response.name);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUserName(userId);
  }, [userId]);
  const DELAY_BEFORE_REDIRECTION = 1000;
  const handleSubmit = async () => {
    try {
      const response = await userService.removeUser(userId);
      if (response?.status) {
        toast.success(`User ${userId} has been removed successfully`);
        setTimeout(() => {
          window.location.href = "/";
        }, DELAY_BEFORE_REDIRECTION);
      } else {
        toast.warn(`Failed to remove user ${userId}`);
      }
    } catch (error) {
      toast.error(`Failed to remove user ${userId}`);
      console.error(error.message);
    }
  };
  const cancelAction = () => {
    window.location.href = "/";
  };
  return (
    <Layout>
      <h3 className="text-center">
        Are you sure, Do you want to remove the user {userId}. {userName}?
      </h3>
      <Container className="d-flex justify-content-center">
        <Button variant="danger" onClick={handleSubmit} className="m-1">
          Confirm
        </Button>
        <Button variant="secondary" onClick={cancelAction} className="m-1">
          Cancel
        </Button>
      </Container>
    </Layout>
  );
};

export default RemoveUser;
