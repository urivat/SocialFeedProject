const Post = ({entry}) => {
  return (
    <div>
      <h2> {entry.name}</h2>
      <p>{entry.post}</p>
      <button>button</button>
    </div>
  );
};

export default Post;
