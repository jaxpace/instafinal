import React, {useState} from "react";
import css from "./Post.module.css";
import timespan from "utils/timespan.js";
import publicUrl from "utils/publicUrl.js";

function Post(props) {
  const [comment, setComment] = useState('');
  const [toggleComment, setToggleComment] = useState(false); // hidden initially
  
  function handleLike() {
    props.onLike(props.post.id);
  }
  function handleUnlike() {
    props.onUnlike(props.post.id);
  }
  function handleSubmitComment(event){
  props.onComment(props.post.id, comment); // this calls addComment from App.js
  setComment(''); //reset
  setToggleComment(false); //close comment box
  event.preventDefault(); // prevent page refresh
}

  return (
    <article className={css.post}>
      <header className={css.header}>
        <button className={css.user} to={`/profile/${props.user.id}`}>
          <img src={publicUrl(props.user.photo)} alt="User Profile" />
          <span>{props.user.id} </span>
        </button>
      </header>
      <section className={css.content}>
        <div className={css.imgContainer}>
          <img src={publicUrl(props.post.photo)} alt="Post" />
        </div>
      </section>

      <section className={css.actions}>
        <button>
          {props.likes.self ? (
            <img
              src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Funlike.svg?v=1614382900439"
              alt="Unlike Action"
              onClick={handleUnlike}
            />
          ) : (
            <img
              src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Flike.svg?v=1614382900207"
              alt="Like Action"
              onClick={handleLike}
            />
          )}
        </button>
        <button  onClick={e=>setToggleComment(!toggleComment)}> 
          <img
            src="https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fcomment.svg?v=1614382900046"
            alt="Comment Action"
          />
        </button>
      </section>
      <section className={css.activity}>
        <div className={css.likes}>{props.likes.count} likes</div>
        <div className={css.comments}>
          <div>
            <span>{props.post.userId}</span>
            <span>{props.post.desc}</span>
          </div>
          {props.comments.map((comment, i) => (
            <div key={i}>
              <span>{comment.userId}</span>
              <span>{comment.text}</span>
            </div>
          ))}
        </div>
        <time className={css.time}>
          {timespan(props.post.datetime).toUpperCase()} AGO
        </time>
        {toggleComment && <form className={css.addComment} onSubmit={handleSubmitComment}>
          <input type="text" placeholder="Add a comment…" value={comment} onChange={e=>setComment(e.target.value)}/>
          <button type="submit">Post</button>
      </form>}
      </section>
    </article>
  );
}

export default Post;
