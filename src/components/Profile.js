import React from 'react';
import css from './Profile.module.css';
import PostThumbnail from './PostThumbnail';

function Profile(props) {
  const {store} = props;
  const userId = store.currentUserId;
  const user = store.users.find(u=>u.id===userId);
  const posts = store.posts.filter(p=>p.userId === userId);
  const followers = store.followers.filter(f=>f.userId === userId);
  const following = store.followers.filter(f=>f.followerId === userId);
return (
    <div>
        <header className={css.header}>
          <div className={css.photo}>
            <img src={user.photo} alt="Profile"/>
          </div>
          <div className={css.id}>
            <span>{userId}</span>
            {
              // userId!==store.currentUserId &&
              // <div>
              //   {followers.some(f=>f.followerId===store.currentUserId)?
              //     <button className={css.unfollowBtn} onClick={handleUnfollow}>Unfollow</button>
              //     :
              //     <button className={css.followBtn} onClick={handleFollow}>Follow</button>                  
              //   }
              // </div>
            }
          </div>
        </header>
        <div className={css.user}>
          <div className={css.name}>
            {user.name}
          </div>
          <div className={css.bio}>
            
            {user.bio}
          </div>
        </div>
        <ul className={css.activity}>
          <li>
            <span>{posts.length}</span><br/>
            posts
          </li>
          <li>
            <span>{followers.length}</span><br/>
            followers
          </li>
          <li>
          <span>{following.length}</span><br/>
            following
          </li>
        </ul>
        <div className={css.posts}>
          {posts.map(post=>
            //<Link key={post.id} to={`/${post.id}`}>
                       <PostThumbnail post={post}/>
           //</Link>
          )}
        </div>
    </div>
  );
}

export default Profile;