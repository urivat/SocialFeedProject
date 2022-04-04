import React, { useState } from 'react';
import Post from './Components/post/Post';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {
  const [entries, setEntries] = useState([
    {name:'rashad', post:'N/A'},
  ])
  
function addNewPost(entry){
  let tempentries = [entries, entry];

  setEntries(tempentries);
}
  
  
  return (
    <div>
      <Post appEntries={entries}/>
    </div>
  );
}

export default App;
