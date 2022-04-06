import { useState } from "react";
import "./Post.css";

const Post = ({ entry }) => {
  const [buttonClassLike, setButtonClassLike] = useState("inactive");
  const [buttonClassDislike, setButtonClassDislike] = useState("inactive");

  function handleClick() {
    if (buttonClassLike === "inactive") {
      setButtonClassLike("active");
    } else {
      setButtonClassLike("inactive");
    }
  }
  function handleClickDislike() {
    if (buttonClassDislike === "inactive") {
      setButtonClassDislike("active");
    } else {
      setButtonClassDislike("inactive");
    }
  }
  return (
    <div className="table">
      <h2>{entry.name}</h2>
      <p>{entry.post}</p>
      <button className={buttonClassLike} onClick={handleClick}>
        Like
      </button>
      <button
        className={buttonClassDislike}
        onClick={handleClickDislike}
        style={{ "margin-left": "1em" }}
      >
        Dislike
      </button>
    </div>
  );
};

export default Post;
