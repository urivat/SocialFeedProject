import React, { useState } from "react";

const CreatePost = (props) => {
  const [name, setName] = useState("rashad");
  const [post, setPost] = useState("hello world");
  const [likeStatus, setLikeStatus] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      name: name,
      post: post,
    };
    console.log(newEntry);
    props.addNewEntryProperty(newEntry);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="Text"
          value={name}
          onchange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Post</label>
        <input
          type="Text"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
};

export default CreatePost;