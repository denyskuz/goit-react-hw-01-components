import React from 'react';
import { string, arrayOf, shape, number } from 'prop-types';
import classes from './Statistical.module.css';

const Statistics = ({ title, stats }) => (
  <section className={classes.statistics}>
    <h2 className={classes.title}>{title}</h2>
    <ul className={classes.items}>
      {stats.map(stat => (
        <li className={classes.item} key={stat.id}>
          <span className={classes.label}>{stat.label}</span>
          <span className={classes.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: string.isRequired,
  stats: arrayOf(
    shape({
      id: string.isRequired,
      label: string.isRequired,
      percentage: number.isRequired,
    }),
  ),
};
export default Statistics;
