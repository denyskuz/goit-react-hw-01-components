import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import statisticalData from '../fakeData/statistical-data.json';
import user from '../fakeData/user.json';
import friends from '../fakeData/friends.json';
import transactions from '../fakeData/transactions.json';

import classes from './App.module.css';

export const App = () => (
  <div className={classes.root}>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

