import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import "./style.css";

const Details = (props) => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();

  console.log({ props });
  console.log({ id });
  console.log({ pathname });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  const goHome = (id) => {
    history.push("/");
  };

  return (
    <div className="details-container">
      <h2>Details {id} </h2>
      <p className="details-title">{post?.title}</p>
      <p>{post?.body}</p>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default Details;
