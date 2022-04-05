import React, { useState } from 'react';
import Post from './Components/Post/Post';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {
  const [entries, setEntries] = useState([
    {name:'rashad', post:'N/A'},
  ])
  
function addNewPost(entry){
  let tempentries = [...entries, entry ];

  setEntries(tempentries);
}
  
  
  return (
    
    <div>
      <Post appEntries={entries}/>
      <CreatePost addNewPostProperties={addNewPost}/>
       {/* <DisplayPosts appEntries={entries}/> */} 
       
    </div>

  );
}

export default App;
