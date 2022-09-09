import React from 'react';
import { string, shape, number } from 'prop-types';
import classes from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={classes.profile}>
    <div className={classes.description}>
      <div className={classes.avatar}>
        <img src={avatar} alt="user avatar" />
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.tag}>@{tag}</p>
      <p className={classes.location}>{location}</p>
    </div>

    <ul className={classes.stats}>
      <li>
        <span className={classes.label}>Followers</span>
        <span className={classes.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={classes.label}>Views</span>
        <span className={classes.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={classes.label}>Likes</span>
        <span className={classes.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: string.isRequired,
  name: string.isRequired,
  tag: string.isRequired,
  location: string.isRequired,
  stats: shape({
    followers: number.isRequired,
    views: number.isRequired,
    likes: number.isRequired,
  }),
};

export default Profile;
