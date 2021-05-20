import { useState, useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="App">
      {posts?.map((post, index) => (
        <div
          key={index}
          style={{ border: "1px solid ", margin: 10, cursor: "pointer" }}
        >
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
