const Post = (props) => {
  return (
    <table>
      <thead>
        {props.appEntries.map((entry) => {
          return (
            <tr>
              <td>{entry.name}</td>
            </tr>
          );
        })}
      </thead>
      <tbody>
        {props.appEntries.map((entry) => {
          return (
            <tr>
              <td>{entry.post}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Post;
