import React, { useState } from "react";
import Post from "./Components/Post/Post";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";
function App() {
  const [entries, setEntries] = useState([{ name: "rashad", post: "N/A" },{ name: "gail", post: "nya" }]);

  function addNewPost(entry) {
    let tempentries = [...entries, entry];

    setEntries(tempentries);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="border-box">
            
              <CreatePost addNewPostProperties={addNewPost} />
            
          </div>
          
        </div>
      </div>

       <DisplayPosts appEntries={entries}/> 
    </div>
  );
}

export default App;
