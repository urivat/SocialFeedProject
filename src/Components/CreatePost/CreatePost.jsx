import React, { useState } from "react";
import './CreatePost.css'

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      name: name,
      post: post,
    };
    console.log(newEntry);
    props.addNewPostProperties(newEntry);
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid" >
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Post</label>
        <textarea
          className="form-control"
          rows={3}
          value={post}
          onChange={(event) => setPost(event.target.value)}
        ></textarea>
      </div>
      <div>
        <button className='button'type="submit">Post</button>
      </div>
    </form>
  );
};

export default CreatePost;