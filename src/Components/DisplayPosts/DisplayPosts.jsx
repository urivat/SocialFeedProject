import Post from "../Post/Post";

const DisplayPosts = ({appEntries}) => {
    
    
    return ( 
      <ul>
          {appEntries.map((entry) => <li><Post entry= {entry} /></li>)}

      </ul>
     );
}
 
export default DisplayPosts;