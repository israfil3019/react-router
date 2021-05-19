import React from "react";

const Details = (props) => {
  return (
    <div>
      <h1>This is -----detail------ page</h1>
      <p>{props.match.params.id}</p>
    </div>
  );
};

export default Details;
