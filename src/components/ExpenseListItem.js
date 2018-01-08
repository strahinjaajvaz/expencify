import React from "react";
import { Link } from "react-router-dom";

export default ({ description, amount, createdAt, id }) => {
  return (
    <div>
      <h3>
        <Link to={`/edit/${id}`}>Description: {description}</Link>
      </h3>
      <p>amount: {amount}</p>
      <p>createdAt: {createdAt}</p>
    </div>
  );
};
