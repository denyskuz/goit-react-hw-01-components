import React from 'react';
import { arrayOf, string, shape, bool, number } from 'prop-types';
import classes from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={classes.items}>
    {friends.map(friend => (
      <li className={classes.item} key={friend.id}>
        <span
          className={
            friend.isOnline ? classes.online : classes.offline
          }
        ></span>
        <img className={classes.img} src={friend.avatar} alt="" width="48" />
        <p className={classes.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: arrayOf(
    shape({
      id: number.isRequired,
      avatar: string.isRequired,
      name: string.isRequired,
      isOnline: bool.isRequired,
    }),
  ),
};

export default FriendList;
