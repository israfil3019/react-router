import React, { useState, useEffect } from "react";

const Details = (props) => {
  const [post, setPost] = useState();

  console.log({ props });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h2>Details {props.match.params.id} </h2>
      <p>{post?.id}</p>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
    </div>
  );
};

export default Details;
