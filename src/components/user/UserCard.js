import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <>
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
    </>
  );
};

export default UserCard;
