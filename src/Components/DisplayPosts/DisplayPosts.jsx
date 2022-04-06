import Post from "../Post/Post";

const DisplayPosts = ({appEntries}) => {
    
    
    return ( 
      <ul>
          {appEntries.map((entry) => <li key={entry.name}><Post entry= {entry}/></li>)}

      </ul>
     );
}
 
export default DisplayPosts;