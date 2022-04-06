import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";
import "./Components/Post/Post.css";

function App() {
  const [entries, setEntries] = useState([
    { name: "rashad", post: "N/A" },
    { name: "gail", post: "nya" },
  ]);

  function addNewPost(entry) {
    let tempentries = [...entries, entry];

    setEntries(tempentries);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div>
          <div>
            <h3>
              Social
              <small className="text-muted">Feed</small>
            </h3>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="border-box">
            <CreatePost addNewPostProperties={addNewPost} />
          </div>
          <div className="border-box">
            <DisplayPosts appEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
